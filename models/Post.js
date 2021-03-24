// require mongoose
const { text } = require("express");
const mongoose = require("mongoose");


// create the schema
const PostSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  user_id: {
    type: Number,
  },
  post_content: {
    type: String,
  },
  post_upvote: {
    type: String,
  },
});

// export the model
module.exports = Post = mongoose.model("posts", PostSchema);
