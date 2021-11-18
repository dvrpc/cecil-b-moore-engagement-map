const add_basic_question_to_survey = (question, language = "en") => {
  let survey = document.getElementById(question.base_div);

  let qdiv = document.createElement("div");
  qdiv.className = "question";
  survey.appendChild(qdiv);

  // add the question
  let prompt = document.createElement("p");
  prompt.innerHTML = question.prompt + "<br/>";
  qdiv.appendChild(prompt);

  // add the options if there are any
  if (question.options) {
    // add all of the canned options
    let counter = 0;
    question.options.forEach((option) => {
      counter++;

      // add the label
      let label = document.createElement("label");
      label.innerHTML = option + "<br/>";
      qdiv.appendChild(label);

      // add the input
      var x = document.createElement("input");
      x.type = question.type;
      x.value = option;
      x.name = question.id;
      x.id = question.id + "-" + counter;

      label.prepend(x);
    });

    // add the 'other' entry box if needed
    if (question.other) {
      let other_text = "";
      if (language == "es") {
        other_text = "Otro: ";
      } else {
        other_text = "Other: ";
      }
      // add the label
      let label = document.createElement("label");
      label.innerHTML = other_text;
      qdiv.appendChild(label);

      // add the checkbox
      var check = document.createElement("input");
      check.type = "checkbox";
      check.id = question.id + "-other-check";
      label.prepend(check);

      // add the text input
      var text = document.createElement("input");
      text.type = "text";
      text.id = question.id + "-other-text";
      label.append(text);
    }
  }

  // if not options are provided, use a single input
  else {
    var x = document.createElement(question.type);
    x.name = question.id;
    x.id = question.id;

    qdiv.append(x);
  }
};

const load_1_to_5_question_set = (question, language = "en") => {
  let survey = document.getElementById(question.base_div);

  let qdiv = document.createElement("div");
  qdiv.className = "question";
  survey.appendChild(qdiv);

  // add the question
  let prompt = document.createElement("p");
  prompt.innerHTML = question.prompt + "<br/>";
  qdiv.appendChild(prompt);

  // add all of the canned options
  let counter = 0;
  question.options.forEach((prompt) => {
    counter++;

    let subprompt = document.createElement("p");
    subprompt.innerHTML = prompt;
    subprompt.className = "select-one-to-five-topic";
    qdiv.appendChild(subprompt);

    if (counter == 1) {
      subprompt.prepend(document.createElement("hr"));
    }

    let radio_group = document.createElement("div");

    radio_group.className = "select-one-to-five";
    subprompt.appendChild(radio_group);

    let bad_text = " (Bad)";
    let good_text = " (Good)";
    if (language == "es") {
      bad_text = " (Malo)";
      good_text = " (Bueno)";
    }

    [1, 2, 3, 4, 5].forEach((num) => {
      // add the label
      let label = document.createElement("label");
      if (num == 1) {
        label.innerHTML = num.toString() + bad_text;
      } else if (num == 5) {
        label.innerHTML = num.toString() + good_text;
      } else {
        label.innerHTML = num.toString();
      }

      radio_group.appendChild(label);

      // add the input
      var x = document.createElement("input");
      x.type = question.type;
      x.value = num;
      x.name = question.id + "-" + counter;
      x.id = question.id + "-" + counter + "-" + num;

      label.prepend(x);
    });
    subprompt.appendChild(document.createElement("hr"));
  });
};

const load_prioritization_question = (question, language = "en") => {
  let other_text = "Other:";
  let priority_text = "(select a priority)";
  let priority = "Priority #";
  if (language == "es") {
    other_text = "Otro:";
    priority_text = "(selecciona una prioridad)";
    priority = "Prioridad #";
  }
  let survey = document.getElementById(question.base_div);

  let qdiv = document.createElement("div");
  qdiv.className = "question";
  survey.appendChild(qdiv);

  // add the question
  let prompt = document.createElement("p");
  prompt.innerHTML = question.prompt + "<br/>";
  qdiv.appendChild(prompt);

  // add each option
  let counter = 0;
  question.options.forEach((option) => {
    counter++;
    // add the label
    let label = document.createElement("label");
    if (counter == 1) {
      qdiv.appendChild(document.createElement("hr"));
    }
    if (option != other_text) {
      label.innerHTML = option + "<br/> <hr>";
    } else {
      label.innerHTML = option;
    }
    label.className = "priority-choice";
    qdiv.appendChild(label);

    // add the input
    var x = document.createElement("select");
    x.name = question.id;
    x.id = question.id + "-" + counter;

    label.prepend(x);

    [priority_text, 1, 2, 3, 4, 5].forEach((num) => {
      let choice = document.createElement("option");
      choice.value = num;
      if (num == priority_text) {
        choice.text = num;
      } else {
        choice.text = priority + num;
      }
      x.appendChild(choice);
    });

    if (option == other_text) {
      // add the text input
      var text = document.createElement("input");
      text.type = "text";
      text.id = question.id + "-" + counter + "-other-text";
      label.append(text);
      label.append(document.createElement("hr"));
    }

    // add the event listener to prevent multiple choices of a single number
    x.addEventListener("change", (e) => {
      let newest_value = e.target.value;
      let changed_id = e.target.id;

      // do other dropdowns have this value?
      document.querySelectorAll('[id ^= "q6"]').forEach((el) => {
        if (el.value == newest_value && el.id != changed_id) {
          el.value = priority_text;
        }
      });
    });
  });
};

export {
  add_basic_question_to_survey,
  load_1_to_5_question_set,
  load_prioritization_question,
};
