import React, { useState } from 'react';

const MentalHealthCheck = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Response:", response);
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold text-indigo-600">Mental Health Check</h2>
        <label className="block mt-4 text-gray-700">
          How are you feeling today?
          <textarea
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
          />
        </label>
        <button type="submit" className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
          Submit
        </button>
      </form>
    </section>
  );
};

export default MentalHealthCheck;
