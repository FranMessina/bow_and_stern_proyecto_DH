const usersModel = require("../models/usersModel");
const {body} = require('express-validator');

const validationRegister = [
    body('firstName') 
        .notEmpty()
        .withMessage('Complete your first name'),

    body('lastName') 
        .notEmpty()
        .withMessage('Complete your last name'),
    
    body('email') 
        .notEmpty()
        .withMessage('Complete your email')
        .bail()
        .isEmail()
        .withMessage('Please enter a valid email'),

    body('pass') 
        .notEmpty()
        .withMessage('Complete your password'),

    body('passConfirm') 
        .notEmpty()
        .withMessage('Please confirm your password')
        .bail()
        .custom((passConfirm, {req}) => {
            let pass = req.body.pass

            if (pass == passConfirm) {return true}
            return false 
            
        })
        .withMessage('Both passwords must be the same'),
];

module.exports = validationRegister;