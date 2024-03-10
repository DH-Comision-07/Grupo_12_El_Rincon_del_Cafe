const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5050;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/main/index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products/products.html'));
});
app.get('/product-detail', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products/productDetail.html'));
});

app.get('/product-cart', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products/productCart.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/users/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/users/login.html'));
});
app.get('/h&f', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/h&f.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/main/contact.html'));
});
app.get('/about-us', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/main/aboutUs.html'));
});
app.get('/product-edition', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products/productEdition.html'));
});
app.get('/product-generation', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, './views/products/productGeneration.html')
  );
});
app.get('/suscripcion', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/main/suscripcion.html'));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
