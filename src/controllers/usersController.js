/* Require */
const express = require('express');
const path = require('path');
const usersService = require('../data/userService');
const { log } = require('console');
const bcryptjs = require('bcryptjs');

const usersController = {
  /* Registro de usuario */
  registerForm: (req, res) => {
    return res.render('users/register.ejs');
  },
  register: (req, res) => {
    let filename = req.file ? req.file.filename : 'image-default.png';
    let newUserReg = usersService.constructor(req.body, filename);
    usersService.save(newUserReg);
    res.redirect('/users/login');
  },

  /* Login de usuario */
  loginForm: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login.ejs'));
  },
  login: (req, res) => {
    const userToLogin = usersService.findByField('email', req.body.email);

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.recordarme) {
          res.cookie('email', req.body.email, { maxAge: 1000 * 60 } * 2);
        }
      }
      res.redirect('/users/userProfile');
    }
  },

  /* Perfil de usuario */
  userprofile: (req, res) => {
    const id = req.session.userLogged.id;
    const user = usersService.getOneBy(id);
    return res.render('../views/users/userProfile', {
      user: user,
    });
  },

  /* Dasboard */
  dashboard: (req, res) => {
    const users = usersService.getAll();
    return res.render('../views/users/userDashboard', {
      users: users,
    });
  },

  /* Creación de usuario desde dashboard admin */
  create: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/users/usersCreate.ejs')
    );
  },
  store: (req, res) => {
    const body = req.body;
    const userData = usersService.constructor(req.body);

    usersService.save(userData);
    res.render('users/userDashboard', { users: usersService.getAll() });
  },

  /* Edición de usuario desde dashboard admin */
  edit: (req, res) => {
    const id = req.params.id;
    const user = usersService.getOneBy(id);
    if (user) {
      return res.render('../views/users/usersEdit', {
        user: user,
      });
    }
  },
};
module.exports = usersController;
