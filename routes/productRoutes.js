const express = require('express');
const path = require('path');
const productRoutes = express.Router();
const productController = require('../controllers/productController');

productRoutes.get('/detail/:id', productController.productDetail);
productRoutes.get('/createlisting', productController.createListing);

productRoutes.get('/catalogue', productController.catalogue);

productRoutes.post('/create', productController.create);

module.exports = productRoutes;
