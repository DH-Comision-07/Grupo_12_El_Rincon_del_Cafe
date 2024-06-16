let inputEmail = document.getElementById("email");
let inputPass = document.getElementById("password");
let iconEmail = document.querySelector(".icon-email");
let iconPass = document.querySelector(".icon-password");
let flashErrors = document.querySelector(".flash-errors");
let flashErrorsPass = document.querySelector(".flash-errors-pass");

let validations = [];

const expresions = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{8,20}$/,
};

//INPUT EMAIL

inputEmail.addEventListener("focus", function () {
  flashErrors.style.display = "block";
  iconEmail.style.display = "block";
  if (iconEmail.classList.contains("fa-circle-check")) {
    flashErrors.style.display = "none";
  }
});

inputEmail.addEventListener("blur", function () {
  flashErrors.style.display = "none";
});

inputEmail.addEventListener("input", function (e) {
  if (e.target.value.length >= 2 && expresions.email.test(e.target.value)) {
    console.log(e.target.value);
    iconEmail.classList.add("fa-circle-check");
    iconEmail.classList.remove("fa-circle-xmark");
    iconEmail.style.color = "green";
    iconEmail.style.opacity = "100";
    flashErrors.style.display = "none";
    validations.push(true);
  } else {
    iconEmail.classList.remove("fa-circle-check");
    iconEmail.classList.add("fa-circle-xmark");
    flashErrors.style.display = "block";
    iconEmail.style.color = "tomato";
    iconEmail.style.opacity = "100";
    validations.push(false);
  }
});

//INPUT PASS

inputPass.addEventListener("focus", function () {
  flashErrorsPass.style.display = "block";
  iconPass.style.display = "block";
  if (iconPass.classList.contains("fa-circle-check")) {
    flashErrorsPass.style.display = "none";
  }
});

inputPass.addEventListener("blur", function () {
  flashErrorsPass.style.display = "none";
});

inputPass.addEventListener("input", function (e) {
  if (e.target.value.length >= 8 && expresions.password.test(e.target.value)) {
    console.log(e.target.value);
    iconPass.classList.add("fa-circle-check");
    iconPass.classList.remove("fa-circle-xmark");
    flashErrorsPass.style.display = "none";
    iconPass.style.color = "green";
    iconPass.style.opacity = "100";
    validations.push(true);
  } else {
    iconPass.classList.remove("fa-circle-check");
    iconPass.classList.add("fa-circle-xmark");
    iconPass.style.color = "tomato";
    iconPass.style.opacity = "100";
    flashErrorsPass.style.display = "block";
    validations.push(false);
  }
});

let buttonLogin = document.querySelector(".button-login");

buttonLogin.addEventListener("submit", function (e) {
  if (validations.some((validation) => !validation)) {
    e.preventDefault();
  }
});
