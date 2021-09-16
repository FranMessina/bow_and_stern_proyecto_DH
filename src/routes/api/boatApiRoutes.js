const productApiController = require("../../controllers/api/productApiController");
const express = require("express");
const boatApiRoutes = express.Router();
const boatApiController = require("../../controllers/api/boatApiController");

//endpoints
boatApiRoutes.get("/", boatApiController.listBoats);
boatApiRoutes.get("/detail/:id", boatApiController.selectBoat);

boatApiRoutes.get("/search", productApiController.searchLocations);
boatApiRoutes.get("/locations", boatApiController.getLocations);

module.exports = boatApiRoutes;
