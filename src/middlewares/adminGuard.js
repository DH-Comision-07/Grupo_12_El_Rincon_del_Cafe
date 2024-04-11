// Si no exite un usuario logueado o el usuario logueado en la propiedad accesType es diferente a admin, redirigilo a home, si no, dejalo pasar

function adminGuard(req, res, next) {
  if (!req.session.userLogged || req.session.userLogged.accessType != 'admin') {
    return res.redirect('/');
  }
  next();
}
module.exports = adminGuard;
