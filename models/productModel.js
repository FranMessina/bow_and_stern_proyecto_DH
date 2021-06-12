const fs = require('fs');
const path = require('path');

module.exports = {
	filename: path.resolve(__dirname, '../database/listings.json'),
	readFile() {
		const listings = fs.readFileSync(this.filename, 'utf-8');

		return JSON.parse(listings);
	},
	writeFile(updatedListings) {
		const listingJson = JSON.stringify(updatedListings, null, 2);
		//pasa de array a json

		fs.writeFileSync(this.filename, listingJson);
	},
	create(listing) {
		listing.id = this.generateId();

		const listings = this.readFile();

		const updatedListings = [...listings, listing];
		//escribe el array viejo mas la nueva info.

		this.writeFile(updatedListings);
		return listing;
	},
	findByPk(id) {
		const boats = this.readFile();

		const reqBoat = boats.find((boat) => boat.id == id);

		return reqBoat;
	},
	generateId() {
		const boats = this.readFile();
		const lastBoat = boats.pop();

		return lastBoat.id + 1;
	},
	findAll () {
		const boats=this.readFile()
		return boats
	},
	
	delete (id){
//notar que aca recibo el id del req.params.id del controlador pues ese fue su trabajo
//ahora le toca al modelo efectivamemnte eliminar, hay que implementar logica.
//primero leo la "base de datos" como siempre
		const boats= this.readFile();

		//genero el nuevo array SIN el objetivo a eliminar

		const boatsNew= boats.filter(boat=> boat.id!= id)

		this.writeFile(boatsNew)
	},

	update (data, id){
		const boats= this.readFile();

		const boatsNew = boats.map(boat =>{
		if(boat.id == id){
			boat= {
				id: boat.id,
				...data
			}
		}
		return boat;
		});
		this.writeFile(boatsNew);
	},
};
