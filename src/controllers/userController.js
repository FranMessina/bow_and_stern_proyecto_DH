const path = require('path');

const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models');

const userController = {
	login: (req, res) => {
		res.render('users/login');
	},
	register: (req, res) => {
		res.render('users/register');
	},
	create: async (req, res) => {
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
			password: bcrypt.hashSync(pass),

		
		};

		await User.create(userData);
			
		res.redirect('/user/login');

	},
	processLogin: async (req, res) => {
		const errors = validationResult(req);
		const old = req.body;

		if (!errors.isEmpty()) {
			return res.render('users/login', {
				old,
				errors: errors.array(),
			});
		}

		const { email, remember } = req.body;
	
		const user = await User.findOne({ where: { email: email }});
			
		delete user.password;

		req.session.logged = user;

		if (remember) {
			res.cookie('user', user.id, {
				maxAge: 1000 * 60 * 60 * 24 * 7,
			});
		}

		res.redirect("/user/profile");
	},
	logout: (req, res) => {
		req.session.destroy();
		res.clearCookie('user');

		res.redirect('/');
	},
	profile: async (req, res) => {
		res.render('users/profile');
	},
};

module.exports = userController;
