const fs = require('fs');
const path = require('path');
let products = require('../data/productsDataBase.json');
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

let productsService = {
  products: products,

  getAll: function () {
    return this.products;
  },

  getOneBy: function (id) {
    return this.products.find((product) => product.id == id);
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
