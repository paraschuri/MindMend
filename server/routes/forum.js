const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a new post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  console.log(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Like a post
router.patch('/:id/like', async (req, res) => {
  const { user } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likedBy.includes(user)) {
      post.likes += 1;
      post.likedBy.push(user);
      const updatedPost = await post.save();
      res.json(updatedPost);
    } else {
      res.status(400).json({ message: 'User has already liked this post' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Comment on a post
router.post('/:id/comment', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;