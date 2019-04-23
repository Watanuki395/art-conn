const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


// @route GET api/post/test
// @desc Test post route
// @access Public
router.get('/test', (req, res) => res.json({
    msg:"posts works"
}));

// @route GET api/post/test
// @desc Test post route
// @access Public
router.post('/test', 
passport.authenticate('jwt', 
{ session: false}), 
(req,res) => {
    res.json('code goes here')
});




module.exports = router;