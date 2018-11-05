// 3rd party libraries
const express = require('express');

// own files
const productController = require('./product.controller');

// create product router
const productRouter = express.Router();

// define routes
productRouter.route('/search')
    .get(productController.search);


module.exports = productRouter;