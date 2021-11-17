import "mapbox-gl/dist/mapbox-gl.css";

import "./css/settings.css";
import "./css/map_style.css";
import "./css/alerts.css";
import "./css/box_overlays.css";
import "./css/base.css";
import "./css/buttons.css";
import "./css/navbar.css";

import "./css/mobile.css";
import "./css/survey.css";
import { add_longform_survey_to_database } from "./js/api/add_to_database";
import {
  add_basic_question_to_survey,
  load_1_to_5_question_set,
  load_prioritization_question,
} from "./js/survey/add_questions_to_html";
import {
  get_multiselect_input,
  get_radio_input,
  get_textarea_input,
  get_priority_ranking,
} from "./js/survey/get_survey_responses_from_html";
import {
  GO_TO_ES_DEMOGRAPHICS_PAGE_URL,
  GO_TO_ES_THANKS_PAGE_URL,
} from "./js/api/base";

let q1 = {
  id: "q1",
  base_div: "questions-about-travel",
  prompt:
    "Cuando utiliza Cecil B. Moore Avenue, ¿para qué la utiliza? <br/> [marque todas las opciones que correspondan]",
  type: "checkbox",
  other: true,
  options: [
    "Trasladarse al trabajo",
    "Trasladarse a la escuela",
    "Hacer recados o ir de compras",
    "Ir a servicios religiosos",
    "Ir a restaurantes o bares, eventos sociales o entretenimiento",
    "Actualmente no utilizo Cecil B. Moore Avenue",
  ],
  loader_function: add_basic_question_to_survey,
};

let q2 = {
  id: "q2",
  base_div: "questions-about-travel",
  prompt:
    "¿Con cuánta frecuencia se traslada a destinos en Cecil B. Moore Avenue o cerca de ella?",
  type: "radio",
  other: false,
  options: [
    "Todos los días",
    "Cada semana",
    "Cada varias semanas",
    "Cada mes",
    "Cada varios meses",
    "Nunca",
  ],
  loader_function: add_basic_question_to_survey,
};

let q3 = {
  id: "q3",
  base_div: "questions-about-travel",
  prompt:
    "Pensando en el mes pasado, ¿cómo se ha trasladado a destinos en Cecil B. Moore Avenue o cerca de ella? <br/>[marque todas las opciones que correspondan]",
  type: "checkbox",
  other: false,
  options: [
    "En automóvil, sin compañía",
    "En automóvil, con otras personas",
    "Caminando",
    "En bicicleta",
    "En autobús o tren",
    "Uber/Lyft",
    "Taxi",
  ],
  loader_function: add_basic_question_to_survey,
};

let q4 = {
  id: "q4",
  base_div: "questions-about-travel",
  prompt:
    "¿Hay tipos de traslados de la pregunta anterior que le gustaría hacer más, y qué le impide trasladarse de esa manera con más frecuencia?",
  type: "textarea",
  other: false,
  options: false,
  loader_function: add_basic_question_to_survey,
};

let q5 = {
  id: "q5",
  base_div: "questions-about-priorities",
  prompt:
    "En una escala del 1 al 5, ¿cómo calificaría las condiciones actuales de los siguientes conceptos en Cecil B. Moore Ave.?",
  type: "radio",
  other: false,
  options: [
    "Seguridad contra colisiones",
    "Problemas de estacionamiento ilegal",
    "Uso del espacio vial (carriles de circulación, estacionamiento, carriles de bicicleta)",
    "Tráfico y congestión",
    "Instalaciones de transporte público",
    "Marcas en el pavimento",
    "Baches/superficie de rodamiento",
    "Aceras",
    "Drenaje (charcos, inundaciones, etc.)",
  ],
  loader_function: load_1_to_5_question_set,
};

let q6 = {
  id: "q6",
  base_div: "questions-about-priorities",
  prompt:
    "Seleccione y priorice sus cinco principales objetivos para este proyecto:",
  type: "special",
  other: false,
  options: [
    "Cruces peatonales seguros",
    "Carriles para bicicletas seguros",
    "Conducción menos agresiva",
    "Más espacio peatonal",
    "Mejores estacionamientos y zonas de carga",
    "Espacios seguros para subir a autobuses",
    "Tiempos de conducción rápidos",
    "Menos tráfico en las calles laterales",
    "Otro: ",
  ],
  loader_function: load_prioritization_question,
};

let q7 = {
  id: "q7",
  base_div: "questions-about-priorities",
  prompt:
    "¿Cómo cree que podría mejorarse la seguridad en Cecil B. Moore Avenue?",
  type: "textarea",
  other: false,
  options: false,
  loader_function: add_basic_question_to_survey,
};

[q1, q2, q3, q4, q5, q6, q7].forEach((q) => {
  q.loader_function(q, "es");
});

// wire the button click
document
  .getElementById("form-for-survey")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

document.getElementById("submit-button").onclick = () => {
  let data = {
    usage: get_multiselect_input("q1"),
    frequency: get_radio_input("q2"),
    mode: get_multiselect_input("q3"),
    mode_issues: get_textarea_input("q4"),
    condition_1: get_radio_input("q5-1"),
    condition_2: get_radio_input("q5-2"),
    condition_3: get_radio_input("q5-3"),
    condition_4: get_radio_input("q5-4"),
    condition_5: get_radio_input("q5-5"),
    condition_6: get_radio_input("q5-6"),
    condition_7: get_radio_input("q5-7"),
    condition_8: get_radio_input("q5-8"),
    condition_9: get_radio_input("q5-9"),
    priorities: get_priority_ranking("q6"),
    ideas: get_textarea_input("q7"),
  };

  console.log(data);

  add_longform_survey_to_database(data).then(async (response) => {
    if (response.user_was_added) {
      window.location.replace(GO_TO_ES_DEMOGRAPHICS_PAGE_URL);
    } else {
      window.location.replace(GO_TO_ES_THANKS_PAGE_URL);
    }
  });
};
