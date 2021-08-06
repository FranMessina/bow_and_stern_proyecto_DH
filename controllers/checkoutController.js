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

	summaryForm: async(req,res)=>{
			// const {
			// 	userId,
			// 	selectedBoat,
			// 	food_choice,
			// 	selected_experience,
			// 	adults,
			// 	children,
			// 	preferred_date,
			// 	alternative_date,
			// } = req.body;
	
			// await db.Boat.create(
			// 	{
			// 		userId: userId,
			// 		selectedBoat: selectedBoat,
			// 		food_choice: food_choice,
			// 		selected_experience: selected_experience,
			// 		adults: adults,
			// 		children: children,
			// 		preferred_date: preferred_date,
			// 		alternative_date: alternative_date,
			// 	})
		
	
		res.redirect("/checkout/confirmation")
	}

};

module.exports = checkoutController;
