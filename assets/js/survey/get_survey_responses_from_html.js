const get_multiselect_input = (qid) => {
  let value = [];
  let query = '[id ^= "' + qid + '"]';
  document.querySelectorAll(query).forEach((el) => {
    if (el.checked) {
      if (el.id == qid + "-other-check") {
        let custom_value = document.getElementById(qid + "-other-text").value;
        value.push(custom_value);
      } else {
        value.push(el.value);
      }
    }
  });

  console.log(value);

  return value;
};

const get_radio_input = (qid) => {
  let value = "";
  let query = '[id ^= "' + qid + '"]';

  document.querySelectorAll(query).forEach((el) => {
    if (el.checked) {
      value = el.value;
    }
  });
  return value;
};

const get_textarea_input = (qid) => {
  return document.getElementById(qid).value;
};

const get_priority_ranking = (qid, language = "en") => {
  let query = '[id ^= "' + qid + '"]';

  let priorities = ["", "", "", "", ""];
  let other_text = "Other: ";
  let priority_text = "(select a priority)";
  if (language == "es") {
    other_text = "Otro: ";
    priority_text = "(selecciona una prioridad)";
  }

  document.querySelectorAll(query).forEach((el) => {
    if (el.value != priority_text) {
      let priority_value = el.nextSibling.textContent;
      if (priority_value != other_text) {
        priorities[el.value - 1] = priority_value;
      } else {
        let text_entry = el.nextSibling.nextSibling.value;
        priorities[el.value - 1] = text_entry;
      }
    }
  });
  return priorities;
};

export {
  get_multiselect_input,
  get_radio_input,
  get_textarea_input,
  get_priority_ranking,
};
