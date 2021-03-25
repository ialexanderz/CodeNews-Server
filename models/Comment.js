// require mongoose
const mongoose = require("mongoose");


// create the schema


const CommentSchema = new mongoose.Schema({
  post_id: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comments'
  },
  comment_content: {
    type: String,
  },
  comment_upvote: {
    type: Number,
  },
});

// export the model
// export the model
const Comment = mongoose.model("comments", CommentSchema);

module.exports = {Comment, CommentSchema}