const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


// @route GET api/upload
// @desc Upload img to the server
// @access Private
router.get('/upload', (req, res) => res.json({
    msg:"upload works"
}));

// @route GET api/post/test
// @desc Test post route
// @access Public
router.post('/test2', 
passport.authenticate('jwt', 
{ session: false}), 
(req,res) => {
    res.json('code goes here')
});





module.exports = router;