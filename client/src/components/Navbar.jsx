import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-blue-400 font-semibold'
      : 'text-gray-300 hover:text-blue-400 transition duration-200';
  };

  return (
    <>
      <nav className="bg-gray-800 shadow-lg fixed w-full z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-400">
              <Link to="/">MindMend</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className={getLinkClass('/')}>
                Home
              </Link>
              {!user && (
                <Link to="/contact" className={getLinkClass('/contact')}>
                  Contact
                </Link>
              )}
              {!user ? (
                <>
                  <Link to="/login" className={getLinkClass('/login')}>
                    Login
                  </Link>
                  <Link to="/signup" className={getLinkClass('/signup')}>
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/questionnaire" className={getLinkClass('/questionnaire')}>
                    Questionnaire
                  </Link>
                  <Link to="/dashboard" className={getLinkClass('/dashboard')}>
                    Dashboard
                  </Link>
                  <Link to="/chatbot" className={getLinkClass('/chatbot')}>
                    Chatbot
                  </Link>
                  <Link to="/forum" className={getLinkClass('/forum')}>
                    Forum
                  </Link>
                  <button
                    onClick={logout}
                    className="text-gray-300 hover:text-blue-400 transition duration-200"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <FaTimes className="w-6 h-6 text-gray-300" />
                ) : (
                  <FaBars className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden bg-gray-900 transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/"
              className={`block ${getLinkClass('/')} hover:bg-gray-800 transition duration-200`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            {!user && (
              <Link
                to="/contact"
                className={`block ${getLinkClass('/contact')} hover:bg-gray-800 transition duration-200`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            )}
            {!user ? (
              <>
                <Link
                  to="/login"
                  className={`block ${getLinkClass('/login')} hover:bg-gray-800 transition duration-200`}
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`block ${getLinkClass('/signup')} hover:bg-gray-800 transition duration-200`}
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/questionnaire"
                  className={`block ${getLinkClass('/questionnaire')} hover:bg-gray-800 transition duration-200`}
                  onClick={toggleMenu}
                >
                  Questionnaire
                </Link>
                <Link
                  to="/dashboard"
                  className={`block ${getLinkClass('/dashboard')} hover:bg-gray-800 transition duration-200`}
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <Link
                  to="/chatbot"
                  className={`block ${getLinkClass('/chatbot')} hover:bg-gray-800 transition duration-200`}
                  onClick={toggleMenu}
                >
                  Chatbot
                </Link>
                <Link
                  to="/forum"
                  className={`block ${getLinkClass('/forum')} hover:bg-gray-800 transition duration-200`}
                  onClick={toggleMenu}
                >
                  Forum
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="block w-full text-left text-gray-300 hover:bg-gray-800 transition duration-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Space for Navbar */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;