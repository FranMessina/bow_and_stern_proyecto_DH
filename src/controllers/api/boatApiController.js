const { Op } = require("sequelize");
const DB = require("../../database/models");

module.exports = {
	async listBoats(req, res) {
		try {
			const boats = await DB.Boat.findAndCountAll({ include: ["location"] });

			const locations = await DB.Location.findAll({
				include: ["boats"],
			});

			let boatsByLocations = {};

			locations.forEach(element => {
				locationName = element.location;
				boatsByLocations[locationName] = element.boats.length;
			});

			boatsMapped = boats.rows.map(boat => {
				const urlDetail = "http://localhost:3000/products/catalogue/" + boat.id;
				boat.setDataValue("detail", urlDetail);
				return boat;
			});

			res.status(200).json({
				meta: {
					status: "success",
				},
				data: {
					count: boats.count,
					countByLocations: boatsByLocations,
					boats: boatsMapped,
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
	async selectBoat(req, res) {
		console.log(req.params.id);
		try {
			const boat = await DB.Boat.findByPk(req.params.id);

			boat.setDataValue("img", "http://localhost:3000/img/" + boat.image);

			res.status(200).json({
				meta: {
					status: "success",
				},
				data: {
					boat,
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
	async getLocations(req, res) {
		try {
			const locations = await DB.Location.findAll({
				include: ["boats"],
			});

			const mappedLocations = locations.map(loc => {
				loc.setDataValue("numberOfBoats", loc.boats.length);
				return loc;
			});

			res.status(200).json({
				meta: {
					status: "success",
				},
				data: {
					locations: mappedLocations,
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
