const express = require('express');
const path = require('path');
const productRoutes = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		let ruta = path.join(__dirname, '../../public/img');
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
//const upload = multer({ storage });
const upload = multer({ storage: storage });
	//dest: path.join(_dirname,'../../public/img'),
//}).single('image')


productRoutes.get('/detail/:id', productController.productDetail);
productRoutes.get('/createlisting', productController.createListing);
productRoutes.get('/edit/:id', productController.edit);
productRoutes.get('/catalogue', productController.catalogue);

productRoutes.get('/controlpanel', productController.controlPanel);


productRoutes.get("/catalogue/:id", productController.location)
productRoutes.post ("/catalogue", productController.location)


productRoutes.post('/create',upload.single('image'),productController.create);
//productRoutes.post('/create',upload.array('image'), function (req, res, next){
//	console.log(req.files)
//	res.send('Archivos subidos correctamente')
//});
//aca debemos pasar multer
productRoutes.put('/:id', upload.single('image'),productController.update);
//productRoutes.put('/:id',upload.array('image'), function (req, res, next){
//	console.log(req.files)
//	res.send('Archivos subidos correctamente')
//});
productRoutes.delete('/:id', productController.delete);

module.exports = productRoutes;
