import "./style.css";

const emailRegex = /^\D.*@\D*\w*\.\w*/;
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
firstNameContainer.addEventListener("keyup", (e) => {
  firstNameContainer.style.borderColor = "hsl(248, 32%, 49%)";
  exclamationFirstName.style.visibility = "hidden";
  errorFirstName.style.visibility = "hidden";
});
lastNameContainer.addEventListener("keyup", (e) => {
  lastNameContainer.style.borderColor = "hsl(248, 32%, 49%)";
  exclamationLastName.style.visibility = "hidden";
  errorLastName.style.visibility = "hidden";
});
emailContainer.addEventListener("keyup", (e) => {
  if (emailRegex.test(emailInput.value)) {
    emailInput.style.color = "rgb(114,107,128)";
    emailContainer.style.borderColor = "hsl(248, 32%, 49%)";
    exclamationMail.style.visibility = "hidden";
    errorMail.style.visibility = "hidden";
  }
});
passwordContainer.addEventListener("keyup", (e) => {
  passwordContainer.style.borderColor = "hsl(248, 32%, 49%)";
  exclamationPassword.style.visibility = "hidden";
  errorPassword.style.visibility = "hidden";
});

function validateFields() {
  if (!firstInput.value) {
    exclamationFirstName.classList.replace("invisible", "visible");
    errorFirstName.classList.replace("invisible", "visible");
    firstNameContainer.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    exclamationFirstName.classList.replace("visible", "invisible");
    errorFirstName.classList.replace("visible", "invisible");
    firstNameContainer.style.borderColor = "inherit";
  }
  if (!lastInput.value) {
    exclamationLastName.classList.replace("invisible", "visible");
    errorLastName.classList.replace("invisible", "visible");
    lastNameContainer.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    exclamationLastName.classList.replace("visible", "invisible");
    errorLastName.classList.replace("visible", "invisible");
    lastNameContainer.style.borderColor = "inherit";
  }
  if (!emailInput.value || !emailRegex.test(emailInput.value)) {
    exclamationMail.classList.replace("invisible", "visible");
    errorMail.classList.replace("invisible", "visible");
    emailContainer.style.borderColor = "hsl(0, 100%, 74%)";
    emailInput.style.color = "hsl(0, 100%, 74%)";
  } else {
    exclamationMail.classList.replace("visible", "invisible");
    errorMail.classList.replace("visible", "invisible");
    emailContainer.style.borderColor = "inherit";
    emailInput.style.color = "inherit";
  }
  if (!passwordInput.value) {
    exclamationPassword.classList.replace("invisible", "visible");
    errorPassword.classList.replace("invisible", "visible");
    passwordContainer.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    exclamationPassword.classList.replace("visible", "invisible");
    errorPassword.classList.replace("visible", "invisible");
    passwordContainer.style.borderColor = "inherit";
  }
}
