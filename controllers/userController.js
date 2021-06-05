const path = require('path');

const userController = {
	login: (req, res) => {
		res.render('users/login');
	},
	register: (req, res) => {
		res.render('users/register');
	},
	logreg: (req, res) => {
		res.render('users/loginregister');
	},
};

module.exports = userController;
