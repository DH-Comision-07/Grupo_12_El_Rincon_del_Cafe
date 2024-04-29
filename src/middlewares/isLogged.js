const usersService = require('../data/userService');

function isLogged(req, res, next) {
  res.locals.isLogged = false;

  const emailInCookie = req.cookies.email || '';
  const userFromCookie = usersService.findByField('email', emailInCookie);

  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }
  next();
}

module.exports = isLogged;
