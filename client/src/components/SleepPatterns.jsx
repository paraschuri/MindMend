import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function SleepPatterns() {
  const [hoursSlept, setHoursSlept] = useState('');
  const [quality, setQuality] = useState('Good');
  const [entries, setEntries] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(`https://mindmend.onrender.com/api/user-data/${user._id}`);
      setEntries(response.data.sleepPatterns || []);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hoursSlept) {
      const newEntry = { hoursSlept, quality, date: new Date() };
      try {
        const response = await axios.post(`https://mindmend.onrender.com/api/user-data/${user._id}/sleep`, newEntry);
        setEntries(response.data.sleepPatterns);
        setHoursSlept('');
        setQuality('Good');
      } catch (error) {
        console.error('Error adding entry:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Sleep Patterns</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block mb-2 text-gray-300">How many hours did you sleep?</label>
          <input
            type="number"
            value={hoursSlept}
            onChange={(e) => setHoursSlept(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            min="0"
          />
          <label className="block mb-2 text-gray-300">Sleep Quality:</label>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
          >
            <option>Good</option>
            <option>Average</option>
            <option>Poor</option>
          </select>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Save Sleep Data
          </button>
        </form>
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Sleep Entries</h3>
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-400">{new Date(entry.date).toLocaleDateString()} - </span>
              <span className="text-gray-200">{entry.hoursSlept} hours, {entry.quality} quality</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SleepPatterns;