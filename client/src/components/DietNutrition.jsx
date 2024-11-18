import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function DietNutrition() {
  const [foodItem, setFoodItem] = useState('');
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get(`https://mindmend.onrender.com/api/user-data/${user._id}`);
      setEntries(response.data.dietNutrition || []);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!foodItem.trim()) {
      setError('Food item cannot be empty.');
      return;
    }
    setError('');
    const newEntry = { foodItem, date: new Date() };
    try {
      const response = await axios.post(`https://mindmend.onrender.com/api/user-data/${user._id}/diet`, newEntry);
      setEntries(response.data.dietNutrition);
      setFoodItem('');
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Diet & Nutrition</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label className="block mb-2 text-gray-300">What did you eat?</label>
          <input
            type="text"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            placeholder="Enter food item"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Log Nutrition
          </button>
        </form>
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Nutrition Entries</h3>
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-400">{new Date(entry.date).toLocaleDateString()} - </span>
              <span className="text-gray-200">{entry.foodItem}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DietNutrition;