const productModel = require ("../models/productModel");
const {body} = require('express-validator');

const newBoatValidation =[
    body ('name')
    .notEmpty()
    .withMessage('Include boat name'),

    body('year')
    .notEmpty()
    .withMessage('Include your boats manufacture year'),

    body('measures')
    .notEmpty()
    .withMessage('Include your boats feet'),
    
    body('vesselType')
    .notEmpty()
    .withMessage('Fill this input'),

]

module.exports = newBoatValidation;