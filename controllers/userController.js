const path = require('path');
const usersModel = require("../models/usersModel")

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
	
	create: (req, res) => {
		//crear el usuario
		const {
			firsName,
			lastName,
			user,
			email,
			pass,
			passConfirm,
		} = req.body;

		const userData = {
			firsName,
			lastName,
			user,
			email,
			pass,
			passConfirm,
		};

		const newUser = usersModel.create(userData);

		res.redirect('/users/register' + newUser.id)
	},
};

module.exports = userController;
