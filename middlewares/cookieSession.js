const userModel = require('../models/usersModel');

module.exports = (req, res, next) => {
	const userCookie = req.cookies.user;

	if (userCookie) {
		const user = userModel.findByPk(userCookie);

		delete user.password;

		res.session.logged = user;
	}

	next();
};
