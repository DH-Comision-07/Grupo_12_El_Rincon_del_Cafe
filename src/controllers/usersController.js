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
};
module.exports = usersController;
