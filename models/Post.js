// require mongoose
const { text } = require("express");
const mongoose = require("mongoose");
// const {CommentSchema} = require('./Comment.js')


//sub schema for comments
const commentSchema = new mongoose.Schema({
  post_id: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comments'
  },
  content: {
    type: String,
  },
  comment_upvote: {
    type: Number,
  },
});



// create the post schema
const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
  },
  post_content: {
    type: String,
  },
  post_upvote: {
    type: Number,
  },
  comments:[commentSchema]//Embedded subdocument one:Many relationship

});

const Post = mongoose.model('Post', postSchema)
const Comment = mongoose.model('Comment', commentSchema)


module.exports = {Post, postSchema}

