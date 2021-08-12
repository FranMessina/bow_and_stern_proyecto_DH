const express = require("express");
const path = require("path");
const checkoutRoutes = express.Router();
const checkoutController = require("../controllers/checkoutController");
const checkoutlogin = require("../middlewares/checkoutLogin")



checkoutRoutes.get("/groupSize", checkoutlogin, checkoutController.groupSize);
checkoutRoutes.get("/foodPackage",checkoutlogin, checkoutController.foodPackage);
checkoutRoutes.get("/experiencePackage",checkoutlogin, checkoutController.experiencePackage);

checkoutRoutes.get("/summary", checkoutlogin, checkoutController.summary);
checkoutRoutes.get("/confirmation", checkoutlogin, checkoutController.confirmation);
checkoutRoutes.get("/createAccount", checkoutController.createAccount);

checkoutRoutes.get("/selectDate",checkoutlogin, checkoutController.startCheckout)


checkoutRoutes.post("/summary", checkoutController.summaryForm)

module.exports = checkoutRoutes;
