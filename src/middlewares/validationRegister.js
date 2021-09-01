const { body } = require("express-validator");
const { User } = require("../database/models");

const validationRegister = [
	body("firstName").notEmpty().withMessage("Complete your first name"),

	body("lastName").notEmpty().withMessage("Complete your last name"),

	body("email")
		.notEmpty()
		.withMessage("Complete your email")
		.bail()
		.isEmail()
		.withMessage("Please enter a valid email")
		.bail()
		.custom(async email => {
			let exists = await User.findOne({ where: { email: email } });

			if (exists) {
				return Promise.reject();
			} else {
				return Promise.resolve();
			}
		})
		.withMessage("This email is already registered"),

	body("pass").notEmpty().withMessage("Complete your password"),

	body("passConfirm")
		.notEmpty()
		.withMessage("Please confirm your password")
		.bail()
		.custom((passConfirm, { req }) => {
			let pass = req.body.pass;

			if (pass == passConfirm) {
				return true;
			}
			return false;
		})
		.withMessage("Both passwords must be the same"),
];

module.exports = validationRegister;
