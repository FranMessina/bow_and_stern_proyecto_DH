const express = require('express');
const path = require('path');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

userRoutes.get('/login', userController.login);

/* Formulario de registro */
userRoutes.get('/register', userController.register);

/* Procesar el registro */
userRoutes.post('/create', userController.create);

userRoutes.get('/logreg', userController.logreg);

module.exports = userRoutes;
