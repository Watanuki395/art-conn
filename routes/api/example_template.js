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



module.exports = router;