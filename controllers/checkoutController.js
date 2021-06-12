const path = require("path");
const productModel = require('../models/productModel');
const userModel = require('../models/usersModel');

const checkoutController = {
	groupSize: (req, res) => {
		res.render("checkout/groupSize");
	},
	experiencePackage: (req, res) => {
		res.render("checkout/experiencePackage");
	},
	foodPackage: (req, res) => {
		res.render("checkout/foodPackage");
	},
	selectDate: (req, res) => {
		res.render("checkout/selectDate");
	},
	confirmation: (req, res) => {
		res.render("checkout/confirmation");
	},
	summary: (req, res) => {
		const boats=productModel.findAll()
		const userInfo = userModel.readFile()
		res.render("checkout/Summary", {boats, userInfo});
	},
	createAccount: (req, res) => {
		res.render("checkout/createAccount");
	},
};

module.exports = checkoutController;
