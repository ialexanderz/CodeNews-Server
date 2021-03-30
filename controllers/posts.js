const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const { Post } = require("../models/Post.js");



// Create 
router.post('/', async (req, res) => {
    const newPost = await Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        image: req.body.image
    })
        await newPost.save()
    res.json(newPost)
})

// router.get("/:userid", async (req, res) => {
//     try{
//         const foundUser = await 

//     }catch (err){
        
//     }
// })

// Read (Show)
router.get('/:id', async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params._id)
        console.log(foundPost)
        if(foundPost) {
            res.json(foundPost)
        }
    } catch (err) {
        console.log(err);
        // res.json({
        //     msg: 'No such a post found in our memory'
        // })
    }
})





// Read (Index)
router.get('/', async (req, res) => {
    const allPosts = await Post.find({})
    console.log(allPosts);
    res.json(allPosts)
})

// Update
router.put('/:id', async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
        post_content: req.body.post_content
    })
    res.json(updatedPost)

})

// Delete
router.delete('/:id', async (req, res) => {
    const deletedPost = await Post.findByIdAndDelete(req.params.id)
    res.json(deletedPost)
})

module.exports = router
