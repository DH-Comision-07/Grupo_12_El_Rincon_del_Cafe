const { validationResult } = require('express-validator');
const userServices = require('../data/userService');
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
  try {
    // Validar los resultados de express-validator
    const resultValidation = validationResult(req);

    if (!resultValidation.isEmpty()) {
      return res.render('users/login', {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    // Buscar el usuario en la base de datos por email
    const userInDB = await userServices.getUserByEmail(req.body.email);

    // Verificar si el usuario existe
    if (!userInDB) {
      return res.render('users/login', {
        errors: {
          email: {
            msg: 'Este correo electrónico no está registrado',
          },
        },
        oldData: req.body,
      });
    }

    // Verificar si las contraseñas coinciden
    const passwordMatch = await bcrypt.compare(req.body.password, userInDB.password);

    if (!passwordMatch) {
      return res.render('users/login', {
        errors: {
          password: {
            msg: 'La contraseña es incorrecta',
          },
        },
        oldData: req.body,
      });
    }

    // Continuar al siguiente middleware si las validaciones pasan
    next();
  } catch (error) {
    // Manejar errores del servidor
    console.error(error);
    return res.status(500).render('users/login', {
      errors: {
        server: {
          msg: 'Ocurrió un error en el servidor. Por favor, inténtelo más tarde.',
        },
      },
      oldData: req.body,
    });
  }
};
