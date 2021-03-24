// require mongoose
const { text } = require("express");
const mongoose = require("mongoose");

const {CommentSchema} = require('./Comment.js')


// create the schema
const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comments'
  },
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  post_content: {
    type: String,
  },
  post_upvote: {
    type: String,
  },
  comments: [CommentSchema]
});

// export the model
const Post = mongoose.model("posts", PostSchema);

module.exports = {Post, PostSchema}
