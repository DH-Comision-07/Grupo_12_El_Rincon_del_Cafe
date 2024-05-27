/* Require */
const express = require("express");
const path = require("path");
const productsService = require("../data/productsService");
const { read } = require("fs");
const { AsyncLocalStorage } = require("async_hooks");
const { log } = require("console");

const productsController = {
  products: function (req, res) {
    productsService
      .getAll()
      .then((productos) => {
        res.render("../views/products/products", { products: productos });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  productDetail: async function (req, res) {
    try {
      let prods = await productsService.getOneBy(req.params.id);
      return res.render("../views/products/productDetail", { product: prods });
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  categorys: async function (req, res) {
    try {
      let category = req.params.category;
      let allProducts = await productsService.getAll();
      let filteredProducts = await productsService.getCategory(category);
    
      if (filteredProducts) {
        return res.render("../views/products/products", {
          products: filteredProducts,
        });
      } else {
        return res.render("../views/products/products", {
          products: allProducts,
        });
      }
    } catch (error) {
      console.log(error);
      return [];}
  },
  cart: (req, res) => {
    return res.render(
      path.resolve(__dirname, "../views/products/productCart.ejs")
    );
  },

  edit: (req, res) => {
    const id = req.params.id;
    const product = productsService.getOneBy(id);
    if (product) {
      return res.render("../views/products/productEdit", {
        product: product,
      });
    }
  },

  update: async function (req, res) {
    try {
      await productsService.update(req.body, req.params.id, req.file.filename);
      res.redirect(`/product/productDetail/${req.params.id}`),
        {
          product: productsService.getOneBy(req.params.id),
        };
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  create: async function (req, res) {
    try {
      return res.render("productGeneration");
    } catch (error) {
      res.send("Ocurrió un error").status(500);
    }
  },
  store: async function (req, res) {
    try {
      await productsService.save(req.body);
      return res.render("products/products", {
        products: productsService.getAll(),
      });
    } catch (error) {
      console.log(error);
    }
  },
  delete: (req, res) => {
    const id = req.params.id;
    const product = productsService.getOneBy(id);
    if (product) {
      return res.render("../views/products/productDelete", {
        product: product,
      });
    }
  },
  destroy: (req, res) => {
    const id = req.params.id;
    productsService.deleteProduct(id);
    return res.redirect("/products/dashboard");
  },
  cat: (req, res) => {
    return res.render(
      path.resolve(__dirname, "../views/products/productCategory.ejs")
    );
  },
  dashboard: (req, res) => {
    const products = productsService.getAll();
    return res.render("../views/products/productDashboard", {
      products: products,
    });
  },
};
module.exports = productsController;
