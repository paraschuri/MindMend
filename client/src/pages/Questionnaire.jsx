import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function Questionnaire() {
  // PHQ-9 Questions
  const questions = [
    {
      id: 1,
      type: 'multipleChoice',
      question: `Over the last 2 weeks, how often have you been bothered by any of the following problems?1. Little interest or pleasure in doing things.`,
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
    {
      id: 2,
      type: 'multipleChoice',
      question: "2. Feeling down, depressed, or hopeless.",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
    {
      id: 3,
      type: 'multipleChoice',
      question: "3. Trouble falling or staying asleep, or sleeping too much.",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
    {
      id: 4,
      type: 'multipleChoice',
      question: "4. Feeling tired or having little energy.",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
    {
      id: 5,
      type: 'multipleChoice',
      question: "5. Poor appetite or overeating.",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
    {
      id: 6,
      type: 'multipleChoice',
      question: "6. Feeling bad about yourself—or that you are a failure or have let yourself or your family down.",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
    {
      id: 7,
      type: 'multipleChoice',
      question: "7. Trouble concentrating on things, such as reading the newspaper or watching television.",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
    {
      id: 8,
      type: 'multipleChoice',
      question: "8. Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual.",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
    {
      id: 9,
      type: 'multipleChoice',
      question: "9. Thoughts that you would be better off dead or of hurting yourself in some way.",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
      optionScores: { "Not at all": 0, "Several days": 1, "More than half the days": 2, "Nearly every day": 3 },
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState(null);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
    else classifyResponse();
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleOptionSelect = (option) => {
    setResponses({ ...responses, [currentQuestion]: option });
  };

  const classifyResponse = () => {
    let score = 0;

    questions.forEach((question, index) => {
      const response = responses[index];
      if (question.type === 'multipleChoice' && question.optionScores) {
        const responseScore = question.optionScores[response] || 0;
        score += responseScore;
      }
    });

    let classification = '';

    if (score <= 4) classification = 'Minimal Depression';
    else if (score <= 9) classification = 'Mild Depression';
    else if (score <= 14) classification = 'Moderate Depression';
    else if (score <= 19) classification = 'Moderately Severe Depression';
    else classification = 'Severe Depression';

    setResult({ score, classification });
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-8 text-gray-300">
      <div className="w-full max-w-2xl px-6">
        {/* Progress Indicator */}
        {!result && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-medium text-gray-300">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <span className="text-sm text-gray-400">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% completed
              </span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold mb-4 text-blue-400">
                Your PHQ-9 Score: {result.score}
              </h2>
              <p className="text-xl font-semibold mb-4 text-gray-200">{result.classification}</p>

              {/* Data Visualization */}
              <div className="my-6">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={[{ name: 'Your Score', Score: result.score }]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis domain={[0, 27]} stroke="#ccc" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                      itemStyle={{ color: '#fff' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="Score" fill="#4F46E5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Detailed Feedback */}
              <p className="text-gray-300 leading-relaxed">
                {(() => {
                  const feedbacks = {
                    'Minimal Depression':
                      'Your score suggests minimal or no signs of depression. Continue maintaining a healthy lifestyle and monitor your well-being.',
                    'Mild Depression':
                      'Your score indicates mild symptoms of depression. Consider monitoring your mood and engaging in activities that you enjoy.',
                    'Moderate Depression':
                      'Your score reflects moderate symptoms of depression. It might be helpful to speak with a mental health professional.',
                    'Moderately Severe Depression':
                      'Your score suggests moderately severe depression. Reaching out to a healthcare provider is recommended.',
                    'Severe Depression':
                      'Your score indicates severe depression. It is important to seek support from a mental health professional as soon as possible.',
                  };
                  return feedbacks[result.classification] || '';
                })()}
              </p>

              {/* Resources */}
              <div className="mt-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">
                  Recommended Resources:
                </h3>
                {(() => {
                  const resources = {
                    // (resources remain the same)
                  };
                  return resources[result.classification]?.map((resource, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-gray-300">{resource.text}</p>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        Learn more
                      </a>
                    </div>
                  ));
                })()}
              </div>

              {/* Disclaimer */}
              <p className="text-gray-500 mt-6 text-sm">
                Note: This assessment is not a diagnosis. Please consult a healthcare professional for a comprehensive evaluation.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 w-full p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-200">
                {currentQ.question}
              </h3>

              {currentQ.type === 'multipleChoice' && (
                <div className="grid grid-cols-1 gap-4">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full py-3 px-4 rounded-lg transition duration-200 text-left font-medium focus:outline-none
                        ${
                          responses[currentQuestion] === option
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50 transition"
                >
                  <FaArrowLeft className="mr-2" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={!responses.hasOwnProperty(currentQuestion)}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition"
                >
                  {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Questionnaire;