const boom = require('@hapi/boom');
const { models } = require('./../lib/sequelize');

class CategoryService {

  constructor(){
  }
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    // const rta = await models.Category.findByPk(id);
    // if (!rta) {
    //   throw boom.notFound("Product not found");
    // }
    // return rta;

    const category = await models.Category.findByPk(id , {
      include: ['products'],
    });
    return category;
  }

  async update(id, changes) {
    const [updatedCount, updatedCategories] = await models.Category.update(changes, {
      where: { id },
      returning: true
    });
    if(!updatedCount){
      throw boom.notFound("Product not found")
    }
    return updatedCategories[0];
  }

  async delete(id) {
    const categoryDelete = await this.findOne(id);
    await categoryDelete.destroy();
    return id;
  }

}

module.exports = CategoryService;
