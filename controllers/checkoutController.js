const path = require("path");

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
		res.render("checkout/summary");
	},
	createAccount: (req, res) => {
		res.render("checkout/createAccount");
	},
};

module.exports = checkoutController;
