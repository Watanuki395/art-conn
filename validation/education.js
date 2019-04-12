const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data){
    let errors = {};

    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
    data.from = !isEmpty(data.from) ? data.from : '';



       // Check if the email is valid
     if(Validator.isEmpty(data.school)) {
         errors.school = 'School field is required';
     }

        // Check if the email is empty
    if(Validator.isEmpty(data.degree)) {
        errors.degree = 'Degree field is required';
    }

       // Check if the password is empty
    if(Validator.isEmpty(data.fieldofstudy)) {
        errors.fieldofstudy = 'Field of Study field is required';
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