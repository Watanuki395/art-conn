const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';



       // Check if the email is valid
     if(!Validator.isEmail(data.email)) {
         errors.email = 'Email is invalid';
     }

        // Check if the email is empty
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

       // Check if the password is empty
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}