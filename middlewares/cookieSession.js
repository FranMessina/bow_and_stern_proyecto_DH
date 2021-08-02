const { User } = require('../database/models');


module.exports = async (req, res, next) => {
	const userCookie = req.cookies.user;

	if (userCookie) {
		const user = await User.findByPk(userCookie);

		delete user.password;

		req.session.logged = user;
	}

	next();
};
