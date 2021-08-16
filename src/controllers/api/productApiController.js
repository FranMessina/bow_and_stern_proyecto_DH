const { Op } = require('sequelize')
const db = require('../../database/models');

module.exports = {
    async searchLocations(req, res) {

        //este name se lo doy desde el JS Front
        const { name } = req.query

        const location = await db.Location.findAndCountAll({
            where: {
                location: {
                    [Op.like]: "%"+name+"%"
                }
            }
        })

        res.status(200).json({
            meta: {
                status: "success",
                total: location.count
            },
            data: {
                location: location.rows
            }
        })
    }

}