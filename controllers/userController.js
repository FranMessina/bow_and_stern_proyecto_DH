const path = require('path');
const usersModel = require('../models/usersModel');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const {User} = require('../database/models');

const userController = {
	login: (req, res) => {
		res.render('users/login');
	},
	register: (req, res) => {
		res.render('users/register');
	},
	create: (req, res) => {
		let errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.render('users/register', { errors: errors.mapped(), old: req.body });
		}
		//crear el usuario
		const { firstName, lastName, email, pass } = req.body;

		const userData = {
			firstName,
			lastName,
			email,
			pass: bcrypt.hashSync(pass),
		};

		const newUser = usersModel.create(userData);
			res.redirect('/user/register');

	//User.create(userData) 
	//	.then( function (user) {
	//		res.redirect('/user/login')
	//	});

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
			});
		}

		res.redirect('/user/profile');
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
