const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const {Post} = require('../models/Post.js')


// Create 
router.post('/', async (req, res) => {
    const newPost = await Post.create({
        post_content: req.body.post_content
    })
        await newPost.save()
    res.json(newPost)
})

// Read (Show)
router.get('/:id', async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id)
        console.log(foundPost)
        if(foundPost) {
            res.json(foundPost)
        }
    } catch (err) {
        res.json({
            msg: 'Nothing to show Sorry'
        })
    }
})



 // Update
router.put('/:postId/comments/:commentId', async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
        post_content: req.body.post_content
    })
    res.json(updatedPost)
})

// Delete
router.delete('/:postId/comments/:commentId', async (req, res) => {
    const deletedPost = await Post.findByIdAndDelete(req.params.id)
    res.json(deletedPost)
})


module.exports = router