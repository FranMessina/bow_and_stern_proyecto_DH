const express = require('express');
const path = require('path');
const productRoutes = express.Router();
const productController = require('../controllers/productController');

productRoutes.get('/productDetail', productController.productDetail);
productRoutes.get('/list', productController.list);
productRoutes.get('/createlisting', productController.createListing);

productRoutes.post('/create', productController.create);

module.exports = productRoutes;
