const products = require("../../../data/productsDataBase.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("productos", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("productos", null, {});
  },
};
