const express = require('express');
const path = require('path');
const userRoutes = express.Router();
const userController = require('../controllers/userController');
const validationRegister = require('../middlewares/validationRegister');

userRoutes.get('/login', userController.login);

/* Formulario de registro */
userRoutes.get('/register', userController.register);

/* Procesar el registro */
userRoutes.post('/create', validationRegister, userController.create);

userRoutes.get('/logreg', userController.logreg);

module.exports = userRoutes;
