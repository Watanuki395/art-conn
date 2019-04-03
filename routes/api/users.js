const express = require('express');
const router = express.Router();

// Load User Model
const User = require('../../models/User');

// @route GET api/users/test
// @desc Test users route
// @access Public

router.get('/test', (req, res) => res.json({
    msg:"users works"
}));
// @route GET api/users/test
// @desc Regisger a user
// @access Public

router.post('/register', (req, res)=>{
 User.findOne({email: req.body.email})
 .then(user => {
     if(user){
         return res.status(400).json({email: 'Email already exist'});
     } else {
         const newUser = new User({
             name: req.body.name,
             email: req.body.email,
             avatar,
             password: req.body.password

         });
     }
 })
});


module.exports = router;