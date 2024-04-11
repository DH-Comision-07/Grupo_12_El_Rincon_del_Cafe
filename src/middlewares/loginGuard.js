// Si no existe sesion, redirigime a login para que se logue, sino segui

function loginGuard(req, res, next) {
  if (!req.session.userLogged) {
    return res.redirect('/users/login');
  }
  next();
}
module.exports = loginGuard;
