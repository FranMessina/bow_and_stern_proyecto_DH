const path = require('path');
const usersModel = require('../models/usersModel');
const {validationResult} = require('express-validator');

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
		let errors=validationResult(req)

		if (!errors.isEmpty()) {
			return res.render('users/register', {errors: errors.mapped(), old: req.body})
		}
		//crear el usuario
		const { fullName, email, pass} = req.body;

		const userData = {
			fullName,
			email,
			pass,
		};

		const newUser = usersModel.create(userData);

		res.redirect('/user/register');
	},
};

module.exports = userController;
