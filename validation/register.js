const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';



        // Check if the name length is correct
    if(!Validator.isLength(data.name,{min: 2, max: 30})){
        errors.name = 'Name must be between 2 and 30 characters';
    }
        // Check if the name is empty
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }
        // Check if the email is empty
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }
        // Check if the email is valid
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

       // Check if the password is empty
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

        // Check if the password length is correct
    if(!Validator.isLength(data.password,{min: 6, max: 30})){
        errors.password = 'Password must be between 6 and 30 characters';
    }
       // Check if the password2 is empty
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
    }

      // Check if the passwords match
    if(!Validator.equals(data.password, data.password2)) {
     errors.password2 = 'Passwords must match';
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}