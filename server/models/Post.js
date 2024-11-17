const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const PostSchema = new mongoose.Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: [{ type: String }],
  comments: [CommentSchema],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);