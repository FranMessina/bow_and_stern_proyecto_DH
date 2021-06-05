const path = require('path');
const productModule = require('../modules/productModule');

const productController = {
	productDetail: (req, res) => {
		res.render('products/productDetail');
	},
	list: (req, res) => {
		res.render('products/list');
	},
	createListing: (req, res) => {
		res.render('users/listingForm');
	},
	catalogue: (req, res) => {
		res.render('products/catalogue');
	},
	create: (req, res) => {
		const {
			boatName,
			regNum,
			year,
			measures,
			vesselType,
			legalpapers,
			boatimg,
			ownername,
			userID,
			email,
		} = req.body;

		const listing = {
			boatName,
			regNum,
			year,
			measures,
			vesselType,
			legalpapers,
			boatimg,
			ownername,
			userID,
			email,
		};

		const newListing = productModule.create(listing);

		res.send(newListing);
	},

};

module.exports = productController;
