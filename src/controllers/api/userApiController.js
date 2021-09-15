const { Op } = require('sequelize')
const  DB  = require('../../database/models')

module.exports = {  
    async listUsers(req, res) {
        try {
            const users = await DB.User.findAndCountAll()

            res.status(200).json({
                meta: {
                    status: "success"
                },
                data: {
                    count: users.count,
                    users: users.rows.map(user => ({ id: user.id, name: user.firstName + " " + user.lastName, email: user.email, detail: "http://localhost:3000/user/profile/" + user.id}))
                }
            })
        } catch(err) {
            res.status(500).json({
                meta: {
                    status: "error"
                },
                error: {
                    msg: "Cant connect to database",
                    err
                }
            })

    }
    },

    async getUser(req, res) {
        try {
            const user = await DB.User.findByPk(req.params.id)
           
            res.status(200).json({
                meta: {
                    status: "success"
                },
                data: {
                    //user: user.map(user => ({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email})),
                    //user: user.rows.map(user => ({ id: user.id, firstName: user.firstName + " " + user.lastName, email: user.email})),
                    user: user,
                    URL: "http://localhost:3000/img/" /*+ user.image*/
                }    
            })
        } catch(err) {
            res.status(500).json({
                meta: {
                    status: "error"
                },
                error: {
                    msg: "Cant connect to database",
                    err
                }
            })

    }
}
}