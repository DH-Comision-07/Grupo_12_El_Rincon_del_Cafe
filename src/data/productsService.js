const fs = require("fs");
const path = require("path");
let db = require("../model/db/models");
const { fail } = require("assert");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productsService = {
  //  products: ,

  getTopProduct: async () => {
    try {
      let productosPorCategoria = [];
      for (let categoryId = 1; categoryId <= 4; categoryId++) {
        const producto = await db.Productos.findOne({
          where: { categoryId: categoryId },
          limit: 1,
        });
        if (producto) {
          productosPorCategoria.push(producto);
        }
      }
      return productosPorCategoria;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
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
  category: async function (id) {
    try {
      const categoria = await db.Categorias.findByPk(id);
      return categoria;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  getCategoryByName: async function (categoryName) {
    try {
      let category = await db.Categorias.findOne({
        where: { category: categoryName },
      });

      if (category) {
        return category;
      } else {
        throw new Error(`No se encontró la categoría ${categoryName}`);
      }
    } catch (error) {
      console.error(error);
      throw error;
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
    let productCreate = await db.Productos.create(product);
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

  update: async function (body, id, filename) {
    let product = await this.getOneBy(id);
    if (!filename) {
      filename = product.image;
    }
    try {
      let updatedProduct = {
        id: body.id || product.id,
        name: body.name || product.name,
        categoryId: body.categoryId || product.categoryId,
        price: body.price || product.price,
        amount: body.amount || product.amount,
        description: body.description || product.description,
        image: filename,
      };
      await db.Productos.update(updatedProduct, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  deleteProduct: async function (id) {
    let products = await this.getAll();
    let product = await db.Productos.findOne({
      where: { id: id },
    });
    if (!product) {
      console.log("No se encontró el usuario");
      return products;
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
