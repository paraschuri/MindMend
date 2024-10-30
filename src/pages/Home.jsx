import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6">Welcome to the Mental Health Analyzer</h1>
          <p className="text-lg md:text-xl mb-8">Gain insights into your mental health through guided analysis and personalized resources.</p>
          <Link to="/questionnaire" className="px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-blue-100 transition duration-300 shadow-lg">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Guided Questionnaire</h3>
              <p className="text-gray-600">Answer questions designed to assess your mental well-being.</p>
            </div>
            <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sentiment Analysis</h3>
              <p className="text-gray-600">Analyze emotional tones and sentiments in responses for deeper insights.</p>
            </div>
            <div className="feature-card p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Resources</h3>
              <p className="text-gray-600">Access tailored resources that can aid in mental health improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-16 px-4 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/assets/mental-health-analysis.jpg" alt="Mental Health Analysis" className="rounded-lg shadow-md mx-auto" />
            <div>
              <p className="text-gray-700 text-lg mb-4">Our tool guides you through a structured questionnaire and provides real-time insights based on data analysis. Recommendations are then personalized to support you effectively.</p>
              <Link to="/dashboard" className="mt-4 inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-lg">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="testimonial p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 italic mb-4">"The insights from the Mental Health Analyzer have helped me understand and manage my emotions better."</p>
              <h4 className="text-lg font-semibold text-gray-800">- User A</h4>
            </div>
            <div className="testimonial p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 italic mb-4">"A wonderful tool with easy navigation and valuable resources for mental health improvement."</p>
              <h4 className="text-lg font-semibold text-gray-800">- User B</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
