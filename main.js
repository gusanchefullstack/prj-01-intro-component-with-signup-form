import "./style.css";

const button = document.getElementById("form-submit-button");
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorFirstName = document.getElementById("error-first");
const errorLastName = document.getElementById("error-last");
const errorMail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const exclamationFirstName = document.getElementById("exclamation-first");
const exclamationLastName = document.getElementById("exclamation-last");
const exclamationMail = document.getElementById("exclamation-email");
const exclamationPassword = document.getElementById("exclamation-password");

button.addEventListener("click", (e) => {
  e.preventDefault();
  validateFields();
});

function validateFields() {
  if (!firstInput.value) {
    exclamationFirstName.classList.replace("invisible", "visible");
    errorFirstName.classList.replace("invisible", "visible")
  } else {
    exclamationFirstName.classList.replace("visible", "invisible");
    errorFirstName.classList.replace("visible", "invisible")
  }
  if (!lastInput.value) {
    exclamationLastName.classList.replace("invisible", "visible");
    errorLastName.classList.replace("invisible", "visible");
  } else {
    exclamationLastName.classList.replace("visible", "invisible");
    errorLastName.classList.replace("visible", "invisible");
  }
  if (!emailInput.value) {
    exclamationMail.classList.replace("invisible", "visible");
    errorMail.classList.replace("invisible", "visible");
  } else {
    exclamationMail.classList.replace("visible", "invisible");
    errorMail.classList.replace("visible", "invisible");
  }
  if (!passwordInput.value) {
    exclamationPassword.classList.replace("invisible", "visible");
    errorPassword.classList.replace("invisible", "visible");
  } else {
    exclamationPassword.classList.replace("visible", "invisible");
    errorPassword.classList.replace("visible", "invisible");
  }
}
