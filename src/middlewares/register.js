const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const resultValidation = validationResult(req);

  if (resultValidation.errors.length > 0) {
    let userEmail = null;
    const userLogged = req.session.userLogged;

    if (userLogged) {
      userEmail = userLogged.email;
    }
    console.log('Enviando errores a la vista'); // Verificar que se están enviando los errores
    return res.render('users/register', {
      errors: resultValidation.mapped(),
      oldData: req.body,
      userEmail,
    });
  }
  return next();
};
