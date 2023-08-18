'use strict';

const { PRODUCT_TABLE, ProductsSchema } = require('../models/product.model');
const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductsSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);

  }
};
