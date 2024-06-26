/* Require */
const express = require('express');
const path = require('path');
const productsService = require('../data/productsService');
const {validationResult} = require('express-validator')


const productsController = {
  products: function (req, res) {
    productsService
      .getAll()
      .then((productos) => {
        res.render('products/products', { products: productos });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  productDetail: async function (req, res) {
    try {
      let prods = await productsService.getOneBy(req.params.id);
      return res.render('../views/products/productDetail', { product: prods });
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  categorys: async function (req, res) {
    try {
      let category = req.params.category;
      let products = await productsService.getCategory(category);

      return res.render('../views/products/products', {
        products: products,
      });
    } catch (error) {
      console.log(error);
    }
  },
  cart: (req, res) => {
    return res.render(
      path.resolve(__dirname, '../views/products/productCart.ejs')
    );
  },

  edit: async function (req, res) {
    try {
      let products = await productsService.getOneBy(req.params.id);
      res.render('products/productEdit', {
        product: products,
      });
    } catch (error) {
      res.send('Ha ocurrido un error inesperado').status(500);
    }
  },

  update: async function (req, res) {
    let errors = validationResult(req)
    try {

      

      let filename = req.file ? req.file.filename : null;

      if(errors.isEmpty()) {
        await productsService.update(req.body, req.params.id, filename);
        res.render(`products/productDashboard`, {
          products: await productsService.getAll(),
        });
        } else {
        res.render('products/productEdit', {errors: errors.mapped(), old: req.body})
      }

      
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  create: async function (req, res) {
    try {
      return res.render('products/productGeneration');
    } catch (error) {
      res.send('Ocurrió un error').status(500);
    }
  },
  store: async function (req, res) {
  

    let errors = validationResult(req)
    
    try {
      console.log(errors)
      if (!req.file) {
        return res.render('products/productGeneration', {errors: {
          image: {
            msg: 'Debe cargar una imágen válida (JPG, JEPG, PNG, GIF)'
          }
        },old: req.body});
      }
      if(errors.isEmpty()) {
        let product = {
          ...req.body,
          image: req.file.filename,
        };
        await productsService.save(product);
        let products = await productsService.getAll();
        return res.render('products/products', {
          products: products,
        });
      } else {
        res.render('products/productGeneration', {errors: errors.mapped(), old: req.body})
      }
      
    } catch (error) {
      console.log(error);
    }
  },
  delete: async function (req, res) {
    try {
      let products = await productsService.getOneBy(req.params.id);
      let category = await productsService.category(products.categoryId);
      res.render('products/productDelete', {
        product: products,
        category: category,
      });
    } catch (error) {
      res.send('Ha ocurrido un error inesperado').status(500);
    }
  },
  destroy: async function (req, res) {
    try {
      await productsService.deleteProduct(req.params.id);
      return res.redirect('/products/dashboard');
    } catch (error) {
      res.send('Ha ocurrido un error inesperado').status(500);
    }
  },
  cat: async function (req, res) {
    try {
      res.render('productCategory');
    } catch (error) {}
  },
  dashboard: async function (req, res) {
    try {
      let products = await productsService.getAll();
      res.render('products/productDashboard', {
        products: products,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = productsController;
