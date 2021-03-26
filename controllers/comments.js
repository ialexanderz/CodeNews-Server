const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const {Post} = require('../models/Post.js')


router.post('/', async (req, res) => {
    const newComment = await Comment.create({
        comment_content: req.body.comment_content
    })
    res.json(newComment)
})


router.get('/', async (req, res) => {
    try {
        const comment = await Comment.find({})
        console.log(comment)
        res.json( { comment })
    } catch (err) {
        res.json({err})
        console.log(err)
    }
})



module.exports = router;
