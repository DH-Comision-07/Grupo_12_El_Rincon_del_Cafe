/* Require */
const express = require('express');
const app = express();
const mainRoutes = require('./routes/main.routes');
const productsRoutes = require('./routes/products.routes');
const usersRoutes = require('./routes/users.routes');

/* USE */
app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

/* SET */
app.set('view engine', 'ejs');

/* PORT */
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
