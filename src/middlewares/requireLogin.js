function requireLogin(req, res, next) {
    if (req.session && req.session.userLogged) {
      next(); // permitir la siguiente ruta para ejecutarse
    } else {
      res.redirect('/users/login'); // redirigir al inicio de sesión
    }
    module.exports = requireLogin;
  }