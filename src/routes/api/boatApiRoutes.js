const express = require('express');
const productApiController = require ("../../controllers/api/productApiController")
const boatApiRoutes = express.Router()

boatApiRoutes.get("/search", productApiController.searchLocations)

module.exports= boatApiRoutes;