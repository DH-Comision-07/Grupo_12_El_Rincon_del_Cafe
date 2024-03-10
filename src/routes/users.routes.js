/* Require */
const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

/* Routes */

usersRouter.get('/register', usersController.register);

usersRouter.get('/login', usersController.login);

module.exports = usersRouter;
