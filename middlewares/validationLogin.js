const usersModel = require('../models/usersModel');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models');


const validationLogin = [
	body('email')
		.notEmpty()
		.withMessage('Complete your email')
		.bail()
		.isEmail()
		.withMessage('Please enter a valid email'),

	body('pass')
		.notEmpty()
		.withMessage('Complete your password')
		.bail()
		.custom(async (value, { req }) => {
			const { email, pass } = req.body;

			const userFound = await User.findOne({ where: {
				email: email
			}});

			if (userFound) {
				const passwordMatch = bcrypt.compareSync(pass, userFound.pass);

				if (passwordMatch) {
					return true;
				}
			}
			return false;
		})
		.withMessage('The email or the password are incorrect'),
];

module.exports = validationLogin;
