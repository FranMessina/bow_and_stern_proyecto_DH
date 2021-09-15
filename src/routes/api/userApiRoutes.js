const express = require("express");
const userApiRoutes = express.Router();
const userApiController = require("../../controllers/api/userApiController");

//endpoints
userApiRoutes.get(
	"/",
	userApiController.listUsers
); /*("http://localhost:3000/api/user/list")*/
userApiRoutes.get("/detail/:id", userApiController.getUser);
module.exports = userApiRoutes;
