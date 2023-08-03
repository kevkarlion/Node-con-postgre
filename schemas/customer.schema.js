const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const phone = Joi.number().integer();
const userId = Joi.number().integer();



const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required()
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
