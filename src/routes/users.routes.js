/* Require */
const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

/* Routes */

usersRouter.get('/register', usersController.register);

usersRouter.get('/login', usersController.login);

usersRouter.get('/userProfile', usersController.userprofile);

usersRouter.get('/adminProfile', usersController.adminprofile);

module.exports = usersRouter;
