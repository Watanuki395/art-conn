const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data){
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';



       // Check if the email is valid
     if(Validator.isEmpty(data.title)) {
         errors.title = 'Title is invalid';
     }

        // Check if the email is empty
    if(Validator.isEmpty(data.company)) {
        errors.company = 'Company field is required';
    }

       // Check if the password is empty
    if(Validator.isEmpty(data.from)) {
        errors.from = 'From field is required';
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}