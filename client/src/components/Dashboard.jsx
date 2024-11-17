import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSmile,
  FaWalking,
  FaHeart,
  FaBed,
  FaBrain,
  FaBook,
  FaLeaf,
  FaUtensils,
  FaDumbbell,
} from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';

function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div className="dashboard-container bg-gray-900 min-h-screen text-gray-300 p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-400">
          Welcome {user.name} to your Dashboard
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Track, reflect, and improve your mental well-being with detailed insights.
        </p>
      </header>

      {/* Dashboard Sections */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {/* Mood Tracker */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaSmile className="text-blue-500 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Mood Tracker</h3>
          <p className="text-gray-400 mb-4">
            Track your daily mood and see trends over time.
          </p>
          <Link to="/mood-tracker" className="text-blue-500 font-semibold hover:underline">
            Track Mood
          </Link>
        </div>

        {/* Activity Log */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaWalking className="text-green-400 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Activity Log</h3>
          <p className="text-gray-400 mb-4">
            Log activities and explore how they affect your mental health.
          </p>
          <Link to="/activity-log" className="text-blue-500 font-semibold hover:underline">
            View Log
          </Link>
        </div>

        {/* Stress Levels */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaHeart className="text-red-400 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Stress Levels</h3>
          <p className="text-gray-400 mb-4">
            Monitor stress levels and access tips to manage stress.
          </p>
          <Link to="/stress-levels" className="text-blue-500 font-semibold hover:underline">
            Check Stress
          </Link>
        </div>

        {/* Sleep Patterns */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaBed className="text-purple-400 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Sleep Patterns</h3>
          <p className="text-gray-400 mb-4">
            Track sleep quality and discover ways to improve rest.
          </p>
          <Link to="/sleep-patterns" className="text-blue-500 font-semibold hover:underline">
            View Sleep Data
          </Link>
        </div>

        {/* Therapy Sessions */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaBrain className="text-teal-400 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Therapy Sessions</h3>
          <p className="text-gray-400 mb-4">
            Record therapy sessions and track progress over time.
          </p>
          <Link to="/therapy-sessions" className="text-blue-500 font-semibold hover:underline">
            Manage Sessions
          </Link>
        </div>

        {/* Resources */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaBook className="text-indigo-400 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Resources</h3>
          <p className="text-gray-400 mb-4">
            Access a library of mental health resources and support.
          </p>
          <Link to="/resources" className="text-blue-500 font-semibold hover:underline">
            Explore Resources
          </Link>
        </div>

        {/* Meditation */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaLeaf className="text-green-400 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Meditation</h3>
          <p className="text-gray-400 mb-4">
            Guided meditation to help you relax and reduce stress.
          </p>
          <Link to="/meditation" className="text-blue-500 font-semibold hover:underline">
            Start Meditation
          </Link>
        </div>

        {/* Diet & Nutrition */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaUtensils className="text-orange-400 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Diet & Nutrition</h3>
          <p className="text-gray-400 mb-4">
            Track your diet and understand its impact on mental health.
          </p>
          <Link to="/diet-nutrition" className="text-blue-500 font-semibold hover:underline">
            Log Nutrition
          </Link>
        </div>

        {/* Exercise */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaDumbbell className="text-gray-400 text-3xl mb-4" />
          <h3 className="text-2xl font-semibold text-gray-200 mb-2">Exercise</h3>
          <p className="text-gray-400 mb-4">
            Log exercises and see their benefits for mental health.
          </p>
          <Link to="/exercise" className="text-blue-500 font-semibold hover:underline">
            Log Exercise
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;