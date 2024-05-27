// Si hay alguien en session llevame al perfil, si no hay nadie mandame a register

function userGuard(req, res, next) {
  if (req.session.userLogged != undefined) {
    return res.redirect('/users/userProfile');
  }
  next();
}
module.exports = userGuard;
