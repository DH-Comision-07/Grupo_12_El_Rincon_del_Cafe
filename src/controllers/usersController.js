/* Require */
const path = require("path");
const usersService = require("../data/userService");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

// Middleware para verificar si el usuario ha iniciado sesión
function requireLogin(req, res, next) {
  if (req.session && req.session.userLogged) {
    next(); // permitir la siguiente ruta para ejecutarse
  } else {
    res.redirect("/users/login"); // redirigir al inicio de sesión
  }
}

const usersController = {
  /* Registro de usuario */
  registerForm: async function (req, res) {
    try {
      res.render("users/register");
    } catch (error) {
      console.log(error);
    }
  },
  register: async function (req, res) {
    try {
      let errors = validationResult(req);

      if (errors.isEmpty()) {
        let user = await usersService.save(req.body);
      } else {
        res.render("users/register", {
          errors: errors.mapped(),
          old: req.body,
        });
      }

      return res.redirect("/users/login");
    } catch (error) {
      console.log(error);
    }
  },

  /* Login de usuario */
  loginForm: async function (req, res) {
    try {
      return res.render("users/login");
    } catch (error) {
      console.log(error);
    }
  },

  login: async function (req, res) {
    try {
      let userToLogin = await usersService.findByField("email", req.body.email);
      if (
        userToLogin &&
        bcryptjs.compareSync(req.body.password, userToLogin.password)
      ) {
        req.session.isLoggedIn = true;
        req.session.userLogged = userToLogin;
        return res.redirect("/users/userprofile");
      } else {
        return res.redirect("/users/login");
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
        return res.render("users/userProfile", {
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
        return res.render("users/editUserProfile", {
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
        let user = await usersService.getOneBy(id);
        let filename = req.file ? req.file.filename : null;
        await usersService.updateUser(
          req.body,
          Number(req.params.id),
          filename
        );
        return res.render("users/userProfile", {
          user: user,
        });
      } catch (error) {
        console.log(error);
      }
    },
  ],

  logout: function (req, res) {
    res.clearCookie("email");
    req.session.destroy();

    return res.redirect("/");
  },

  /* Dasboard */
  dashboard: [
    requireLogin,
    async function (req, res) {
      try {
        let users = await usersService.getAll();
        res.render("users/userDashboard", {
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
        return res.render("users/usersCreate");
      } catch (error) {}
    },
  ],
  store: [
    requireLogin,
    async function (req, res) {
      try {
        let user = await usersService.save(req.body);
        let users = await usersService.getAll();
        res.render("users/userDashboard", {
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
        res.render("users/usersEdit", {
          user: user,
        });
      } catch (error) {
        res.send("Ha ocurrido un error inesperado").status(500);
      }
    },
  ],
  update: [
    requireLogin,
    async function (req, res) {
      try {
        let filename = req.file ? req.file.filename : null;
        await usersService.update(req.body, Number(req.params.id), filename);
        res.render("users/userDashboard", {
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
        res.render("users/userDelete", {
          user: user,
        });
      } catch (error) {
        res.send("Ha ocurrido un error inesperado").status(500);
      }
    },
  ],

  destroy: [
    requireLogin,
    async function (req, res) {
      try {
        await usersService.deleteUser(Number(req.params.id));
        return res.redirect("/users/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  ],
};

module.exports = usersController;
