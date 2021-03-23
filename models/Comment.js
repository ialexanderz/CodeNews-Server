// require mongoose
const mongoose = require("mongoose");


// create the schema
const CommentSchema = new mongoose.Schema({
  post_id: {
    type: Number,
  },
  user_id: {
    type: Number,
  },
  comment_content: {
    type: String,
  },
  comment_upvote: {
    type: Number,
  },
});

// export the model
module.exports = Comment = mongoose.model("comments", CommentSchema);