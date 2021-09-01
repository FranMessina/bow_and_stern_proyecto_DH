const path = require("path");
const multer = require("multer");
const isFileImg = require("../helpers/isFileImg");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		let ruta = path.join(__dirname, "../../public/img");
		console.log(ruta);
		cb(null, ruta);
	},

	filename: function (req, file, cb) {
		let imageName = Date.now();
		let extension = path.extname(file.originalname);
		let newName = imageName + extension;
		console.log(newName);
		cb(null, newName);
	},
});

const fileFilter = (req, file, cb) => {
	if (!file) {
		cb(null, false);

		return;
	}
	if (!isFileImg(file.originalname)) {
		req.file = file;

		cb(null, false);

		return;
	}

	cb(null, true);
};
const upload = multer({ storage, fileFilter });
exports.upload = upload;
