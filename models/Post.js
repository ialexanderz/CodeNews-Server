// require mongoose
const mongoose = require("mongoose");
const {CommentSchema} = require('./Comment.js')


// create the post schema
const PostSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
  },
  post_content: {
    type: String,
  },
  selectedFile: {
    type: String,
  },
  post_upvote: {
    type: Number,
    default: 0
  },
  comments:[CommentSchema]//Embedded subdocument one:Many relationship

});

const Post = mongoose.model('Post', PostSchema)



module.exports = {Post, PostSchema}


