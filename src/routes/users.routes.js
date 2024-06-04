/* Require */
const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');
const userMulterMiddleware = require('../middlewares/userMulterMiddleware');
const loginGuard = require('../middlewares/loginGuard');
const adminGuard = require('../middlewares/adminGuard');
const userGuard = require('../middlewares/userGuard');

// Register validations
const registerValidations = require('../validations/register');
const registerValidateForm = require('../middlewares/register');
const registerValidateEmail = require('../middlewares/register-email');

/* Routes */

usersRouter.get('/register', userGuard, usersController.registerForm);
usersRouter.post(
  '/register',
  userMulterMiddleware.single('imageProfile'),
  registerValidations,
  registerValidateForm,
  registerValidateEmail,
  usersController.register
);

usersRouter.get('/login', userGuard, usersController.loginForm);
usersRouter.post('/login', usersController.login);

usersRouter.get('/userProfile', loginGuard, usersController.userprofile);

usersRouter.get(
  '/editmyprofile/:id',
  loginGuard,
  userMulterMiddleware.single('imageProfile'),
  usersController.editProfileForm
);
usersRouter.put(
  '/editmyprofile/:id',
  loginGuard,
  userMulterMiddleware.single('imageProfile'),
  usersController.editProfile
);

usersRouter.get('/create', adminGuard, usersController.create);
usersRouter.post('/create', adminGuard, usersController.store);

usersRouter.get('/edit/:id', adminGuard, usersController.edit);
usersRouter.put(
  '/edit/:id',
  userMulterMiddleware.single('imageProfile'),
  adminGuard,
  usersController.update
);

usersRouter.get('/delete/:id', adminGuard, usersController.delete);
usersRouter.delete('/:id', adminGuard, usersController.destroy);

usersRouter.get('/logout', usersController.logout);
usersRouter.post('/logout', usersController.logout);

usersRouter.get('/dashboard', adminGuard, usersController.dashboard);

module.exports = usersRouter;
