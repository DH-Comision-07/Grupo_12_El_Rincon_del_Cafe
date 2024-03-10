/* Require */
const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./routes/main.routes');

/* USE */
app.use(express.static('public'));
app.use('/', mainRoutes);

/* SET */
app.set('view engine', 'ejs');

/* PORT */
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// /* Products */
// app.get('/products', (req, res) => {
//   res.render(path.resolve(__dirname, './views/products/products.ejs'));
// });
// app.get('/product-detail', (req, res) => {
//   res.render(path.resolve(__dirname, './views/products/productDetail.ejs'));
// });

// app.get('/product-cart', (req, res) => {
//   res.render(path.resolve(__dirname, './views/products/productCart.ejs'));
// });
// app.get('/product-edition', (req, res) => {
//   res.render(path.resolve(__dirname, './views/products/productEdition.ejs'));
// });
// app.get('/product-generation', (req, res) => {
//   res.render(path.resolve(__dirname, './views/products/productGeneration.ejs'));
// });

// /* Users */

// app.get('/register', (req, res) => {
//   res.render(path.resolve(__dirname, './views/users/register.ejs'));
// });

// app.get('/login', (req, res) => {
//   res.render(path.resolve(__dirname, './views/users/login.ejs'));
// });
