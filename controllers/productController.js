const path = require('path');
const productModel = require('../models/productModel');

const productController = {
	productDetail: (req, res) => {
		const boat = productModel.findByPk(req.params.id);

		res.render('products/productDetail', { boat });
	},
	createListing: (req, res) => {
		res.render('products/listingForm');
	},
	catalogue: (req, res) => {
		const boats=productModel.findAll()
		res.render('products/catalogue', { boats });
		// le pasa la info de todos los botes del servidor a mi vista catalogue
	},

	edit: (req, res) => {
		const boats=productModel.findAll()
		res.render('products/catalogue', { boats });
		// le pasa la info de todos los botes del servidor a mi vista catalogue
	},



	create: (req, res) => {

		const {filename} = req.file
		//es req.file porque lo manda por mullter

		image= filename

		const {
			name,
			shortDescription,
			regNum,
			year,
			measures,
			vesselType,
			description,
			
		} = req.body;
		//es req.body porque lo manda por el body del formulario.

		const listing = {
			name,
			shortDescription,
			image,
			regNum,
			year,
			measures,
			vesselType,
			description,
			
		};

		const newListing = productModel.create(listing);
		console.log(req.file)
		res.redirect('/products/detail/' + newListing.id);
	},

	delete: (req,res) =>{

		//requiero el id del producto que fue selecccionado para eliminar 
		const id= req.params.id;
		//ahora le paso ese id al modelo para que haga su magia
		productModel.delete(id)

		// Por ultimo, lo redirijo a la pajina principal una vez que el archivo ya fue #destroyed

		res.redirect('/products/catalogue')


	}
};

module.exports = productController;
