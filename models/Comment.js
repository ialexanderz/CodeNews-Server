// require mongoose
const mongoose = require("mongoose");



//sub schema for comments
const CommentSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  content: {
    type: String,
  },
  
  comment_upvote: {
    type: Number,
  },
});

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = {Comment, CommentSchema}
