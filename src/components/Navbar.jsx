import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-10 h-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
              <Link to="/">Mental Health Analyzer</Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-200">
                Home
              </Link>
              <Link to="/questionnaire" className="text-gray-700 hover:text-blue-600 transition duration-200">
                Questionnaire
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition duration-200">
                Dashboard
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition duration-200">
                Resources
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-200">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <FaTimes className="w-6 h-6 text-gray-700" />
                ) : (
                  <FaBars className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4">
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition duration-200" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/questionnaire" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition duration-200" onClick={toggleMenu}>
                Questionnaire
              </Link>
              <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition duration-200" onClick={toggleMenu}>
                Dashboard
              </Link>
              <Link to="/resources" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition duration-200" onClick={toggleMenu}>
                Resources
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition duration-200" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Space for Navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
