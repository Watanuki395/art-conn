const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post Model
const Post = require('../../models/Post');
// Profile Model
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/post');

// @route GET api/post/test
// @desc Test post route
// @access Public
router.get('/test', (req, res) => res.json({
    msg:"posts works"
}));

// @route GET api/post
// @desc GET post 
// @access Public

router.get('/', 
(req, res) => {
    Post.find()
    .sort({date: -1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404)
    .json({nopostfound: 'No posts found with that ID'}));
});

// @route GET api/post/:id
// @desc GET post by ID
// @access Public

router.get('/:id', 
(req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404)
    .json({nopostfound: 'No post found with that ID'}));
});



// @route POST api/post
// @desc create post 
// @access Private

router.post('/', 
passport.authenticate('jwt', 
{session: false}), 
(req, res) => {
    const {errors, isValid} = validatePostInput(req.body);

    // Check Validation
    if(!isValid){
        // If any error, send 400 with error object
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id,

    });
    newPost.save()
    .then(post => res.json(post));
});

// @route DELETE api/post/:id
// @desc Delete Post
// @access Private

router.delete('/:id', 
passport.authenticate('jwt', 
{ session: false}), 
(req,res) => {

    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findOne(req.params.id)
        .then(post => {
            // Check for post owner
            if(post.user.toString() !== req.user.id) {
                return res.status(401).json({ notauthorized: 'User not authorized'});
            }
            // Delete
            post.remove().then(()=> res.json({ success: true}));
        })
        .catch(err => res.status(404).json({postnotfound: 'No post found'}));
    })
});

// @route POST api/post/like/:id
// @desc create Like
// @access Private

router.post('/like/:id', 
passport.authenticate('jwt', 
{ session: false}), 
(req,res) => {

    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findOne(req.params.id)
        .then(post => {
            if(post.likes.filter(like => like.user.toString()===req.user.id).length > 0){
                return res.status(400).json({alreadyliked: 'User already liked this post'});
            }
            // add user id to likes array
            post.likes.unshift({ user: req.user.id});
            post.save()
            .then(post => res.json(post));
        })
        .catch(err => res.status(404).json({postnotfound: 'No post found'}));
    })
});

// @route POST api/post/unlike/:id
// @desc create un-Like
// @access Private

router.post('/unlike/:id', 
passport.authenticate('jwt', 
{ session: false}), 
(req,res) => {

    Profile.findOne({ user: req.user.id })
    .then(profile => {
        Post.findOne(req.params.id)
        .then(post => {
            if(post.likes.filter(like => like.user.toString()===req.user.id).length === 0){
                return res
                .status(400)
                .json({alreadyliked: 'You have not yet liked this post'});
            }
            // Get the remove index
            const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

            // Splice out the array
            post.likes.splice(removeIndex, 1);

            // Save
            post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({postnotfound: 'No post found'}));
    })
});


// @route POST api/post/comment/:id
// @desc create comment
// @access Private

router.post('/comment/:id', 
passport.authenticate('jwt', 
{ session: false}), 
(req,res) => {
    const {errors, isValid} = validatePostInput(req.body);

    // Check Validation
    if(!isValid){
        // If any error, send 400 with error object
        return res.status(400).json(errors);
    }

    Post.findById(req.params.id)
    .then(post => {
        const newComment = {
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar,
            user: req.user.id
        }

        // Add to comments array
        post.comments.unshift(newComment);
        
        // Save
        post.save().then(post => res.json(post))
    })
    .catch(err => res.status(404).json({postnotfound: 'No post found'}));
});

// @route DELETE api/post/comment/:id/:comment_id
// @desc create comment
// @access Private

router.delete('/comment/:id', 
passport.authenticate('jwt', 
{ session: false}), 
(req,res) => {
    Post.findById(req.params.id)
    .then(post => {
        // check if the comment exists
        if(post.comments
            .filter(comment => comment._id.toString() === req.params.comment_id)
            .length === 0){
                return res.status(404).json({ commentnotexists: 'Comment does not exist'});
        }

        // Get the remove index
        const removeIndex = post.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

        // Splice out the array
        post.comments.splice(removeIndex, 1);

        // Save
        post.save().then(post => res.json(post));
        
    })
    .catch(err => res.status(404).json({postnotfound: 'No post found'}));
});

module.exports = router;