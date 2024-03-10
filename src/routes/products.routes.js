/* Require */
const express = require('express');
const path = require('path');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

/* Routes */

productsRouter.get('/', productsController.products);

productsRouter.get('/detail', productsController.productDetail);

productsRouter.get('/cart', productsController.cart);

productsRouter.get('/edit', productsController.edition);

productsRouter.get('/create', productsController.create);

module.exports = productsRouter;
