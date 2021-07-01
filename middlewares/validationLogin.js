const usersModel = require("../models/usersModel");
const {body} = require('express-validator');

const validationLogin = [
    body('email') 
         .notEmpty()
         .withMessage('Complete your email')
         .bail()
         .isEmail()
         .withMessage('Please enter a valid email'),

    body('pass')
        .notEmpty()
        .withMessage('Complete your password')
        .bail()
        .custom((value, {req}) => {
            const {email,pass} =req.body

            const userFound = usersModel.findByField('email', email)

            if (userFound) {
                if (pass===userFound.pass) {
                    return true
                }
            } return false
        }) 
        .withMessage('The email or the password are incorrect'),

];

module.exports = validationLogin;