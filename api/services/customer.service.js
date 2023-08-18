const boom = require('@hapi/boom');


const { models } = require('../lib/sequelize');
// const { Customer } = require('../db/models/customer.model');


class CustomerService {
  constructor() {}


  async create(body) {
    //Le digo que cree un usuario nuevo, con la informacion que
    //esta en body.user
    // const newUser = await models.User.create(body.user)
    // const newCustomer = await models.Customer.create({
    //   ...body,
    //   userId: newUser.id,
    // });
    const newCustomer = await models.Customer.create(body, {
        include: ['user'],
      });
    return newCustomer;
  };


  async find() {
    const rta = await models.Customer.findAll({
      /**Puedo incluir en la busqueda
       * ya que esta configurado "this.belongsTo(models.User, {as: 'user'});"
       */
      include: ['user'],
    });
    return rta;
  }

  async findOne(id) {
    const customerFind = await models.Customer.findByPk(id);
    if(!user){
      throw boom.notFound("Customer not found");
    }
    return customerFind;
  }

  async update(id, changes) {

    const customerFind = await this.findOne(id);
    const rta = await customerFind.update(changes);
    return rta;

  }

  async delete(id) {
    const customerFind = await this.findOne(id);
    await customerFind.destroy();
    return id;
  };
}

module.exports = CustomerService;
