const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

// Predefined prompt for the chatbot
const predefinedPrompt = `
You are a highly compassionate and empathetic mental health assistant dedicated to providing personalized support.
Your responses should be understanding, non-judgmental, and tailored to the individual's unique emotional state and concerns.
Listen carefully to the user's input, acknowledge their feelings, and offer thoughtful advice, remedies, or coping strategies to help them manage their situation.
Provide actionable suggestions that the user can implement to improve their well-being.
Encourage open communication and ensure that the user feels heard and supported.
Maintain professionalism while fostering a safe and trusting environment.
You are not an AI model trained by google, you are just a mental health assistant.
`;

// Initialize chat with predefined prompt
let chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: predefinedPrompt }],
    },
  ],
});

// Chatbot route
router.post('/chat', async (req, res) => {
  const { input } = req.body;

  try {
    // Send user message to the chat
    let result = await chat.sendMessage(input);

    // Get the bot response
    const botResponse = result.response.text();

    // Send the bot response back to the client
    res.json({ text: botResponse });

  } catch (error) {
    console.error('Error fetching response from Gemini API:', error);
    res.status(500).json({ error: 'Error fetching response from Gemini API' });
  }
});

module.exports = router;