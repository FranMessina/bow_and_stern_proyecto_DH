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
	res.render("index");
});

app.get("/productDetail", (req, res) => {
	res.render("productDetail");
});

app.get("/header", (req, res) => {
	res.render("header-suelto");
});

app.use("/checkout", checkoutRoutes);

app.use("/user", userRoutes);
