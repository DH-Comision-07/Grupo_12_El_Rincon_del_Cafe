/* Require */
const express = require("express");
const path = require("path");

const productsController = {
  products: (req, res) => {
    return res.render(
      path.resolve(__dirname, "../views/products/products.ejs")
    );
  },
  productDetail: (req, res) => {
    return res.render(
      path.resolve(__dirname, "../views/products/productDetail.ejs")
    );
  },

  cart: (req, res) => {
    return res.render(
      path.resolve(__dirname, "../views/products/productCart.ejs")
    );
  },
  edition: (req, res) => {
    return res.render(
      path.resolve(__dirname, "../views/products/productEdition.ejs")
    );
  },
  create: (req, res) => {
    return res.render(
      path.resolve(__dirname, "../views/products/productGeneration.ejs")
    );
  },
  category: (req, res) => {
    return res.render(
      path.resolve(__dirname, "../views/products/productCategory.ejs")
    );
  },
};
module.exports = productsController;
