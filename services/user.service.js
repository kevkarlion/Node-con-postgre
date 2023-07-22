const boom = require('@hapi/boom');

// const getConnection = require('../lib/postgres');

//models es donde se van a guardar todos los modelos, o
//la forma en que podemos acceder a él.
const { models } = require('../lib/sequelize');


class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    //Estamos trabajando con P.O.O, usando sequelize
    const rta = await models.User.findAll();

    // const rta = await client.query('SELECT * FROM tasks');
    return rta;
  }

  async findOne(id) {
    return { id };
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

module.exports = UserService;
