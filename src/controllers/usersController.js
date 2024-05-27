/* Require */
const path = require("path");
const usersService = require("../data/userService");
const bcryptjs = require("bcryptjs");

const usersController = {
  /* Registro de usuario */
  registerForm: async function (req, res) {
    try {
      res.render("register");
    } catch (error) {
      console.log(error);
    }
  },
  register: async function (req, res) {
    try {
      await usersService.save(req.body);
      return res.redirect("/users/login");
    } catch (error) {
      console.log(error);
    }
    //   let filename = req.file ? req.file.filename : "image-default.png";
    //   let newUserReg = usersService.constructor(req.body, filename);
    //   usersService.save(newUserReg);
    //   res.redirect("/users/login");
  },

  /* Login de usuario */
  loginForm: async function (req, res) {
    try {
      return res.render("login");
    } catch (error) {
      console.log(error);
    }
  },

  login: async function (req, res) {
    try {
      let userToLogin = await usersService.findByField(
        "email",
        req.body.email,
        req.body.password
      );
      return res.render("userProfile", { user: userToLogin });
    } catch (error) {
      console.log(error);
    }
  },

  /* Perfil de usuario */
  userprofile: async function (req, res) {
    try {
      let id = req.session.userLogged.id;
      let user = usersService.getOneBy(id);
      return res.render("../views/users/userProfile", {
        user: user,
      });
    } catch (error) {
      console.log(error);
    }
  },

  logout: function (req, res) {
    res.clearCookie("email");
    req.session.destroy();

    return res.redirect("/");
  },

  /* Dasboard */
  dashboard: async function (req, res) {
    try {
      let users = usersService.getAll();
      res.render("userDashboard", {
        users: users,
      });
    } catch (error) {}
  },

  /* Creación de usuario desde dashboard admin */
  create: async function (req, res) {
    try {
      return res.render("usersCreate");
    } catch (error) {}
  },
  store: async function (req, res) {
    try {
      await usersService.save(req.body);
      return res.render("users/userDashboard", {
        users: usersService.getAll(),
      });
    } catch (error) {}
    const body = req.body;

    usersService.save(userData);
    res.render("users/userDashboard", { users: usersService.getAll() });
  },

  /* Edición de usuario desde dashboard admin */
  edit: async function (req, res) {
    try {
      await usersService.getOneBy(req.params.id);
      res.render("userEdit", {
        user: user,
      });
    } catch (error) {
      res.send("Ha ocurrido un error inesperado").status(500);
    }
  },
  update: async function (req, res) {
    try {
      await usersService.update(req.body, req.params.id, req.file.filename);
      res.render("users/userDashboard", { users: usersService.getAll() });
    } catch (error) {}
  },
  delete: async function (req, res) {
    try {
      await usersService.getOneBy(req.params.id);
      res.render("userDelete", {
        user: user,
      });
    } catch (error) {
      res.send("Ha ocurrido un error inesperado").status(500);
    }
  },
  destroy: async function (req, res) {
    try {
      await usersService.deleteUser(req.params.id);
      return res.redirect("/users/dashboard");
    } catch (error) {}
  },
};
module.exports = usersController;
