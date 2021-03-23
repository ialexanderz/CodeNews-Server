const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const Comment = require('../models/Comment.js')


// // GET /users -- test endpoint
// router.get('/comments', (req, res) => {
//     res.json({ msg: 'hello from users!' })
// })




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


// // New  Form Route
// router.get('/new', (req, res) => {
//     res.render("comments/new")
// })




module.exports = router;
