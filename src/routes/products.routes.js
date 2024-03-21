/* Require */
const express = require('express');
const path = require('path');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

/* Routes */

productsRouter.get('/', productsController.products);

productsRouter.get('/detail/:id', productsController.productDetail);

productsRouter.get('/category/:category', productsController.category);

productsRouter.get('/cart', productsController.cart);

productsRouter.get('/:id/edition', productsController.edition);

productsRouter.get('/create', productsController.create);

productsRouter.get('/cat', productsController.cat);

productsRouter.get('/dashboard', productsController.dashboard);

module.exports = productsRouter;
