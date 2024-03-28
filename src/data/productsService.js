const fs = require('fs');
const path = require('path');
let products = require('../data/productsDataBase.json');
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

let productsService = {
  products: products,

  getAll: function () {
    this.products = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../data/productsDataBase.json'))
    );
    return this.products;
  },

  getOneBy: function (id) {
    return this.products.find((product) => product.id == id);
  },

  save: function (product) {
    const ultimoId =
      this.products.length > 0 ? this.products[this.products.length - 1].id : 0;
    const nuevoId = ultimoId + 1;
    product.id = nuevoId;
    this.products.push(product);
    fs.writeFileSync(
      path.resolve(__dirname, '../data/productsDataBase.json'),
      JSON.stringify(this.products)
    );
  },

  constructor: function Product(data) {
    console.log(data);
    return {
      id: data.id || null,
      name: data.name || '',
      category: data.category || '',
      price: data.price || 0,
      amount: data.amount || 0,
      description: data.description || '',
      image: data.image || '',
    };
  },
  saveProducts: function (products) {
    const productsDBPath = path.join(__dirname, './productsDataBase.json');
    fs.writeFileSync(productsDBPath, JSON.stringify(products, null, 2));
  },
  deleteProduct: function (id) {
    console.log(`Deleting product with id ${id}`);
    const products = this.getAll();
    const nonDeletedProducts = products.filter((product) => product.id != id);
    this.saveProducts(nonDeletedProducts);
    return nonDeletedProducts;
  },
};

module.exports = productsService;
