import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Questionnaire() {
  const questions = [
    {
      id: 1,
      type: 'multipleChoice',
      question: "How often do you feel anxious or stressed?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      id: 2,
      type: 'multipleChoice',
      question: "Do you have trouble sleeping or experience disturbed sleep?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      id: 3,
      type: 'multipleChoice',
      question: "Imagine you have a tight deadline at work or school. How do you typically feel?",
      options: ["Calm and focused", "Mildly stressed", "Very anxious", "Overwhelmed", "Avoiding tasks"],
    },
    {
      id: 4,
      type: 'textResponse',
      question: "Describe a recent experience where you felt genuinely happy or content. What was the situation?",
    },
    {
      id: 5,
      type: 'slider',
      question: "On a scale of 1 to 10, how would you rate your overall mood in the past week?",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [sliderValue, setSliderValue] = useState(5);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleOptionSelect = (option) => {
    setResponses({ ...responses, [currentQuestion]: option });
  };

  const handleTextResponse = (event) => {
    setResponses({ ...responses, [currentQuestion]: event.target.value });
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setResponses({ ...responses, [currentQuestion]: value });
  };

  const currentQ = questions[currentQuestion];
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Mental Health Questionnaire</h1>

      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{currentQ.question}</h2>

        {currentQ.type === 'multipleChoice' && (
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`py-2 px-4 rounded-lg transition duration-200 
                  ${responses[currentQuestion] === option ? 'bg-blue-100 border-blue-500' : 'border-gray-200'} border hover:bg-blue-50`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {currentQ.type === 'textResponse' && (
          <textarea
            onChange={handleTextResponse}
            value={responses[currentQuestion] || ''}
            className="w-full bg-gray-50 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 mt-3"
            placeholder="Type your response here..."
          />
        )}

        {currentQ.type === 'slider' && (
          <div className="mt-4">
            <input
              type="range"
              min="1"
              max="10"
              value={sliderValue}
              onChange={(e) => handleSliderChange(e.target.value)}
              className="w-full accent-blue-600"
            />
            <div className="text-center text-blue-600 mt-2 font-semibold">
              <span>Mood Rating: {sliderValue}</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center w-full max-w-lg mt-6">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="flex items-center text-gray-600 hover:text-blue-600 transition disabled:opacity-50"
        >
          <FaArrowLeft className="mr-1" />
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!responses.hasOwnProperty(currentQuestion)}
          className="flex items-center text-gray-600 hover:text-blue-600 transition disabled:opacity-50"
        >
          Next
          <FaArrowRight className="ml-1" />
        </button>
      </div>

      {currentQuestion === questions.length - 1 && Object.keys(responses).length === questions.length && (
        <button className="mt-8 bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
          Submit
        </button>
      )}
    </div>
  );
}

export default Questionnaire;
