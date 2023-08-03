'use strict';

const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(CUSTOMER_TABLE);
  }
};
