const path = require("path");

const productController = {
	productDetail: (req, res) => {
		res.render("products/productDetail");
	},
	list: (req, res) => {
		res.render("products/list");
	},
};

module.exports = productController;
