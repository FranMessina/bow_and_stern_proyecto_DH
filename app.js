const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(3000, () => {
	console.log("Servidor Corriendo en puerto 3000");
});

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/login", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/productDetail", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

app.get("/header", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/header-suelto.html"));
});

app.get("/summary", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/summary.html"));
});

app.get("/selectdate", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/selectdate.html"));
});

app.get("/groupSize", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/groupSize.html"));
});

app.get("/foodPackage", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/foodPackage.html"));
});

app.get("/experiencePackage", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/experiencePackage.html"));
});

app.get("/confirmation", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/confirmation.html"));
});

app.get("/logreg", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/loginregister.html"));
});
