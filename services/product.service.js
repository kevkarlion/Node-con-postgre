const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');


const sequelize = require('./../lib/sequelize');


//Al usar sequelize ya no es necesario el pool,
//Sequelize lo gestiona automaticamente
// const pool = require('./../lib/postgres.pool');


class ProductsService {

  constructor(){
    this.products = [];
    this.generate();


    // this.pool = pool;
    // //escucho si se produce algun error en la conexion
    // this.pool.on(('error'), (err) => console.err(err));
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const query = "SELECT * FROM tasks";
    const [data] = await sequelize.query(query);
    return data;

    //El uso de sequelize deja inoperable esto, ya que
    //usa pool de manera nativa.
    // const rta = await this.pool.query(query);
    // return rta.rows;
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
