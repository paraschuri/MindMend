const mongoose = require('mongoose');

const MoodEntrySchema = new mongoose.Schema({
  mood: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const ActivityLogSchema = new mongoose.Schema({
  activity: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const StressLevelSchema = new mongoose.Schema({
  stressLevel: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const SleepPatternSchema = new mongoose.Schema({
  hoursSlept: { type: Number, required: true },
  quality: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const TherapySessionSchema = new mongoose.Schema({
  sessionNotes: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const DietNutritionSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const ExerciseSchema = new mongoose.Schema({
  exercise: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const UserDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  moodEntries: [MoodEntrySchema],
  activityLogs: [ActivityLogSchema],
  stressLevels: [StressLevelSchema],
  sleepPatterns: [SleepPatternSchema],
  therapySessions: [TherapySessionSchema],
  dietNutrition: [DietNutritionSchema],
  exercises: [ExerciseSchema]
});

module.exports = mongoose.model('UserData', UserDataSchema);