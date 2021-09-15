const { Op } = require("sequelize");
const DB = require("../../database/models");

module.exports = {
	async listUsers(req, res) {
		try {
			const users = await DB.User.findAndCountAll();

			res.status(200).json({
				meta: {
					status: "success",
				},
				data: {
					count: users.count,
					users: users.rows.map(user => ({
						id: user.id,
						name: user.firstName + " " + user.lastName,
						email: user.email,
						detail: "http://localhost:3000/api/user/detail/" + user.id,
					})),
				},
			});
		} catch (err) {
			res.status(500).json({
				meta: {
					status: "error",
				},
				error: {
					msg: "Cant connect to database",
					err,
				},
			});
		}
	},

	async getUser(req, res) {
		try {
			const user = await DB.User.findOne({
				where: { id: req.params.id },
				attributes: ["firstName", "lastName", "email"],
			});

			res.status(200).json({
				meta: {
					status: "success",
				},
				data: {
					user,
				},
			});
		} catch (err) {
			res.status(500).json({
				meta: {
					status: "error",
				},
				error: {
					msg: "Cant connect to database",
					err,
				},
			});
		}
	},
};
