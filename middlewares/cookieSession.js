const usersModel = require('../models/usersModel');

module.exports = (req, res, next) => {
	const userCookie = req.cookies.user;

	if (userCookie) {
		const user = usersModel.findByPk(userCookie);

		delete user.password;

		req.session.logged = user;
	}

	next();
};
