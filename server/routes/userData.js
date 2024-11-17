const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData');

// Get user data
router.get('/:userId', async (req, res) => {
  try {
    const userData = await UserData.findOne({ userId: req.params.userId });
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add mood entry
router.post('/:userId/mood', async (req, res) => {
  try {
    const userData = await UserData.findOneAndUpdate(
      { userId: req.params.userId },
      { $push: { moodEntries: req.body } },
      { new: true, upsert: true }
    );
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add activity log
router.post('/:userId/activity', async (req, res) => {
  try {
    const userData = await UserData.findOneAndUpdate(
      { userId: req.params.userId },
      { $push: { activityLogs: req.body } },
      { new: true, upsert: true }
    );
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add stress level
router.post('/:userId/stress', async (req, res) => {
  try {
    const userData = await UserData.findOneAndUpdate(
      { userId: req.params.userId },
      { $push: { stressLevels: req.body } },
      { new: true, upsert: true }
    );
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add sleep pattern
router.post('/:userId/sleep', async (req, res) => {
  try {
    const userData = await UserData.findOneAndUpdate(
      { userId: req.params.userId },
      { $push: { sleepPatterns: req.body } },
      { new: true, upsert: true }
    );
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add therapy session
router.post('/:userId/therapy', async (req, res) => {
  try {
    const userData = await UserData.findOneAndUpdate(
      { userId: req.params.userId },
      { $push: { therapySessions: req.body } },
      { new: true, upsert: true }
    );
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add diet nutrition
router.post('/:userId/diet', async (req, res) => {
  try {
    const userData = await UserData.findOneAndUpdate(
      { userId: req.params.userId },
      { $push: { dietNutrition: req.body } },
      { new: true, upsert: true }
    );
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add exercise
router.post('/:userId/exercise', async (req, res) => {
  try {
    const userData = await UserData.findOneAndUpdate(
      { userId: req.params.userId },
      { $push: { exercises: req.body } },
      { new: true, upsert: true }
    );
    res.status(201).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;