// require mongoose
const mongoose = require("mongoose");


//sub schema for comments
const CommentSchema = new mongoose.Schema({
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

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = {Comment, CommentSchema}
