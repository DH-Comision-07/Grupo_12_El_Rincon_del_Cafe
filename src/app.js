/* Require */
const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require('./routes/main.routes');
const productsRoutes = require('./routes/products.routes');

/* USE */
app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/products', productsRoutes);

/* SET */
app.set('view engine', 'ejs');

/* PORT */
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// /* Users */

// app.get('/register', (req, res) => {
//   res.render(path.resolve(__dirname, './views/users/register.ejs'));
// });

// app.get('/login', (req, res) => {
//   res.render(path.resolve(__dirname, './views/users/login.ejs'));
// });
