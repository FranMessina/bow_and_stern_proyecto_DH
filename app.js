const express = require('express');
const app = express();

const path = require('path');
const methodOverride = require('method-override');

const checkoutRoutes = require('./routes/checkoutRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('Servidor Corriendo en puerto 3000');
});

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/header', (req, res) => {
	res.render('header-suelto');
});

app.use('/checkout', checkoutRoutes);

app.use('/user', userRoutes);

app.use('/products', productRoutes);

app.use((req, res, next) => {
	res.status(404).render('not-found');
});
