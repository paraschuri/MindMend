import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact-container bg-gray-900 min-h-screen text-gray-300 p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-400">Contact Us</h1>
        <p className="text-lg text-gray-400 mt-2">We’re here to help! Reach out with questions or feedback.</p>
      </header>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Send Us a Message</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-semibold">Full Name</label>
            <input type="text" className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-semibold">Email Address</label>
            <input type="email" className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 font-semibold">Message</label>
            <textarea className="w-full p-3 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="6" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="w-full py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-md">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Details Section */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaPhone className="text-blue-500 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-200">Phone</h3>
          <p className="text-gray-400 mt-2">+1 (555) 123-4567</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaEnvelope className="text-green-500 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-200">Email</h3>
          <p className="text-gray-400 mt-2">support@mentalhealthanalyzer.com</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaMapMarkerAlt className="text-purple-500 text-3xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-200">Address</h3>
          <p className="text-gray-400 mt-2">123 Wellness Lane, Suite 456<br />City, State, ZIP</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Frequently Asked Questions</h2>
        <div className="faq">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-400">How can I reset my password?</h3>
            <p className="text-gray-400 mt-2">Visit the "Forgot Password" page on the login screen and follow the instructions. We’ll send a reset link to your email.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-400">Is my data private and secure?</h3>
            <p className="text-gray-400 mt-2">Absolutely. We follow strict data privacy and security protocols to protect your information.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-blue-400">How do I access personalized resources?</h3>
            <p className="text-gray-400 mt-2">Once you complete the questionnaire, the dashboard will automatically populate with tailored resources and insights.</p>
          </div>
        </div>
      </section>
      
      {/* Support Links Section */}
      <section className="text-center py-6">
        <p className="text-gray-400">Need further assistance? Visit our <Link to="/support" className="text-blue-400 font-semibold hover:underline">Support Page</Link> or email us at <span className="text-blue-400 font-semibold">support@mentalhealthanalyzer.com</span>.</p>
      </section>
    </div>
  );
}

export default Contact;