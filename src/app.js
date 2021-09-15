const express = require('express');
const app = express();
const db = require("./database/models");

const path = require('path');
const methodOverride = require('method-override');

const checkoutRoutes = require('./routes/checkoutRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes =  require('./routes/productRoutes');
//api
const userApiRoutes = require('./routes/api/userApiRoutes');
const boatApiRoutes = require('./routes/api/boatApiRoutes');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionToLocals = require('./middlewares/sessionToLocals');
const cookieSession = require('./middlewares/cookieSession');

app.use(session({ 
	secret: 'shh',
	resave: false,
	saveUninitialized: false	
}));

app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(cookieSession);
app.use(sessionToLocals);

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(process.env.PORT || 3000, (req, res) => {
	console.log('Servidor corriendo en puerto 3000');
});

//app.get('/', (req, res) => {
//	res.render('index');
	
app.get('/', async function (req, res) {
		const boats= await db.Boat.findAll()
		res.render("index", {boats})
	}
	);
	
//});

app.get('/header', (req, res) => {
	res.render('header-suelto');
});

app.use('/checkout', checkoutRoutes);

app.use('/user', userRoutes);

app.use('/products', productRoutes);

app.use('/api/user', userApiRoutes);
app.use('/api/boat', boatApiRoutes);

app.use((req, res, next) => {
	res.status(404).render('not-found');
});


