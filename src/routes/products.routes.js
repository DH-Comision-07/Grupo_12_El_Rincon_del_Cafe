/* Require */

const express = require('express');
const path = require('path');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer')

/* Multer */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/products'))
    },
    filename: function (req, file, cb) {
        cb(null, 
    `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage})

/* Routes */

productsRouter.get('/', productsController.products);

productsRouter.get('/detail/:id', productsController.productDetail);

productsRouter.get('/category/:category', productsController.category);

productsRouter.get('/cart', productsController.cart);

productsRouter.get('/edition/:id', productsController.edition);

productsRouter.get('/create', productsController.create);
productsRouter.post('/', upload.single('image'), productsController.store)


productsRouter.get('/cat', productsController.cat);

module.exports = productsRouter;
