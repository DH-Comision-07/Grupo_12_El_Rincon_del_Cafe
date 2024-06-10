// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.querySelector('form');

//   const expresiones = {
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     password: /^.{8,20}$/,
//   };

//   const campos = {
//     email: false,
//     password: false,
//   };

//   const validarFormulario = (e) => {
//     e.preventDefault();
//     validarCampo(expresiones.email, form.elements.email, 'email');
//     validarCampo(expresiones.password, form.elements.password, 'password');

//     if (campos.email && campos.password) {
//       form.reset();
//     }
//   };

//   const validarCampo = (expresion, input, campo) => {
//     if (expresion.test(input.value)) {
//       document
//         .getElementById(`group__${campo}`)
//         .classList.remove('form__incorrect-group');
//       document
//         .getElementById(`group__${campo}`)
//         .classList.add('form__correct-group');
//       document
//         .querySelector(`#group__${campo} i`)
//         .classList.remove('fa-circle-xmark');
//       document
//         .querySelector(`#group__${campo} i`)
//         .classList.add('fa-circle-check');
//       document
//         .querySelector(`#group__${campo} .flash-errors`)
//         .classList.remove('flash-errors-active');
//       campos[campo] = true;
//     } else {
//       document
//         .getElementById(`group__${campo}`)
//         .classList.add('form__incorrect-group');
//       document
//         .getElementById(`group__${campo}`)
//         .classList.remove('form__correct-group');
//       document
//         .querySelector(`#group__${campo} i`)
//         .classList.add('fa-circle-xmark');
//       document
//         .querySelector(`#group__${campo} i`)
//         .classList.remove('fa-circle-check');
//       document
//         .querySelector(`#group__${campo} .flash-errors`)
//         .classList.add('flash-errors-active');
//       campos[campo] = false;
//     }
//   };

//   form.addEventListener('submit', validarFormulario);
// });
