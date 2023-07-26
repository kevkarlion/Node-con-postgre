const boom = require('@hapi/boom');

// const getConnection = require('../lib/postgres');

//models es donde se van a guardar todos los modelos, o
//la forma en que podemos acceder a él.
const { models } = require('../lib/sequelize');


class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    //Estamos trabajando con P.O.O, usando sequelize
    const rta = await models.User.findAll();

    // const rta = await client.query('SELECT * FROM tasks');
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound("user not found");
    }
    return user;
  }

  async update(id, changes) {

    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;

  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  };
}

module.exports = UserService;
