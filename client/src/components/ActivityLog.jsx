import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function ActivityLog() {
  const [activity, setActivity] = useState('');
  const [activities, setActivities] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await axios.get(`/api/user-data/${user._id}`);
      setActivities(response.data.activityLogs || []);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activity) {
      const newActivity = { activity, date: new Date() };
      try {
        const response = await axios.post(`/api/user-data/${user._id}/activity`, newActivity);
        setActivities(response.data.activityLogs);
        setActivity('');
      } catch (error) {
        console.error('Error adding activity:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Activity Log</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block mb-2 text-gray-300">What activity did you do?</label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            placeholder="Enter activity"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Save Activity
          </button>
        </form>
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Activity Entries</h3>
        <ul>
          {activities.map((entry, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-400">{new Date(entry.date).toLocaleDateString()} - </span>
              <span className="text-gray-200">{entry.activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActivityLog;