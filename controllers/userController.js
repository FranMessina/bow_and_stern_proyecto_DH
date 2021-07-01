const path = require('path');
const usersModel = require('../models/usersModel');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

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
		let errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.render('users/register', { errors: errors.mapped(), old: req.body });
		}
		//crear el usuario
		const { fullName, email, pass } = req.body;

		const userData = {
			fullName,
			email,
			pass: bcrypt.hashSync(pass),
		};

		const newUser = usersModel.create(userData);

		res.redirect('/user/register');
	},
	processLogin: (req, res) => {
		const errors = validationResult(req);
		const old = req.body;

		if (!errors.isEmpty()) {
			return res.render('users/login', {
				old,
				errors: errors.mapped(),
			});
		}

		const { email, remember } = req.body;

		const user = usersModel.findByField('email', email);

		delete user.password;

		req.session.logged = user;

		if (remember) {
			res.cookie('user', user.id, {
				maxAge: 1000 * 60,
				signed: true,
			});
		}

		res.redirect('/users/profile');
	},
	logout: (req, res) => {
		req.session.destroy();
		res.clearCookie('user');

		res.redirect('/');
	},
	profile: (req, res) => {
		res.render('users/profile');
	},
};

module.exports = userController;
