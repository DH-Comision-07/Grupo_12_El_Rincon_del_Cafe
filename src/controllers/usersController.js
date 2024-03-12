/* Require */
const express = require('express');
const path = require('path');

const usersController = {
  register: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/register.ejs'));
  },
  login: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/login.ejs'));
  },
  userprofile: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/userProfile.ejs'));
  },
  adminprofile: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/users/adminProfile.ejs'));
  },
};
module.exports = usersController;
