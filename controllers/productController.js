const path = require('path');
const productModule = require('../modules/productModule');

const productController = {
	productDetail: (req, res) => {
		const boat = productModule.findByPk(req.params.id);

		res.render('products/productDetail', { boat });
	},
	createListing: (req, res) => {
		res.render('products/listingForm');
	},
	catalogue: (req, res) => {
		const boats=productModule.findAll()
		res.render('products/catalogue', { boats });
		// le pasa la info de todos los botes del servidor a mi vista catalogue
	},
	create: (req, res) => {
		const {
			name,
			shortDescription,
			image,
			regNum,
			year,
			measures,
			vesselType,
			description,
			boatimg,
		} = req.body;

		const listing = {
			name,
			shortDescription,
			image,
			regNum,
			year,
			measures,
			vesselType,
			description,
			boatimg,
		};

		const newListing = productModule.create(listing);

		res.redirect('/products/detail/' + newListing.id);
	},
};

module.exports = productController;
