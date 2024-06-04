/* Require */
const path = require('path');
const usersService = require('../data/userService');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const { log } = require('console');

// Middleware para verificar si el usuario ha iniciado sesión
function requireLogin(req, res, next) {
  if (req.session && req.session.userLogged) {
    next(); // permitir la siguiente ruta para ejecutarse
  } else {
    res.redirect('/users/login'); // redirigir al inicio de sesión
  }
}

const usersController = {
  /* Registro de usuario */
  registerForm: async function (req, res) {
    try {
      const errors = req.session.errors;
      const oldData = req.session.oldData;

      req.session.oldData = null;
      req.session.oldData = null;

      res.render('users/register', {
        errors: errors ? errors : null,
        oldData: oldData ? oldData : null,
      });
    } catch (error) {
      console.log(error);
    }
  },
  register: async function (req, res) {
    try {
      // Verificar si se cargó una imagen
      if (req.file) {
        req.body.userImage = req.file.filename;
        // } else {
        //   // Establecer un valor predeterminado si no se cargó ninguna imagen
        //   req.body.userImage = 'image-default.png';
      }

      let user = await usersService.save(req.body);
      return res.redirect('/users/login');
    } catch (error) {
      console.log(error);
    }
  },

  /* Login de usuario */
  loginForm: async function (req, res) {
    try {
      return res.render('users/login');
    } catch (error) {
      console.log(error);
    }
  },

  login: async function (req, res) {
    try {
      let userToLogin = await usersService.findByField('email', req.body.email);
      if (
        userToLogin &&
        bcryptjs.compareSync(req.body.password, userToLogin.password)
      ) {
        req.session.isLoggedIn = true;
        req.session.userLogged = userToLogin;
        return res.redirect('/users/userprofile');
      } else {
        return res.redirect('/users/login');
      }
    } catch (error) {
      console.log(error);
    }
  },
  /* Perfil de usuario */
  userprofile: [
    requireLogin,
    async function (req, res) {
      try {
        let id = req.session.userLogged.id;
        let user = await usersService.getOneBy(id);
        console.log(user);
        return res.render('users/userProfile', {
          user: user,
        });
      } catch (error) {
        console.log(error);
      }
    },
  ],

  /* edición de usuario form */
  editProfileForm: [
    requireLogin,
    async function (req, res) {
      try {
        let id = req.session.userLogged.id;
        let user = await usersService.getOneBy(id);
        return res.render('users/editUserProfile', {
          user: user,
        });
      } catch (error) {
        console.log(error);
      }
    },
  ],

  /* Edición de usuario desde myProfile */
  editProfile: [
    requireLogin,
    async function (req, res) {
      try {
        let id = req.session.userLogged.id;
        let filename = req.file ? req.file.filename : null;
        let updatedUser = await usersService.updateUser(
          req.body,
          Number(req.params.id),
          filename
        );
        req.session.userLogged = updatedUser; // Actualizar la información del usuario en la sesión
        return res.render('users/userProfile', {
          user: updatedUser,
        });
      } catch (error) {
        console.log(error);
      }
    },
  ],

  logout: function (req, res) {
    res.clearCookie('email');
    req.session.destroy();

    return res.redirect('/');
  },

  /* Dasboard */
  dashboard: [
    requireLogin,
    async function (req, res) {
      try {
        let users = await usersService.getAll();
        res.render('users/userDashboard', {
          users: users,
        });
      } catch (error) {
        console.log(error);
      }
    },
  ],

  /* Creación de usuario desde dashboard admin */
  create: [
    requireLogin,
    async function (req, res) {
      try {
        return res.render('users/usersCreate');
      } catch (error) {}
    },
  ],
  store: [
    requireLogin,
    async function (req, res) {
      try {
        // Verificar si se cargó una imagen
        if (req.file) {
          req.body.imageProfile = req.file.filename;
        } else {
          // Establecer un valor predeterminado si no se cargó ninguna imagen
          req.body.imageProfile = 'image-default.png';
        }

        let user = await usersService.save(req.body);
        let users = await usersService.getAll();
        res.render('users/userDashboard', {
          users: users,
        });
      } catch (error) {
        console.log(error);
      }
    },
  ],

  /* Edición de usuario desde dashboard admin */
  edit: [
    requireLogin,
    async function (req, res) {
      try {
        let user = await usersService.getOneBy(Number(req.params.id));
        res.render('users/usersEdit', {
          user: user,
        });
      } catch (error) {
        res.send('Ha ocurrido un error inesperado').status(500);
      }
    },
  ],
  update: [
    requireLogin,
    async function (req, res) {
      try {
        let filename = req.file ? req.file.filename : null;
        await usersService.update(req.body, Number(req.params.id), filename);
        res.render('users/userDashboard', {
          users: await usersService.getAll(),
        });
      } catch (error) {
        console.log(error);
      }
    },
  ],

  delete: [
    requireLogin,
    async function (req, res) {
      try {
        let user = await usersService.getOneBy(Number(req.params.id));
        res.render('users/userDelete', {
          user: user,
        });
      } catch (error) {
        res.send('Ha ocurrido un error inesperado').status(500);
      }
    },
  ],

  destroy: [
    requireLogin,
    async function (req, res) {
      try {
        await usersService.deleteUser(Number(req.params.id));
        return res.redirect('/users/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
  ],
};

module.exports = usersController;
