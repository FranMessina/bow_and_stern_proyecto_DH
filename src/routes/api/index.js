const express = require("express");
const apiRoutes = express.Router();

const userApiRoutes = require("./userApiRoutes")
const boatApiRoutes = require("./boatApiRoutes")

apiRoutes.use("user",userApiRoutes)
apiRoutes.use("boat",boatApiRoutes)

module.exports =apiRoutes