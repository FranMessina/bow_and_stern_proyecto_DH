const express = require("express");
const path = require("path");
const productRoutes = express.Router();
const productController = require("../controllers/productController");

productRoutes.get("/productDetail", productController.productDetail);
productRoutes.get("/list", productController.list);

module.exports = productRoutes;