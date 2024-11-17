const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoute = require('./routes/auth');
const chatbotRoute = require('./routes/chatbot');
const forumRoutes = require('./routes/forum');
const userDataRoutes = require('./routes/userData');

app.use('/api/auth', authRoute);
app.use('/api/chatbot', chatbotRoute); 
app.use('/api/forum', forumRoutes);
app.use('/api/user-data', userDataRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

// Call the async function to connect to the database
connectDB();