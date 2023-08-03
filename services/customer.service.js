const boom = require('@hapi/boom');


const { models } = require('../lib/sequelize');
const { Customer } = require('../db/models/customer.model');


class CustomerService {
  constructor() {}


  async create(body) {
    const newCustomer = await models.Customer.create(body);
    return newCustomer;
  };


  async find() {
    const rta = await models.Customer.findAll();
    return rta;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if(!user){
      throw boom.notFound("Customer not found");
    }
    return customer;
  }

  async update(id, changes) {

    const customer = await this.findOne(id);
    const rta = await customer.update(changes);
    return rta;

  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return id;
  };
}

module.exports = CustomerService;
