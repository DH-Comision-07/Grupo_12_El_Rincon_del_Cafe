/* Require */
const express = require('express');
const path = require('path');

const mainController = {
  index: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/main/index.ejs'));
  },
  contact: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/main/contact.ejs'));
  },
  aboutUs: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/main/aboutUs.ejs'));
  },
  suscription: (req, res) => {
    return res.render(path.resolve(__dirname, '../views/main/suscripcion.ejs'));
  },
};

module.exports = mainController;
