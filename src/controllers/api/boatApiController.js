const { Op } = require('sequelize')
const DB = require('../../database/models')

module.exports = {  
    async listBoats(req, res) {
        try {
            const boats = await DB.Boat.findAndCountAll();
            const locations = await DB.Location.findAndCountAll({
                include: ["boats"]
            });
            console.log(locations)
            let boatsByLocations = {};
         
               //});
                //locations.rows.foreach(function(location){
                    //const count= boats.filter((boat) => boat.location == location.id).length;
                    //const itetm = {location: location.id, boats: count};
                    //boatsByLocations.push(item);
                //});
            
            res.status(200).json({
                meta: {
                    status: "success"
                },
                data: {
                    count: boats.count,
                    countByLocations: boatsByLocations,
                    
                    boats: boats.rows.map(boat => ({ id: boat.id, name: boat.name, short_description: boat.short_description, image: boat.image, year: boat.year, measures: boat.measures, vessel_type: boat.vessel_type, description:boat.description, location:boat.locations_id, detail: "http://localhost:3000/products/catalogue/" + boat.id}))
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
    async selectBoat(req, res) {
        try {
            const boat = await DB.Boat.findByPk(req.params.id)

            res.status(200).json({
                meta: {
                    status: "success"
                },
                data: {
                    //user: user.map(user => ({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email})),
                    //boat: boat.map(boat => ({  id: boat.id, name: boat.name, short_description: boat.short_description, image: boat.image, year: boat.year, measures: boat.measures, vessel_type: boat.vessel_type, description:boat.description, location:boat.locations_id, detail: "http://localhost:3000/products/catalogue/" + boat.id})),
                    boat: boat,
                    URL: "http://localhost:3000/img/" + boat.image 
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

