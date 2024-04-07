/* Require */
const express = require('express');
const path = require('path');
const productsService = require('../data/productsService');
const { read } = require('fs');

const productsController = {
  products: (req, res) => {
    return res.render('../views/products/products', {
      products: productsService.getAll(),
    });
  },
  productDetail: (req, res) => {
    const id = req.params.id;
    const product = productsService.getOneBy(id);
    if (product) {
      return res.render('../views/products/productDetail', {
        product: product,
      });
    }
  },
  category: (req, res) => {
    const category = req.params.category;
    const allProducts = productsService.getAll();
    const filteredProducts = allProducts.filter(
      (product) => product.category === category
    );
    return res.render('../views/products/products', {
      products: filteredProducts,
    });
  },
  cart: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/products/productCart.ejs')
    );
  },

  edit: (req, res) => {
    const id = req.params.id;
    const product = productsService.getOneBy(id);
    if (product) {
      return res.render('../views/products/productEdit', {
        product: product,
      });
    }
  },

  update: (req, res) => {
    console.log(req.body);
    productsService.update(req.body, req.params.id, req.file.filename);

    return res.render('../views/products/productDetail', {
      product: productsService.getOneBy(req.params.id),
    });
  },
  create: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/products/productGeneration.ejs')
    );
  },
  store: (req, res) => {
    const productData = productsService.constructor(req.body);
    productData.image = req.file.filename;
    productsService.save(productData);
    res.render('products/products', { products: productsService.getAll() });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const product = productsService.getOneBy(id);
    if (product) {
      return res.render('../views/products/productDelete', {
        product: product,
      });
    }
  },
  destroy: (req, res) => {
    const id = req.params.id;
    productsService.deleteProduct(id);
    return res.redirect('/products/dashboard');
  },
  cat: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/products/productCategory.ejs')
    );
  },
  dashboard: (req, res) => {
    const products = productsService.getAll();
    return res.render('../views/products/productDashboard', {
      products: products,
    });
  },
};
module.exports = productsController;
