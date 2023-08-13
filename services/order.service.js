const boom = require('@hapi/boom');

const { models } = require('./../lib/sequelize')

class OrderService {

  constructor(){
  }

  async create(body) {
    const newOrder = await models.Order.create(body)
    return newOrder;
  }

  async find() {
    return [];
  }

  async findOne(id) {
    /**
     * El código busca y recupera una orden de la base de datos por su ID y también carga la información del cliente relacionado utilizando la opción include. Esto permite acceder tanto a los detalles de la orden como a la información del cliente en un solo objeto.
     */
    const order = await models.Order.findByPk(id, {
      /**
       * realizo un anidamiento en los datos a solicitar
       */
      include: [{
        association: 'customer',
        include: ['user'],
      }],
    });
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
