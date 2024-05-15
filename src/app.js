/* Require */
const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./routes/main.routes");
const productsRoutes = require("./routes/products.routes");
const usersRoutes = require("./routes/users.routes");
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");
const isLogged = require("./middlewares/isLogged");
const dotenv = require("dotenv").config();

console.log(process.env.DB_USER);
/* USE */
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "grupo12",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookies());
app.use(isLogged);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

/* SET */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

/* PORT */
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
