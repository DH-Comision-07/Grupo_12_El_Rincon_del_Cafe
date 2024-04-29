const usersService = require('../data/userService');

function isLogged(req, res, next) {
  res.locals.isLogged = false;

  let email = req.cookies.email;
  let user = email ? usersService.findByField('email', email) : null;

  if (user || (req.session && req.session.userLogged)) {
    res.locals.isLogged = true;
    res.locals.userLogged = user || req.session.userLogged;
  }

  next();
}

module.exports = isLogged;
