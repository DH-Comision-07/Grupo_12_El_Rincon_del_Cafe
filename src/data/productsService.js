const fs = require("fs");
const path = require("path");
let db = require("../model/db/models");
const { fail } = require("assert");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productsService = {
  //  products: ,

  getAll: async function () {
    try {
      const product = await db.Productos.findAll({
        include: [{ association: "productosCategoria" }],
      });
      return product;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  getOneBy: async function (id) {
    try {
      return await db.Productos.findByPk(id, {
        include: [{ association: "productosCategoria" }],
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  getCategory: async function (category) {
    try {
      let categoryName = await db.Categorias.findOne({
        where: { category: category },
      });
      let allProducts = await this.getAll();

      if (categoryName) {
        let filteredProducts = await db.Productos.findAll({
          where: { categoryId: categoryName.id },
        });
        return filteredProducts.length > 0 ? filteredProducts : allProducts;
      } else {
        return allProducts;
      }
    } catch (error) {
      console.log(error);
    }
  },
  save: async function (product) {
    let producto = new Product(product);
    let productCreate = await db.Productos.create(producto);
    return productCreate.dataValues;

    // const ultimoId =
    //   this.products.length > 0 ? this.products[this.products.length - 1].id : 0;
    // const nuevoId = ultimoId + 1;
    // product.id = nuevoId;
    // this.products.push(product);
    // fs.writeFileSync(
    //   path.resolve(__dirname, "../data/productsDataBase.json"),
    //   JSON.stringify(this.products)
    // );
  },

  saveProducts: async function (products) {
    try {
      fs.writeFileSync(productsDBPath, JSON.stringify(products, null, 2));
    } catch (error) {}
  },

  update: async function (body, id, imagename) {
    try {
      let productos = new Product(body);
      await db.Productos.update(productos, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
      return [];
    }

    // fs.writeFileSync(
    //   path.resolve(__dirname, "../data/productsDataBase.json"),
    //   JSON.stringify(this.products)
    // );
    // return this.products;
  },

  deleteProduct: async function (id) {
    let product = await db.Productos.findOne({
      where: { id: id },
    });
    if (!product) {
      console.log("No se encontró el producto");
    }
    try {
      fs.unlinkSync(
        path.resolve(__dirname, "../../public/images/products/" + product.image)
      );
      product.destroy();
    } catch (error) {
      console.log(error);
    }
  },
};

function Product(data) {
  return {
    id: data.id || null,
    name: data.name || "",
    category: data.category || "",
    price: data.price || 0,
    amount: data.amount || 0,
    description: data.description || "",
    image: data.image || "",
  };
}

module.exports = productsService;
