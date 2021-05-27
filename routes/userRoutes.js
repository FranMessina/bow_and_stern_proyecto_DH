const express = require("express");
const path = require("path");
const userRoutes = express.Router();
const userController = require("../controllers/userController");

userRoutes.get("/login", userController.login);
userRoutes.get("/register", userController.register);
userRoutes.get("/logreg", userController.logreg);

module.exports = userRoutes;
