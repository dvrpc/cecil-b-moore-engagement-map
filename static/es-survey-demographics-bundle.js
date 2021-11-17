/*! For license information please see es-survey-demographics-bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./assets/es_demographic_survey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_settings_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/settings.css */ "./assets/css/settings.css");\n/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.css */ "./assets/css/base.css");\n/* harmony import */ var _css_map_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/map_style.css */ "./assets/css/map_style.css");\n/* harmony import */ var _css_alerts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/alerts.css */ "./assets/css/alerts.css");\n/* harmony import */ var _css_box_overlays_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/box_overlays.css */ "./assets/css/box_overlays.css");\n/* harmony import */ var _css_buttons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/buttons.css */ "./assets/css/buttons.css");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/navbar.css */ "./assets/css/navbar.css");\n/* harmony import */ var _css_mobile_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/mobile.css */ "./assets/css/mobile.css");\n/* harmony import */ var _css_survey_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/survey.css */ "./assets/css/survey.css");\n/* harmony import */ var _js_api_add_to_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/api/add_to_database */ "./assets/js/api/add_to_database.js");\n/* harmony import */ var _js_survey_add_questions_to_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/survey/add_questions_to_html */ "./assets/js/survey/add_questions_to_html.js");\n/* harmony import */ var _js_survey_get_survey_responses_from_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/survey/get_survey_responses_from_html */ "./assets/js/survey/get_survey_responses_from_html.js");\n/* harmony import */ var _js_api_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/api/base */ "./assets/js/api/base.js");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet q1 = {\n  id: "q1",\n  base_div: "questions-about-demographics",\n  prompt: "¿Es usted de origen hispano, latino o español?",\n  type: "radio",\n  other: false,\n  options: ["Sí", "No"],\n  loader_function: _js_survey_add_questions_to_html__WEBPACK_IMPORTED_MODULE_10__.add_basic_question_to_survey,\n};\n\nlet q2 = {\n  id: "q2",\n  base_div: "questions-about-demographics",\n  prompt:\n    "¿Con qué raza se identifica? [marque todas las opciones que correspondan]",\n  type: "checkbox",\n  other: true,\n  options: [\n    "Indígenas de las Américas o nativo de Alaska",\n    "Asiático o de las islas del Pacífico",\n    "Africano o afroamericano",\n    "Blanco",\n  ],\n  loader_function: _js_survey_add_questions_to_html__WEBPACK_IMPORTED_MODULE_10__.add_basic_question_to_survey,\n};\n\nlet q3 = {\n  id: "q3",\n  base_div: "questions-about-demographics",\n  prompt: "¿Cuál es su edad?",\n  type: "radio",\n  other: false,\n  options: [\n    "Menor de 18",\n    "18 - 34",\n    "35 - 44",\n    "45 - 54",\n    "55 - 64",\n    "65 - 74",\n    "75 años o mayor",\n  ],\n  loader_function: _js_survey_add_questions_to_html__WEBPACK_IMPORTED_MODULE_10__.add_basic_question_to_survey,\n};\n\nlet q4 = {\n  id: "q4",\n  base_div: "questions-about-demographics",\n  prompt:\n    "¿Se considera una persona con una discapacidad que requiere asistencia para la movilidad, como un bastón, andadera, scooter o silla de ruedas?",\n  type: "radio",\n  other: false,\n  options: ["Sí", "No"],\n  loader_function: _js_survey_add_questions_to_html__WEBPACK_IMPORTED_MODULE_10__.add_basic_question_to_survey,\n};\n\nlet q5 = {\n  id: "q5",\n  base_div: "questions-about-demographics",\n  prompt: "¿Cuál es su género?",\n  type: "input",\n  other: false,\n  options: false,\n  loader_function: _js_survey_add_questions_to_html__WEBPACK_IMPORTED_MODULE_10__.add_basic_question_to_survey,\n};\n\nlet q6 = {\n  id: "q6",\n  base_div: "questions-about-demographics",\n  prompt: "¿Cuál es su código postal?",\n  type: "input",\n  other: false,\n  options: false,\n  loader_function: _js_survey_add_questions_to_html__WEBPACK_IMPORTED_MODULE_10__.add_basic_question_to_survey,\n};\n\nlet q7 = {\n  id: "q7",\n  base_div: "questions-about-demographics",\n  prompt:\n    "¿Quiere mantenerse informado sobre este proyecto? Si es así, suscríbase con su dirección de correo electrónico:",\n  type: "input",\n  other: false,\n  options: false,\n  loader_function: _js_survey_add_questions_to_html__WEBPACK_IMPORTED_MODULE_10__.add_basic_question_to_survey,\n};\n[q1, q2, q3, q4, q5, q6, q7].forEach((q) => {\n  q.loader_function(q, "es");\n});\n\n// wire the button click\ndocument\n  .getElementById("form-for-survey")\n  .addEventListener("submit", function (event) {\n    event.preventDefault();\n  });\n\ndocument.getElementById("submit-button").onclick = () => {\n  let data = {\n    q1: (0,_js_survey_get_survey_responses_from_html__WEBPACK_IMPORTED_MODULE_11__.get_radio_input)("q1"),\n    q2: (0,_js_survey_get_survey_responses_from_html__WEBPACK_IMPORTED_MODULE_11__.get_multiselect_input)("q2"),\n    q3: (0,_js_survey_get_survey_responses_from_html__WEBPACK_IMPORTED_MODULE_11__.get_radio_input)("q3"),\n    q4: (0,_js_survey_get_survey_responses_from_html__WEBPACK_IMPORTED_MODULE_11__.get_radio_input)("q4"),\n    q5: (0,_js_survey_get_survey_responses_from_html__WEBPACK_IMPORTED_MODULE_11__.get_textarea_input)("q5"),\n    q6: (0,_js_survey_get_survey_responses_from_html__WEBPACK_IMPORTED_MODULE_11__.get_textarea_input)("q6"),\n    q7: (0,_js_survey_get_survey_responses_from_html__WEBPACK_IMPORTED_MODULE_11__.get_textarea_input)("q7"),\n  };\n\n  (0,_js_api_add_to_database__WEBPACK_IMPORTED_MODULE_9__.add_user_info_to_database)(data).then(async (response) => {\n    window.location.replace(_js_api_base__WEBPACK_IMPORTED_MODULE_12__.GO_TO_ES_THANKS_PAGE_URL);\n  });\n};\n\ndocument.getElementById("nothanks-button").onclick = () => {\n  window.location.replace(_js_api_base__WEBPACK_IMPORTED_MODULE_12__.GO_TO_ES_HOME_PAGE_URL);\n};\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/es_demographic_survey.js?')},"./assets/js/api/add_to_database.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "add_comment_to_database": () => (/* binding */ add_comment_to_database),\n/* harmony export */   "add_pin_to_database": () => (/* binding */ add_pin_to_database),\n/* harmony export */   "add_user_info_to_database": () => (/* binding */ add_user_info_to_database),\n/* harmony export */   "add_longform_survey_to_database": () => (/* binding */ add_longform_survey_to_database)\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./assets/js/api/base.js");\n\n\nconst add_pin_to_database = async (lngLat) => {\n  let selected_tags = Array.from(document.getElementsByClassName("selected"));\n\n  let data = {\n    geom: `SRID=4326;POINT (${lngLat.lng} ${lngLat.lat})`,\n    prompt_1: document.getElementById("prompt_1").value,\n  };\n\n  selected_tags.forEach((tag) => {\n    let tag_id = tag.id.replace("user-input-", "");\n    data[tag_id] = true;\n  });\n\n  let new_id = -1;\n\n  return fetch(_base__WEBPACK_IMPORTED_MODULE_0__.ADD_PIN_URL, {\n    method: "POST",\n    credentials: "same-origin",\n    headers: {\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify(data),\n  })\n    .then((response) => {\n      return response.json();\n    })\n    .then((data) => {\n      return data;\n    })\n    .catch((ex) => {\n      console.log("parsing failed", ex);\n    });\n};\n\nconst add_comment_to_database = async (comment) => {\n  let data = {\n    pin_id: document.getElementById("selected-pin-id").innerText,\n    text: comment,\n  };\n\n  return fetch(_base__WEBPACK_IMPORTED_MODULE_0__.ADD_COMMENT_URL, {\n    method: "POST",\n    credentials: "same-origin",\n    headers: {\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify(data),\n  })\n    .then((response) => {\n      return response.json();\n    })\n    .then((data) => {\n      return data;\n    })\n    .catch((ex) => {\n      console.log("parsing failed", ex);\n    });\n};\n\nconst add_user_info_to_database = async (user_data) => {\n  return fetch(_base__WEBPACK_IMPORTED_MODULE_0__.ADD_USER_INFO_URL, {\n    method: "POST",\n    credentials: "same-origin",\n    headers: {\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify(user_data),\n  })\n    .then((response) => {\n      return response.json();\n    })\n    .then((data) => {\n      return data;\n    })\n    .catch((ex) => {\n      console.log("parsing failed", ex);\n    });\n};\n\nconst add_longform_survey_to_database = async (data) => {\n  return fetch(_base__WEBPACK_IMPORTED_MODULE_0__.ADD_SURVEY_URL, {\n    method: "POST",\n    credentials: "same-origin",\n    headers: {\n      "Content-Type": "application/json",\n    },\n    body: JSON.stringify(data),\n  })\n    .then((response) => {\n      return response.json();\n    })\n    .then((data) => {\n      return data;\n    })\n    .catch((ex) => {\n      console.log("parsing failed", ex);\n    });\n};\n\n\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/js/api/add_to_database.js?')},"./assets/js/api/base.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "get_data_from_api": () => (/* binding */ get_data_from_api),\n/* harmony export */   "PIN_URL": () => (/* binding */ PIN_URL),\n/* harmony export */   "TAG_URL_ENGLISH": () => (/* binding */ TAG_URL_ENGLISH),\n/* harmony export */   "TAG_URL_SPANISH": () => (/* binding */ TAG_URL_SPANISH),\n/* harmony export */   "FILTER_URL": () => (/* binding */ FILTER_URL),\n/* harmony export */   "ADD_PIN_URL": () => (/* binding */ ADD_PIN_URL),\n/* harmony export */   "ADD_COMMENT_URL": () => (/* binding */ ADD_COMMENT_URL),\n/* harmony export */   "ADD_USER_INFO_URL": () => (/* binding */ ADD_USER_INFO_URL),\n/* harmony export */   "ADD_SURVEY_URL": () => (/* binding */ ADD_SURVEY_URL),\n/* harmony export */   "GO_TO_SURVEY_PAGE_URL": () => (/* binding */ GO_TO_SURVEY_PAGE_URL),\n/* harmony export */   "GO_TO_DEMOGRAPHICS_PAGE_URL": () => (/* binding */ GO_TO_DEMOGRAPHICS_PAGE_URL),\n/* harmony export */   "GO_TO_THANKS_PAGE_URL": () => (/* binding */ GO_TO_THANKS_PAGE_URL),\n/* harmony export */   "GO_TO_HOME_PAGE_URL": () => (/* binding */ GO_TO_HOME_PAGE_URL),\n/* harmony export */   "BASE_PATH": () => (/* binding */ BASE_PATH),\n/* harmony export */   "GO_TO_ES_SURVEY_PAGE_URL": () => (/* binding */ GO_TO_ES_SURVEY_PAGE_URL),\n/* harmony export */   "GO_TO_ES_DEMOGRAPHICS_PAGE_URL": () => (/* binding */ GO_TO_ES_DEMOGRAPHICS_PAGE_URL),\n/* harmony export */   "GO_TO_ES_THANKS_PAGE_URL": () => (/* binding */ GO_TO_ES_THANKS_PAGE_URL),\n/* harmony export */   "GO_TO_ES_HOME_PAGE_URL": () => (/* binding */ GO_TO_ES_HOME_PAGE_URL)\n/* harmony export */ });\nconst api_url_base = () => {\n  // read webpack\'s \'mode\' and alter the\n  // api route prefix in production\n  let current_env = "development";\n\n  let url = "";\n\n  if (current_env == "production") {\n    url = "/webmaps/cbm";\n  }\n  return url;\n};\n\nlet BASE_PATH = api_url_base();\n\nconst PIN_URL = BASE_PATH + "/api/get-pins";\nconst TAG_URL_ENGLISH = BASE_PATH + "/api/tags";\nconst TAG_URL_SPANISH = BASE_PATH + "/api/tags/?language=es";\nconst FILTER_URL = BASE_PATH + "/api/filter-pins";\nconst ADD_PIN_URL = BASE_PATH + "/api/add-pin/";\nconst ADD_COMMENT_URL = BASE_PATH + "/api/add-comment/";\nconst ADD_USER_INFO_URL = BASE_PATH + "/api/add-user-info/";\nconst ADD_SURVEY_URL = BASE_PATH + "/api/add-longform-survey/";\nconst GO_TO_SURVEY_PAGE_URL = BASE_PATH + "/survey";\nconst GO_TO_DEMOGRAPHICS_PAGE_URL = BASE_PATH + "/demographics";\nconst GO_TO_THANKS_PAGE_URL = BASE_PATH + "/thanks";\nconst GO_TO_HOME_PAGE_URL = "./";\n\nconst GO_TO_ES_SURVEY_PAGE_URL = BASE_PATH + "/es/survey";\nconst GO_TO_ES_DEMOGRAPHICS_PAGE_URL = BASE_PATH + "/es/demographics";\nconst GO_TO_ES_THANKS_PAGE_URL = BASE_PATH + "/es/thanks";\nconst GO_TO_ES_HOME_PAGE_URL = "./es";\n\nconst get_data_from_api = async (map, url, inner_func) => {\n  /*\n   * Get a JSON response from the URL endpoint, and then\n   * dump the map object and JSON response into the inner_func\n   */\n  var request = new XMLHttpRequest();\n  request.open("GET", url, true);\n  request.setRequestHeader("Access-Control-Allow-Origin", "*");\n  request.onload = function () {\n    if (this.status >= 200 && this.status < 400) {\n      // retrieve the JSON from the response\n      var json = JSON.parse(this.response);\n\n      return inner_func(map, json);\n    }\n  };\n  request.send();\n};\n\n\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/js/api/base.js?')},"./assets/js/survey/add_questions_to_html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "add_basic_question_to_survey": () => (/* binding */ add_basic_question_to_survey),\n/* harmony export */   "load_1_to_5_question_set": () => (/* binding */ load_1_to_5_question_set),\n/* harmony export */   "load_prioritization_question": () => (/* binding */ load_prioritization_question)\n/* harmony export */ });\nconst add_basic_question_to_survey = (question, language = "en") => {\n  let survey = document.getElementById(question.base_div);\n\n  let qdiv = document.createElement("div");\n  qdiv.className = "question";\n  survey.appendChild(qdiv);\n\n  // add the question\n  let prompt = document.createElement("p");\n  prompt.innerHTML = question.prompt + "<br/>";\n  qdiv.appendChild(prompt);\n\n  // add the options if there are any\n  if (question.options) {\n    // add all of the canned options\n    let counter = 0;\n    question.options.forEach((option) => {\n      counter++;\n\n      // add the label\n      let label = document.createElement("label");\n      label.innerHTML = option + "<br/>";\n      qdiv.appendChild(label);\n\n      // add the input\n      var x = document.createElement("input");\n      x.type = question.type;\n      x.value = option;\n      x.name = question.id;\n      x.id = question.id + "-" + counter;\n\n      label.prepend(x);\n    });\n\n    // add the \'other\' entry box if needed\n    if (question.other) {\n      let other_text = "";\n      if (language == "es") {\n        other_text = "Otro: ";\n      } else {\n        other_text = "Other: ";\n      }\n      // add the label\n      let label = document.createElement("label");\n      label.innerHTML = other_text;\n      qdiv.appendChild(label);\n\n      // add the checkbox\n      var check = document.createElement("input");\n      check.type = "checkbox";\n      check.id = question.id + "-other-check";\n      label.prepend(check);\n\n      // add the text input\n      var text = document.createElement("input");\n      text.type = "text";\n      text.id = question.id + "-other-text";\n      label.append(text);\n    }\n  }\n\n  // if not options are provided, use a single input\n  else {\n    var x = document.createElement(question.type);\n    x.name = question.id;\n    x.id = question.id;\n\n    qdiv.append(x);\n  }\n};\n\nconst load_1_to_5_question_set = (question, language = "en") => {\n  let survey = document.getElementById(question.base_div);\n\n  let qdiv = document.createElement("div");\n  qdiv.className = "question";\n  survey.appendChild(qdiv);\n\n  // add the question\n  let prompt = document.createElement("p");\n  prompt.innerHTML = question.prompt + "<br/>";\n  qdiv.appendChild(prompt);\n\n  // add all of the canned options\n  let counter = 0;\n  question.options.forEach((prompt) => {\n    counter++;\n\n    let subprompt = document.createElement("p");\n    subprompt.innerHTML = prompt;\n    subprompt.className = "select-one-to-five-topic";\n    qdiv.appendChild(subprompt);\n\n    if (counter == 1) {\n      subprompt.prepend(document.createElement("hr"));\n    }\n\n    let radio_group = document.createElement("div");\n\n    radio_group.className = "select-one-to-five";\n    subprompt.appendChild(radio_group);\n\n    let bad_text = " (Bad)";\n    let good_text = " (Good)";\n    if (language == "es") {\n      bad_text = " (Malo)";\n      good_text = " (Bueno)";\n    }\n\n    [1, 2, 3, 4, 5].forEach((num) => {\n      // add the label\n      let label = document.createElement("label");\n      if (num == 1) {\n        label.innerHTML = num.toString() + bad_text;\n      } else if (num == 5) {\n        label.innerHTML = num.toString() + good_text;\n      } else {\n        label.innerHTML = num.toString();\n      }\n\n      radio_group.appendChild(label);\n\n      // add the input\n      var x = document.createElement("input");\n      x.type = question.type;\n      x.value = num;\n      x.name = question.id + "-" + counter;\n      x.id = question.id + "-" + counter + "-" + num;\n\n      label.prepend(x);\n    });\n    subprompt.appendChild(document.createElement("hr"));\n  });\n};\n\nconst load_prioritization_question = (question, language = "en") => {\n  let other_text = "Other: ";\n  let priority_text = "(select a priority)";\n  let priority = "Priority #";\n  if (language == "es") {\n    other_text = "Otro: ";\n    priority_text = "(selecciona una prioridad)";\n    priority = "Prioridad #";\n  }\n  let survey = document.getElementById(question.base_div);\n\n  let qdiv = document.createElement("div");\n  qdiv.className = "question";\n  survey.appendChild(qdiv);\n\n  // add the question\n  let prompt = document.createElement("p");\n  prompt.innerHTML = question.prompt + "<br/>";\n  qdiv.appendChild(prompt);\n\n  // add each option\n  let counter = 0;\n  question.options.forEach((option) => {\n    counter++;\n    // add the label\n    let label = document.createElement("label");\n    if (counter == 1) {\n      qdiv.appendChild(document.createElement("hr"));\n    }\n    if (option != other_text) {\n      label.innerHTML = option + "<br/> <hr>";\n    } else {\n      label.innerHTML = option + " ";\n    }\n    label.className = "priority-choice";\n    qdiv.appendChild(label);\n\n    // add the input\n    var x = document.createElement("select");\n    x.name = question.id;\n    x.id = question.id + "-" + counter;\n\n    label.prepend(x);\n\n    [priority_text, 1, 2, 3, 4, 5].forEach((num) => {\n      let choice = document.createElement("option");\n      choice.value = num;\n      if (num == priority_text) {\n        choice.text = num;\n      } else {\n        choice.text = priority + num;\n      }\n      x.appendChild(choice);\n    });\n\n    if (option == other_text) {\n      // add the text input\n      var text = document.createElement("input");\n      text.type = "text";\n      text.id = question.id + "-" + counter + "-other-text";\n      label.append(text);\n      label.append(document.createElement("hr"));\n    }\n\n    // add the event listener to prevent multiple choices of a single number\n    x.addEventListener("change", (e) => {\n      let newest_value = e.target.value;\n      let changed_id = e.target.id;\n\n      // do other dropdowns have this value?\n      document.querySelectorAll(\'[id ^= "q6"]\').forEach((el) => {\n        if (el.value == newest_value && el.id != changed_id) {\n          el.value = priority_text;\n        }\n      });\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/js/survey/add_questions_to_html.js?')},"./assets/js/survey/get_survey_responses_from_html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "get_multiselect_input": () => (/* binding */ get_multiselect_input),\n/* harmony export */   "get_radio_input": () => (/* binding */ get_radio_input),\n/* harmony export */   "get_textarea_input": () => (/* binding */ get_textarea_input),\n/* harmony export */   "get_priority_ranking": () => (/* binding */ get_priority_ranking)\n/* harmony export */ });\nconst get_multiselect_input = (qid) => {\n  let value = [];\n  let query = \'[id ^= "\' + qid + \'"]\';\n  document.querySelectorAll(query).forEach((el) => {\n    if (el.checked) {\n      if (el.id == qid + "-other-check") {\n        let custom_value = document.getElementById(qid + "-other-text").value;\n        value.push(custom_value);\n      } else {\n        value.push(el.value);\n      }\n    }\n  });\n\n  console.log(value);\n\n  return value;\n};\n\nconst get_radio_input = (qid) => {\n  let value = "";\n  let query = \'[id ^= "\' + qid + \'"]\';\n\n  document.querySelectorAll(query).forEach((el) => {\n    if (el.checked) {\n      value = el.value;\n    }\n  });\n  return value;\n};\n\nconst get_textarea_input = (qid) => {\n  return document.getElementById(qid).value;\n};\n\nconst get_priority_ranking = (qid, language = "en") => {\n  let query = \'[id ^= "\' + qid + \'"]\';\n\n  let priorities = ["", "", "", "", ""];\n  let other_text = "Other: ";\n  let priority_text = "(select a priority)";\n  if (language == "es") {\n    other_text = "Otro: ";\n    priority_text = "(selecciona una prioridad)";\n  }\n\n  document.querySelectorAll(query).forEach((el) => {\n    if (el.value != priority_text) {\n      let priority_value = el.nextSibling.textContent;\n      if (priority_value != other_text) {\n        priorities[el.value - 1] = priority_value;\n      } else {\n        let text_entry = el.nextSibling.nextSibling.value;\n        priorities[el.value - 1] = text_entry;\n      }\n    }\n  });\n  return priorities;\n};\n\n\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/js/survey/get_survey_responses_from_html.js?')},"./assets/css/alerts.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/alerts.css?")},"./assets/css/base.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/base.css?")},"./assets/css/box_overlays.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/box_overlays.css?")},"./assets/css/buttons.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/buttons.css?")},"./assets/css/map_style.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/map_style.css?")},"./assets/css/mobile.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/mobile.css?")},"./assets/css/navbar.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/navbar.css?")},"./assets/css/settings.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/settings.css?")},"./assets/css/survey.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pins-on-the-map/./assets/css/survey.css?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.d=(e,n)=>{for(var _ in n)__webpack_require__.o(n,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:n[_]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./assets/es_demographic_survey.js")})();