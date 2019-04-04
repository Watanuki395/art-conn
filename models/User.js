const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    // getting avatar using gravatar
    avatar: {
        type: String,
        require: false
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = User = mongoose.model('users', UserSchema);