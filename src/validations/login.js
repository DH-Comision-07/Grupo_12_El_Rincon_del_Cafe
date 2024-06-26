const { body } = require("express-validator");
const path = require("path");

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  body("password")
    .notEmpty()
    .withMessage("Debes completar la contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener como mínimo 8 caracteres"),
];
