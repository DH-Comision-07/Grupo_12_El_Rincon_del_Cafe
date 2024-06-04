const { check } = require("express-validator");

const validations = [
  check("firstName")
    .notEmpty()
    .withMessage("Debes completar el campo con tu nombre")
    .bail(),
  check("lastName")
    .notEmpty()
    .withMessage("Debes completar el campo con tu apellido")
    .bail(),
  check("birthDate")
    .notEmpty()
    .withMessage("Debes completar el campo con tu fecha de nacimiento")
    .bail(),
  check("imageProfile")
    .custom((value, { req }) => {
      // Verificar si se cargó un archivo
      if (req.file) {
        const acceptedExtensions = ["jpg", "jpeg", "png", "gif"];
        const ext = path.extname(req.file.filename);
        return acceptedExtensions.includes(ext);
      }
      // Si no se cargó ningún archivo, la validación pasa
      return true;
    })
    .withMessage("Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)"),
  check("email")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  check("password")
    .notEmpty()
    .withMessage("Debes completar la contraseña")
    .bail()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener como mínimo 8 caracteres"),
];

module.exports = validations;
