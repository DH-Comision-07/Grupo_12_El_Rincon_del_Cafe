/* Require */

const express = require('express');
const path = require('path');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const adminGuard = require('../middlewares/adminGuard');

/* Multer */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/images/products'));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

/* Routes */

productsRouter.get('/', productsController.products);

productsRouter.get('/detail/:id', productsController.productDetail);

productsRouter.get('/category/:category', productsController.category);

productsRouter.get('/cart', productsController.cart);

productsRouter.get('/edit/:id', adminGuard, productsController.edit);
productsRouter.put(
  '/:id',
  upload.single('image'),
  adminGuard,
  productsController.update
);

productsRouter.get('/create', adminGuard, productsController.create);
productsRouter.post(
  '/',
  upload.single('image'),
  adminGuard,
  productsController.store
);

productsRouter.get('/delete/:id', adminGuard, productsController.delete);

productsRouter.delete('/:id', adminGuard, productsController.destroy);

productsRouter.get('/cat', productsController.cat);

productsRouter.get('/dashboard', adminGuard, productsController.dashboard);

module.exports = productsRouter;
