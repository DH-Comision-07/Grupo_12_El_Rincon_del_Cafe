/* Require */
const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');
const userMulterMiddleware = require('../middlewares/userMulterMiddleware');
const loginGuard = require('../middlewares/loginGuard');
const adminGuard = require('../middlewares/adminGuard');
const userGuard = require('../middlewares/userGuard');

/* Routes */

usersRouter.get('/register', userGuard, usersController.register);
usersRouter.post(
  '/',
  userMulterMiddleware.single('imageProfile'),
  usersController.logup
);

usersRouter.get('/login', usersController.loginForm);
usersRouter.post('/login', usersController.login);

usersRouter.get('/userProfile', loginGuard, usersController.userprofile);

usersRouter.get('/create', adminGuard, usersController.create);
usersRouter.post('/', adminGuard, usersController.store);

usersRouter.get('/edit/:id', adminGuard, usersController.edit);

usersRouter.get('/productManagement', usersController.productManagement);

usersRouter.get('/shoppingHistory', usersController.shoppingHistory);

usersRouter.get('/dashboard', adminGuard, usersController.dashboard);

module.exports = usersRouter;
