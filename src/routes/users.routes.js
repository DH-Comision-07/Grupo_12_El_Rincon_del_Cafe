/* Require */
const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const path = require("path");
/* Multer */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images/users"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

/* Routes */

usersRouter.get("/register", usersController.register);
usersRouter.post("/", upload.single("imageProfile"), usersController.logup);

usersRouter.get("/login", usersController.loginForm);
usersRouter.post("/login", usersController.login);

usersRouter.get("/userProfile", usersController.userprofile);

usersRouter.get("/create", usersController.create);
usersRouter.post("/", usersController.store);

usersRouter.get("/edit/:id", usersController.edit);

usersRouter.get("/adminProfile", usersController.adminprofile);

usersRouter.get("/productManagement", usersController.productManagement);

usersRouter.get("/shoppingHistory", usersController.shoppingHistory);

usersRouter.get("/dashboard", usersController.dashboard);

module.exports = usersRouter;
