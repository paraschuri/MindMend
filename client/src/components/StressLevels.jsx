import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function StressLevels() {
  const [stressLevel, setStressLevel] = useState(5);
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(`https://mindmend.onrender.com/api/user-data/${user._id}`);
      setEntries(response.data.stressLevels || []);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stressLevel || stressLevel < 1 || stressLevel > 10) {
      setError('Stress level must be between 1 and 10.');
      return;
    }
    setError('');
    const newEntry = { stressLevel, date: new Date() };
    try {
      const response = await axios.post(`https://mindmend.onrender.com/api/user-data/${user._id}/stress`, newEntry);
      setEntries(response.data.stressLevels);
      setStressLevel(5);
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Stress Levels</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label className="block mb-2 text-gray-300">Rate your stress level (1-10):</label>
          <input
            type="number"
            value={stressLevel}
            onChange={(e) => setStressLevel(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            min="1"
            max="10"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Save Stress Level
          </button>
        </form>
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Stress Level Entries</h3>
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-400">{new Date(entry.date).toLocaleDateString()} - </span>
              <span className="text-gray-200">Stress Level {entry.stressLevel}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StressLevels;