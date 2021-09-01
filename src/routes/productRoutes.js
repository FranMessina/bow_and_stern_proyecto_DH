const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController");
const { upload } = require("../middlewares/storage");

productRoutes.get("/detail/:id", productController.productDetail);
productRoutes.get("/createlisting", productController.createListing);
productRoutes.get("/edit/:id", productController.edit);
productRoutes.get("/catalogue", productController.catalogue);

productRoutes.get("/controlpanel", productController.controlPanel);

productRoutes.get("/catalogue/:id", productController.location);
productRoutes.post("/catalogue", productController.location);

productRoutes.post("/create", upload.single("image"), productController.create);
//productRoutes.post('/create',upload.array('image'), function (req, res, next){
//	console.log(req.files)
//	res.send('Archivos subidos correctamente')
//});
//aca debemos pasar multer
productRoutes.put("/:id", upload.single("image"), productController.update);
//productRoutes.put('/:id',upload.array('image'), function (req, res, next){
//	console.log(req.files)
//	res.send('Archivos subidos correctamente')
//});
productRoutes.delete("/:id", productController.delete);

module.exports = productRoutes;
