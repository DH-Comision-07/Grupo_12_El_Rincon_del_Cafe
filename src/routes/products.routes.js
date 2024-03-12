/* Require */
const express = require('express');
const path = require('path');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

/* Routes */

productsRouter.get('/', productsController.products);

productsRouter.get('/detail', productsController.productDetail);

productsRouter.get('/cart', productsController.cart);

productsRouter.get('/edition', productsController.edition);

productsRouter.get('/create', productsController.create);

productsRouter.get('/category', productsController.category);

module.exports = productsRouter;
