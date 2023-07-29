const { ValidationError } = require('sequelize');

const boom = require('@hapi/boom');

function logErrors (err, req, res, next) {
  console.error(err);
  next(err);
}


//maneja errores en caso de que el email
//sea uno ya ingresado. Usamos el ValidationError
//un metodo del objeto sequelize, un lujo che...
function omrErrorHandler(err, req, res, next){
  if (err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  };
  next(err);
};

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  };
};

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};


module.exports = { logErrors, errorHandler, boomErrorHandler, omrErrorHandler }
