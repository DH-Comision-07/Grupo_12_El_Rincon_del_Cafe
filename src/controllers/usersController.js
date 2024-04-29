/* Require */
const express = require('express');
const path = require('path');
const usersService = require('../data/userService');

const usersController = {
  register: (req, res) => {
    return res.render('users/register.ejs');
  },

  logup: (req, res) => {
    let newUserReg = usersService.constructor(req.body, req.file.filename);
    usersService.save(newUserReg);
    res.redirect('users/login');
  },

  loginForm: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login.ejs'));
  },
  login: (req, res) => {
    const userToLogin = usersService.findByField('email', req.body.email);

    if (userToLogin) {
      const passwordValidation = usersService.findByField(
        'password',
        req.body.password
      );

      if (passwordValidation) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        res.redirect('/users/userProfile');
      }
    }
  },

  userprofile: (req, res) => {
    const id = req.session.userLogged.id;
    const user = usersService.getOneBy(id);
    return res.render('../views/users/userProfile', {
      user: user,
    });
  },
  adminprofile: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/users/adminProfile.ejs')
    );
  },
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
  edit: (req, res) => {
    const id = req.params.id;
    const user = usersService.getOneBy(id);
    if (user) {
      return res.render('../views/users/usersEdit', {
        user: user,
      });
    }
  },

  productManagement: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/users/productManagement.ejs')
    );
  },
  shoppingHistory: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/users/shoppingHistory.ejs')
    );
  },
  dashboard: (req, res) => {
    const users = usersService.getAll();
    return res.render('../views/users/userDashboard', {
      users: users,
    });
  },
};
module.exports = usersController;
