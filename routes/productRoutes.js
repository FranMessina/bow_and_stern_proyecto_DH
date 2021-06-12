const express = require('express');
const path = require('path');
const productRoutes = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		let ruta = path.join(__dirname, '../public/img');
		console.log(ruta);
		cb(null, ruta);
	},
	filename: function (req, file, cb) {
		let imageName = Date.now();
		let extension = path.extname(file.originalname);
		let newName = imageName + extension;
		console.log(newName);
		cb(null, newName);
	},
});
const upload = multer({ storage });

productRoutes.get('/detail/:id', productController.productDetail);
productRoutes.get('/createlisting', productController.createListing);
productRoutes.get('/edit/:id', productController.edit);
productRoutes.get('/catalogue', productController.catalogue);

productRoutes.post(
	'/create',
	upload.single('boatImg'),
	productController.create
);

//aca debemos pasar multer
productRoutes.put('/:id', upload.single('boatImg'), productController.update);
productRoutes.delete('/:id', productController.delete);



module.exports = productRoutes;
