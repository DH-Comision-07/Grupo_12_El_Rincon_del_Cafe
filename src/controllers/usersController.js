/* Require */
const express = require('express');
const path = require('path');
const usersService = require('../data/userService');

const usersController = {
  register: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/register.ejs'));
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
