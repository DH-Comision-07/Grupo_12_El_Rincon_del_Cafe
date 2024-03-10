/* Require */
const express = require('express');
const path = require('path');
const mainRouter = express.Router();
const mainController = require('../controllers/mainController');

/* Routes */

mainRouter.get('/', mainController.index);

mainRouter.get('/contact', mainController.contact);

mainRouter.get('/about-us', mainController.aboutUs);

mainRouter.get('/suscription', mainController.suscription);

module.exports = mainRouter;
