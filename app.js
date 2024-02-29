const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products.html'));
});

app.get('/productCart', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/h&f', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/h&f.html'));
});

app.listen(5050, () => {
  console.log('Servidor corriendo en 5050');
});
