import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/home_img.webp'; // Import the image
import '../index.css'; 

function Home() {
  return (
    <div className="home-container bg-gray-900 min-h-screen text-gray-300">
      {/* Hero Section */}
      <section className="hero bg-gray-900 text-center py-20 px-4">
        <div className="max-w-3xl mx-auto bg-gray-800 p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6 text-blue-400">
            Welcome to MindMend
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-400">
            Gain insights into your mental health through guided analysis and personalized resources.
          </p>
          <Link
            to="/questionnaire"
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">Guided Questionnaire</h3>
              <p className="text-gray-400">Answer questions designed to assess your mental well-being.</p>
              <Link to="/questionnaire" className="mt-4 inline-block px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-lg">
                Take Questionnaire
              </Link>
            </div>
            <div className="feature-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">Mental Health Chatbot</h3>
              <p className="text-gray-400">Chat with our mental health chatbot </p>
              <Link to="/chatbot" className="mt-4 inline-block px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-lg">
                Chat Now
              </Link>
            </div>
            <div className="feature-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">Personalized Resources</h3>
              <p className="text-gray-400">Access tailored resources that can aid in mental health improvement.</p>
              <Link to="/resources" className="mt-4 inline-block px-4 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-lg">
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-700 my-8" />

      {/* How It Works Section */}
      <section className="how-it-works py-16 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src={homeImg} alt="Mental Health Analysis" className="rounded-lg shadow-md mx-auto w-full max-w-xs" />
            <div>
              <p className="text-gray-400 text-lg mb-4">Our tool guides you through a structured questionnaire and provides real-time insights based on data analysis. Recommendations are then personalized to support you effectively.</p>
              <Link to="/dashboard" className="mt-4 inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-lg">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;