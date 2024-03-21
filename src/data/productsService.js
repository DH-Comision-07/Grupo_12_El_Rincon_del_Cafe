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
};

module.exports = productsService;
