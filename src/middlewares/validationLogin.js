
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
				const passwordMatch = bcrypt.compareSync(pass, userFound.password);

				if (passwordMatch) {
					return Promise.resolve();
				}
			}
			return Promise.reject();
		})
		.withMessage('Icorrect Email or Password'),
];

module.exports = validationLogin;
