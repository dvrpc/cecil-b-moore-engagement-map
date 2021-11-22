import "./css/settings.css";
import "./css/base.css";
import "./css/map_style.css";
import "./css/alerts.css";
import "./css/box_overlays.css";
import "./css/buttons.css";
import "./css/navbar.css";
import "./css/mobile.css";
import "./css/survey.css";

import { add_user_info_to_database } from "./js/api/add_to_database";
import { add_basic_question_to_survey } from "./js/survey/add_questions_to_html";
import {
  get_multiselect_input,
  get_radio_input,
  get_textarea_input,
} from "./js/survey/get_survey_responses_from_html";

import {
  GO_TO_ES_HOME_PAGE_URL,
  GO_TO_ES_THANKS_PAGE_URL,
} from "./js/api/base";

let q1 = {
  id: "q1",
  base_div: "questions-about-demographics",
  prompt: "¿Es usted de origen hispano, latino o español?",
  type: "radio",
  other: false,
  options: ["Sí", "No"],
  loader_function: add_basic_question_to_survey,
};

let q2 = {
  id: "q2",
  base_div: "questions-about-demographics",
  prompt:
    "¿Con qué raza se identifica? [marque todas las opciones que correspondan]",
  type: "checkbox",
  other: true,
  options: [
    "Indígenas de las Américas o nativo de Alaska",
    "Asiático o de las islas del Pacífico",
    "Africano o afroamericano",
    "Blanco",
  ],
  loader_function: add_basic_question_to_survey,
};

let q3 = {
  id: "q3",
  base_div: "questions-about-demographics",
  prompt: "¿Cuál es su edad?",
  type: "radio",
  other: false,
  options: [
    "Menor de 18",
    "18 - 34",
    "35 - 44",
    "45 - 54",
    "55 - 64",
    "65 - 74",
    "75 años o mayor",
  ],
  loader_function: add_basic_question_to_survey,
};

let q4 = {
  id: "q4",
  base_div: "questions-about-demographics",
  prompt:
    "¿Se considera una persona con una discapacidad que requiere asistencia para la movilidad, como un bastón, andadera, scooter o silla de ruedas?",
  type: "radio",
  other: false,
  options: ["Sí", "No"],
  loader_function: add_basic_question_to_survey,
};

let q5 = {
  id: "q5",
  base_div: "questions-about-demographics",
  prompt: "¿Cuál es su género?",
  type: "input",
  other: false,
  options: false,
  loader_function: add_basic_question_to_survey,
};

let q6 = {
  id: "q6",
  base_div: "questions-about-demographics",
  prompt: "¿Cuál es su código postal?",
  type: "input",
  other: false,
  options: false,
  loader_function: add_basic_question_to_survey,
};

let q7 = {
  id: "q7",
  base_div: "questions-about-demographics",
  prompt:
    "¿Quiere mantenerse informado sobre este proyecto? Si es así, suscríbase con su dirección de correo electrónico:",
  type: "input",
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
    q1: get_radio_input("q1"),
    q2: get_multiselect_input("q2"),
    q3: get_radio_input("q3"),
    q4: get_radio_input("q4"),
    q5: get_textarea_input("q5"),
    q6: get_textarea_input("q6"),
    q7: get_textarea_input("q7"),
  };

  add_user_info_to_database(data).then(async (response) => {
    window.location.replace(GO_TO_ES_THANKS_PAGE_URL);
  });
};

document.getElementById("nothanks-button").onclick = () => {
  window.location.replace(GO_TO_ES_HOME_PAGE_URL);
};
