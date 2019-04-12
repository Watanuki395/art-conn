const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data){
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : '';

        // Check if the email is empty
    if(!Validator.isLength(data.text, {min: 10, max: 300})) {
        errors.email = 'Post must be between 10 and 300 characters';
    }

    if(Validator.isEmpty(data.text)) {
        errors.email = 'Text field is required';
    }

    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}