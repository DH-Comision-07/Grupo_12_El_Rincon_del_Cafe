/* Require */
const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/main.routes');
const productsRoutes = require('./routes/products.routes');
const usersRoutes = require('./routes/users.routes');
const methodOverride =  require('method-override')

/* USE */
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use(methodOverride('_method'))

/* SET */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

/* PORT */
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
