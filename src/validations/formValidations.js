document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = document.querySelectorAll("form input");

  const expresiones = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,20}$/,
  };

  const campos = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  };

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "firstName":
        validarCampo(expresiones.firstName, e.target, "firstName");
        break;
      case "lastName":
        validarCampo(expresiones.lastName, e.target, "lastName");
        break;
      case "email":
        validarCampo(expresiones.email, e.target, "email");
        break;
      case "password":
        validarCampo(expresiones.password, e.target, "password");
        break;
    }
  };

  const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
      document
        .getElementById(`group__${campo}`)
        .classList.remove("form__incorrect-group");
      document
        .getElementById(`group__${campo}`)
        .classList.add("form__correct-group");
      document
        .querySelector(`#group__${campo} i`)
        .classList.remove("fa-circle-xmark");
      document
        .querySelector(`#group__${campo} i`)
        .classList.add("fa-circle-check");
      document
        .querySelector(`#group__${campo} .flash-errors`)
        .classList.remove("flash-errors-active");
      campos[campo] = true;
    } else {
      document
        .getElementById(`group__${campo}`)
        .classList.add("form__incorrect-group");
      document
        .getElementById(`group__${campo}`)
        .classList.remove("form__correct-group");
      document
        .querySelector(`#group__${campo} i`)
        .classList.add("fa-circle-xmark");
      document
        .querySelector(`#group__${campo} i`)
        .classList.remove("fa-circle-check");
      document
        .querySelector(`#group__${campo} .flash-errors`)
        .classList.add("flash-errors-active");
      campos[campo] = false;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      campos.firstName &&
      campos.lastName &&
      campos.email &&
      campos.password
    ) {
      form.reset();
    }
  });
});
