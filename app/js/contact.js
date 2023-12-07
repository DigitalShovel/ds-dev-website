// Author: Nicholas Panayotakos

// Description: This file contains the javascript that controls the radio selection for the "purpose of contact" section on the form.

const radioSelection = document.querySelector("input");
const radioLabel = document.querySelector(".fieldset__radio");

if (radioSelection.hasAttribute("checked")) {
  radioLabel.classList.add("input[type=radio]:checked+label");
} else {
  radioLabel.classList.remove("input[type=radio]:checked+label");
}
