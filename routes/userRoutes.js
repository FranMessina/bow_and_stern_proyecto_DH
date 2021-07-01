const express = require('express');
const path = require('path');
const userRoutes = express.Router();
const userController = require('../controllers/userController');
const validationRegister = require('../middlewares/validationRegister');
const validationLogin = require('../middlewares/validationLogin');

userRoutes.get('/login', userController.login);
userRoutes.post('/login', validationLogin, userController.processLogin);

/* Formulario de registro */
userRoutes.get('/register', userController.register);

/* Procesar el registro */
userRoutes.post('/create', validationRegister, userController.create);

userRoutes.get('/logreg', userController.logreg);

userRoutes.get('/profile', userController.profile);

module.exports = userRoutes;
