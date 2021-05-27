const express = require("express");
const app = express();

const path = require("path");

const checkoutRoutes = require("./routes/checkoutRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.static(path.resolve(__dirname, "./public")));

app.set("view engine", "ejs");

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

app.use("/checkout", checkoutRoutes);

app.use("/user", userRoutes);

app.get("/logreg", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/loginregister.html"));
});
