module.exports = (req, res, next) => {
	const userSession = req.session.logged;

	if (!userSession) {
		return res.redirect('/checkout/createaccount');
	}

	next();
};