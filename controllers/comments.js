const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const Comment = require('../models/Comment.js')


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


router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create({})
        console.log(comment)
        res.json( { comment })
    } catch (err) {
        res.json({err})
        console.log(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const comment = await Comment.updateOne({})
        console.log(comment)
        res.json( { comment })
    } catch (err) {
        res.json({err})
        console.log(err)
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.deleteOne({})
        console.log(comment)
        res.json( { comment })
    } catch (err) {
        res.json({err})
        console.log(err)
    }
})


module.exports = router;
