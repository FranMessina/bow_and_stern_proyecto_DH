const path = require('path');
const productModel = require('../models/productModel');
const {Boat} = require('../database/models');

const productController = {
	productDetail: (req, res) => {
		const boat = productModel.findByPk(req.params.id);
			res.render('products/productDetail', { boat });
	},
	createListing: (req, res) => {
			res.render('products/listingForm');
	},
	catalogue: async (req, res) => {	
		const boats = await Boat.findAll()  
			res.render('products/catalogue', { boats });
		
		// le pasa la info de todos los botes del servidor a mi vista catalogue
	},

	edit: async (req, res) => {	
		const boat = await Product.findByPk(req.params.id) 
			res.render('products/editProduct', { boat });

		// le pasa la info de todos los botes del servidor a mi vista catalogue
	},

	create: async (req, res) => {
		const { filename } = req.file;
		//es req.file porque lo manda por mullter

		image = filename;

		const {
			name,
			shortDescription,
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
			year,
			measures,
			vesselType,
			description,
		};

		const productCreate = await Product.create(listing)
				res.redirect('/products/detail' + productCreate.id)
	},

	delete: (req, res) => {
		//requiero el id del producto que fue selecccionado para eliminar
		const id = req.params.id;
		//ahora le paso ese id al modelo para que haga su magia
		productModel.delete(id);

		// Por ultimo, lo redirijo a la pajina principal una vez que el archivo ya fue #destroyed
		res.redirect('/products/catalogue');
	},

	update: (req, res) => {
		const data = req.body;
		const { id } = req.params;
		// el bote original
		const boatsOriginal = productModel.findByPk(id);
		// la imagen original: Original.image
		data.regNum = boatsOriginal.regNum;
		data.shortDescription = boatsOriginal.shortDescription;
		// dentro de req.file va a venir la información del archivo
		const { file } = req;

		/* Si viene una imagen nueva, cargar la imagen nueva
        sino poner la original */
		let image;

		if (file) {
			image = '/images/' + file.filename;
		} else {
			image = boatsOriginal.image;
		}

		data.image = image;
		productModel.update(data, id);
			res.redirect('/products/detail/' + id);
	},
	controlPanel: (req, res) => {
		const boats = productModel.findAll();
			res.render('products/controlPanel', { boats });
	},
};

module.exports = productController;
