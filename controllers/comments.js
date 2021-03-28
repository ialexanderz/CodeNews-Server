const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const { Comment } = require("../models/Comment.js");
const { Post } = require("../models/Post.js");

// router.post("/", async (req, res) => {
//   const newComment = await Comment.create({
//     comment_content: req.body.comment_content,
//   });
//   await newComment.save();
//   res.json(newComment);
// });

router.get("/", async (req, res) => {
  try {
    const comment = await Comment.find();
    console.log(comment);
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).json({
        message: "nO cOmMeNt FoUNd 🧐",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
			msg: 'Aint anything here, partner. 👀'
		});
  }
});

router.post('/', async (req, res) => {
  try {
    const foundPost = await Post.findById(req.body.postId)
    console.log(foundPost)
    const newComment = new Comment({user: req.body.userId , content: req.body.content, comment_upvote: 0 })
    await newComment.save()
    foundPost.comments.push(newComment)
    await foundPost.save()
    res.json(newComment)


  } catch(error) {
    console.log(error)
  }

})

module.exports = router;
