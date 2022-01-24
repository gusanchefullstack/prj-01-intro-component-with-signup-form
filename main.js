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
const firstNameContainer = document.getElementById("first-container");
const lastNameContainer = document.getElementById("last-container");
const emailContainer = document.getElementById("email-container");
const passwordContainer = document.getElementById("password-container");

button.addEventListener("click", (e) => {
  e.preventDefault();
  validateFields();
});

function validateFields() {
  if (!firstInput.value) {
    exclamationFirstName.classList.replace("invisible", "visible");
    errorFirstName.classList.replace("invisible", "visible");
    firstNameContainer.classList.add("border-red-500");
  } else {
    exclamationFirstName.classList.replace("visible", "invisible");
    errorFirstName.classList.replace("visible", "invisible");
    firstNameContainer.classList.remove("border-red-500");
  }
  if (!lastInput.value) {
    exclamationLastName.classList.replace("invisible", "visible");
    errorLastName.classList.replace("invisible", "visible");
    lastNameContainer.classList.add("border-red-500");
  } else {
    exclamationLastName.classList.replace("visible", "invisible");
    errorLastName.classList.replace("visible", "invisible");
    lastNameContainer.classList.remove("border-red-500");
  }
  if (!emailInput.value || emailInput.value.match("gustavo@genesys.com")) {
    exclamationMail.classList.replace("invisible", "visible");
    errorMail.classList.replace("invisible", "visible");
    emailContainer.classList.add("border-red-500");
  } else {
    exclamationMail.classList.replace("visible", "invisible");
    errorMail.classList.replace("visible", "invisible");
    emailContainer.classList.remove("border-red-500");
  }
  if (!passwordInput.value) {
    exclamationPassword.classList.replace("invisible", "visible");
    errorPassword.classList.replace("invisible", "visible");
    passwordContainer.classList.add("border-red-500");
  } else {
    exclamationPassword.classList.replace("visible", "invisible");
    errorPassword.classList.replace("visible", "invisible");
    passwordContainer.classList.remove("border-red-500");
  }
}
