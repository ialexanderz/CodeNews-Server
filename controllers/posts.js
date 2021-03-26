const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const { Post } = require("../models/Post.js");

// Create
router.post("/", async (req, res) => {
  const newPost = await Post.create({
    post_content: req.body.post_content,
  });
  await newPost.save();
  res.json(newPost);
});

// Read (Show)
router.get("/:id/", async (req, res) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    console.log(foundPost);
    if (foundPost) {
      res.json(foundPost);
    } else {
      res.status(404).json({
        message: "no post found",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      msg: "Nothing to show Sorry",
    });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    res.json(deletedPost);
  } catch (err) {
    console.log(err);
  }
});

// todo UPDATE

module.exports = router;
