const path = require('path');

const db = require('../database/models');
const Op = db.Sequelize.Op;




const productController = {
	productDetail: async (req, res) => {
		const boat = await db.Boat.findByPk(req.params.id);
			res.render('products/productDetail', {boat});
	},
	createListing: (req, res) => {
			res.render('products/listingForm');
	},
	catalogue: async (req, res) => {	
		const boats = await db.Boat.findAll( {
			include: ['location']
		})  
		
			res.render('products/catalogue', { boats });
		
		// le pasa la info de todos los botes del servidor a mi vista catalogue
	},

	edit: async (req, res) => {	
		const boat = await db.Boat.findByPk(req.params.id) 
			res.render('products/editProduct', { boat });

		// le pasa la info de todos los botes del servidor a mi vista catalogue
	},
	controlPanel: async (req, res) => {
		const boats = await db.Boat.findAll();
		const user = req.session.logged;

		if(user.role == 'admin'){
            res.render('products/controlPanel', { boats });
        }
    
        // lo que sigue se puede quitar - el nav ya no muestra la opcion para usuario no admin
        else
        {       
            res.send('Not allowed, must be administrator');
		}
	},

	create: async (req, res) => {
		
		//es req.file porque lo manda por mullter

		const image = req.file.filename;

		const {
			name,
			shortDescription,
			year,
			measures,
			vesselType,
			description,
		} = req.body;

		await db.Boat.create(
			{
				name: name,
				short_description: shortDescription,
				year: year,
				measures:measures,
				vessel_type:vesselType,
				description: description,
				image: image,
			}
		)
		res.redirect("/products/catalogue")


		//es req.body porque lo manda por el body del formulario.

	
	},

	delete:  (req, res) => {
		//requiero el id del producto que fue selecccionado para eliminar
		const id = req.params.id;
		//ahora le paso ese id al modelo para que haga su magia
		db.Boat.destroy(
			{where :{id:id}}
		);

		// Por ultimo, lo redirijo a la pajina principal una vez que el archivo ya fue #destroyed
		res.redirect('/products/catalogue');
	},


	location: async (req, res) => {

	const locationId = req.params.id
	const locationFormId = req.body.location
//para el get
	if (locationId) {
		const boats = await db.Boat.findAll( {
			
			where: {
				locations_id: locationId
			}
		})  
		res.render('products/catalogue', { boats })
	}

//para el post
	 if (locationFormId) {

	 	const boats = await db.Boat.findAll( {
	 		where: {
				 "$location.location$": {[Op.substring]: locationFormId}
			 },
			 include: ["location"]
	 		
	 	})  

res.render('products/catalogue', { boats })

	 	
	 }


	}
	
	
	
	,
	// console.log(boats[0].location.location)


	update: async (req, res) => {
		const data = req.body;
		const { id } = req.params;
		// el bote original
		const boatsOriginal = db.Boat.findByPk(id);
		// la imagen original: Original.image
		// dentro de req.file va a venir la información del archivo
		const { file } = req;

		/* Si viene una imagen nueva, cargar la imagen nueva
        sino poner la original */
		let image;

		if (file) {
			image = file.filename;
		} else {
			image = boatsOriginal.image;
		}
		data.image = image;

		const {
			name,
			shortDescription,
			year,
			measures,
			vesselType,
			description,
		} = req.body;

		await db.Boat.update(
			{
				name: name,
				short_description: shortDescription,
				year: year,
				measures:measures,
				vessel_type:vesselType,
				description: description,
				image: image,
			}, {where: {id: id}}
		)
			res.redirect('/products/detail/' + id);
	}

};

module.exports = productController;
