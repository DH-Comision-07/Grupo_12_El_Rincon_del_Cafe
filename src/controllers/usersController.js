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
    res.redirect('users/login')
  },

  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login.ejs'));
  },
  userprofile: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/users/userProfile.ejs')
    );
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
    console.log(body);
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
