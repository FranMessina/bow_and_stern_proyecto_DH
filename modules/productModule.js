const fs = require('fs');
const path = require('path');

module.exports = {
	filename: path.resolve(__dirname, '../database/listings.json'),
	readFile() {
		const listings = fs.readFileSync(this.filename, 'utf-8');

		return JSON.parse(listings);
	},
	writeFile(newListing) {
		const listingJson = JSON.stringify(newListing, null, 2);

		fs.writeFileSync(this.filename, listingJson);
	},
	create(listing) {
		listing.id = this.generateId();

		const listings = this.readFile();

		const updatedListings = [...listings, listing];

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
};
