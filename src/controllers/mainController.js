/* Require */
const express = require("express");
const path = require("path");
const productsService = require("../data/productsService");

const mainController = {
  index: async (req, res) => {
    try {
      let products = productsService.getAll();
      return (
        res.render("index"),
        {
          productos: products,
        }
      );
    } catch (error) {}
  },
  contact: (req, res) => {
    return res.render("contact");
  },
  aboutUs: (req, res) => {
    return res.render("aboutUs");
  },
  suscription: (req, res) => {
    return res.render("suscripcion");
  },
};

module.exports = mainController;
