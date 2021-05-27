const path = require("path");

const userController = {
	login: (req, res) => {
		res.render("login");
	},
	register: (req, res) => {
		res.render("register");
	},
	logreg: (req, res) => {
		res.render("logreg");
	},
};

module.exports = userController;
