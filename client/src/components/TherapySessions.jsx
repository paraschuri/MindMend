import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function TherapySessions() {
  const [sessionNotes, setSessionNotes] = useState('');
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await axios.get(`https://mindmend.onrender.com/api/user-data/${user._id}`);
      setSessions(response.data.therapySessions || []);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sessionNotes.trim()) {
      setError('Session notes cannot be empty.');
      return;
    }
    setError('');
    const newSession = { sessionNotes, date: new Date() };
    try {
      const response = await axios.post(`https://mindmend.onrender.com/api/user-data/${user._id}/therapy`, newSession);
      setSessions(response.data.therapySessions);
      setSessionNotes('');
    } catch (error) {
      console.error('Error adding session:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Therapy Sessions</h2>
        <form onSubmit={handleSubmit} className="mb-6">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label className="block mb-2 text-gray-300">Session Notes:</label>
          <textarea
            value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
            rows="5"
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Save Session
          </button>
        </form>
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">Past Sessions</h3>
        <ul>
          {sessions.map((session, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-400">{new Date(session.date).toLocaleDateString()} - </span>
              <span className="text-gray-200">{session.sessionNotes}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TherapySessions;