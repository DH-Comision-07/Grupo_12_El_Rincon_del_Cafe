const { validationResult } = require('express-validator');
const userServices = require('../data/userService');
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    return res.render('users/login', {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }

  const userInDB = await userServices.getUserByEmail(req.body.email);

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

  const passwordMatch = await bcrypt.compare(
    req.body.password,
    userInDB.password
  );

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

  next();
};
