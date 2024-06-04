const userServices = require('../data/userService');

module.exports = async (req, res, next) => {
  const userInDB = await userServices.getUserByEmail(req.body.email);

  if (userInDB) {
    return res.render('users/register', {
      errors: {
        email: {
          msg: 'Este correo electrónico ya ha sido registrado',
        },
      },
      oldData: req.body,
    });
  } else {
    next();
  }
};
