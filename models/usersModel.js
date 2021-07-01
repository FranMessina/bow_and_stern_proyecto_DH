const fs = require('fs');
const path = require('path');

module.exports = {
	filename: path.resolve(__dirname, '../database/users.json'),
	readFile() {
		const users = fs.readFileSync(this.filename, 'utf-8');

		return JSON.parse(users);
	},
	writeFile(updatedUser) {
		// Pasa data a Json
		const userJson = JSON.stringify(updatedUser, null, 2);
		// Escribe archivo
		fs.writeFileSync(this.filename, userJson);
	},

	generateId() {
		const users = this.readFile();
		const lastUser = users.pop();

		return lastUser.id + 1;
	},

	findByField(field, text) {
		const users = this.readFile();
		const userFound = users.find((user) => user[field] === text);
		return userFound;
	},

	//findAll () {
	//	const users=this.readFile()
	//	return users

	findByPk(id) {
		const users = this.readFile();
		// filtra por id de user
		const userfound = users.find((user) => user.id == id);
		// devuelve user
		return userfound;
	},

	create(user) {
		user.id = this.generateId();

		const users = this.readFile();

		const updatedUsers = [...users, user];
		//escribe el array viejo mas la nueva info.

		this.writeFile(updatedUsers);
		return user;
	},
};
