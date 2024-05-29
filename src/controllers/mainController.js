/* Require */
const express = require("express");
const path = require("path");
const productsService = require("../data/productsService");

const mainController = {
  index: async (req, res) => {
    try {
      let products = await productsService.getAll();
      return res.render("main/index", {
        product: products,
      });
    } catch (error) {}
  },
  contact: async (req, res) => {
    try {
    return res.render("main/contact");
  } catch (error) {}
},
  aboutUs: async (req, res) => {
    try {
    return res.render("main/aboutUs");
  } catch (error) {}
},
  suscription: async (req, res) => {
    try {
    return res.render("main/suscripcion");
  } catch (error) {}
}
};

module.exports = mainController;
