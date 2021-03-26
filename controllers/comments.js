const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const { Comment } = require("../models/Comment.js");

router.post("/", async (req, res) => {
  const newComment = await Comment.create({
    comment_content: req.body.comment_content,
  });
  await newComment.save();
  res.json(newComment);
});

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

module.exports = router;
