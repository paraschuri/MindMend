import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Chatbot from './pages/Chatbot';
import Dashboard from './components/Dashboard';
import Questionnaire from './pages/Questionnaire';
import Contact from './pages/Contact';
import MoodTracker from './components/MoodTracker';
import ActivityLog from './components/ActivityLog';
import StressLevels from './components/StressLevels';
import SleepPatterns from './components/SleepPatterns';
import TherapySessions from './components/TherapySessions';
import Resources from './components/Resources';
import Meditation from './components/Meditation';
import DietNutrition from './components/DietNutrition';
import Exercise from './components/Exercise';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import Forum from './pages/Forum';


function App(){
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/chatbot" element={<PrivateRoute><Chatbot /></PrivateRoute>} />
          <Route path="/questionnaire" element={<PrivateRoute><Questionnaire /></PrivateRoute>} />
          <Route path="/forum" element={<PrivateRoute><Forum /></PrivateRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mood-tracker" element={<PrivateRoute><MoodTracker /></PrivateRoute>} />
          <Route path="/activity-log" element={<PrivateRoute><ActivityLog /></PrivateRoute>} />
          <Route path="/stress-levels" element={<PrivateRoute><StressLevels /></PrivateRoute>} />
          <Route path="/sleep-patterns" element={<PrivateRoute><SleepPatterns /></PrivateRoute>} />
          <Route path="/therapy-sessions" element={<PrivateRoute><TherapySessions /></PrivateRoute>} />
          <Route path="/resources" element={<PrivateRoute><Resources /></PrivateRoute>} />
          <Route path="/meditation" element={<PrivateRoute><Meditation /></PrivateRoute>} />
          <Route path="/diet-nutrition" element={<PrivateRoute><DietNutrition /></PrivateRoute>} />
          <Route path="/exercise" element={<PrivateRoute><Exercise /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-300">
      <div className="max-w-2xl mx-auto bg-gray-800 p-12 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6 text-blue-400">
          404 - Page Not Found
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default App;
