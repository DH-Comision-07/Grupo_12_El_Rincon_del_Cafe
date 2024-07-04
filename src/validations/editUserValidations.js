const { body } = require("express-validator");
const path = require("path");

module.exports = [
  body("firstName")
    .notEmpty()
    .withMessage("Debes completar el campo con tu nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El nombre debe ser mayor a 2 caracteres"),
  body("lastName")
    .notEmpty()
    .withMessage("Debes completar el campo con tu apellido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("El apellido debe ser mayor a 2 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("Debes ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un email válido"),
  body("password")
    .optional({checkFalsy: true})
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener como mínimo 8 caracteres"),
  /* body("date")
    .notEmpty()
    .withMessage("Debes completar el campo con tu fecha de nacimiento"), */
  /* body("imageProfile")
    .custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".JPG", ".JPEG", ".PNG", ".GIF"];

      if (file) {
        let fileExtension = path.extname(file.filename).toUpperCase();
        if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(
            `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
              ", "
            )}`
          );
        }
      }
      return true;
    })
    .withMessage("Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)"), */
];
