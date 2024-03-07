const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5050;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/products.html'));
});
app.get('/productDetail', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
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


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
