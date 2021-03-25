const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const {Comment} = require('../models/Comment.js')


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
    const newComment = await Comment.create({
        content: req.body.content
    })
    res.json(newComment)
})

router.put('/:id', async (req, res) => {
    const updateComment = await Comment.findByIdAndUpdate(req.params.id, {
        content: req.body.content
    })
    res.json(updateComment)
})


router.delete('/:id', async (req, res) => {
    const deleteComment = await Comment.findByIdAndDelete(req.params.id)
    res.json(deleteComment)
})

module.exports = router;











// // Read (Index)
// router.get('/', async (req, res) => {
    //     const allComment = await Comment.find({})
//     res.json(allComment)
// })


// Update
// router.put('/:id/comment_content', async (req, res) => {
//     try {
//         const comment = await Comment.updateOne({})
//         console.log(comment)
//         res.json( { comment })
//     } catch (err) {
//         res.json({err})
//         console.log(err)
//     }
// })


// router.delete('/:id/comment_content', async (req, res) => {
//     try {
//         const comment = await Comment.delete({})
//         console.log(comment)
//         res.json( { comment })
//     } catch (err) {
//         res.json({err})
//         console.log(err)
//     }
// })
// Delete


