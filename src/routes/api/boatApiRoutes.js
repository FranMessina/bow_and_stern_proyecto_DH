/*MATIAS
const express = require('express');
const productApiController = require ("../../controllers/api/productApiController")
const boatApiRoutes = express.Router()

boatApiRoutes.get("/search", productApiController.searchLocations)

boatApiRoutes.get("/getBoat", productApiController.getBoat)


module.exports= boatApiRoutes;
*/
const express = require("express");
const boatApiRoutes = express.Router();
const boatApiController = require ("../../controllers/api/boatApiController")

//endpoints
boatApiRoutes.get("/", boatApiController.listBoats)
boatApiRoutes.get("/:id", boatApiController.selectBoat)
module.exports= boatApiRoutes
