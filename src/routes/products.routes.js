/* Require */

const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsController");
const productMulterMiddleware = require("../middlewares/productMulterMiddleware");
const adminGuard = require("../middlewares/adminGuard");

/* Routes */

productsRouter.get("/", productsController.products);

productsRouter.get("/detail/:id", productsController.productDetail);

productsRouter.get("/category/:category", productsController.categorys);

productsRouter.get("/cart", productsController.cart);

productsRouter.get("/edit/:id", adminGuard, productsController.edit);
productsRouter.put(
  "/:id",
  productMulterMiddleware.single("image"),
  adminGuard,
  productsController.update
);

productsRouter.get("/create", adminGuard, productsController.create);
productsRouter.post(
  "/",
  productMulterMiddleware.single("image"),
  adminGuard,
  productsController.store
);

productsRouter.get("/delete/:id", adminGuard, productsController.delete);

productsRouter.delete("/:id", adminGuard, productsController.destroy);

productsRouter.get("/cat", productsController.cat);

productsRouter.get("/dashboard", adminGuard, productsController.dashboard);

module.exports = productsRouter;
