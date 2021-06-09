const express = require("express");
const path = require("path");
const checkoutRoutes = express.Router();
const checkoutController = require("../controllers/checkoutController");




checkoutRoutes.get("/groupSize", checkoutController.groupSize);
checkoutRoutes.get("/foodPackage", checkoutController.foodPackage);
checkoutRoutes.get("/experiencePackage", checkoutController.experiencePackage);
checkoutRoutes.get("/selectDate", checkoutController.selectDate);
checkoutRoutes.get("/summary", checkoutController.summary);
checkoutRoutes.get("/confirmation", checkoutController.confirmation);
checkoutRoutes.get("/createAccount", checkoutController.createAccount);

module.exports = checkoutRoutes;
