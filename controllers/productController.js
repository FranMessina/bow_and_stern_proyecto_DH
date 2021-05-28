const path = require("path");

const productController = {
	productDetail: (req, res) => {
		res.render("productDetail");
	},
	list: (req, res) => {
		res.render("list");	
    },
};

module.exports = productController; 