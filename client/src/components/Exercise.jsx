import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function Exercise() {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [entries, setEntries] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(`/api/user-data/${user._id}`);
      setEntries(response.data.exercises || []);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (exercise && duration) {
      const newEntry = { exercise, duration, date: new Date() };
      try {
        const response = await axios.post(`/api/user-data/${user._id}/exercise`, newEntry);
        setEntries(response.data.exercises);
        setExercise('');
        setDuration('');
      } catch (error) {
        console.error('Error adding entry:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Exercise</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block mb-2 text-gray-300">Exercise Performed:</label>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            placeholder="Enter exercise"
          />
          <label className="block mb-2 text-gray-300">Duration (minutes):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            placeholder="Enter duration"
          />
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Save Exercise
          </button>
        </form>
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Exercise Entries</h3>
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-400">{new Date(entry.date).toLocaleDateString()} - </span>
              <span className="text-gray-200">{entry.exercise} for {entry.duration} minutes</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Exercise;