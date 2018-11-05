// 3rd party libraries
const express = require('express');

// own files
const productRouter = require('./resources/product/product.router');

// create main RESTFul API router
const restRouter = express.Router();

// define routers
restRouter.use('/products', productRouter);

module.exports = restRouter;

