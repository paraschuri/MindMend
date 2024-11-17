// src/contexts/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const  AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // Load user from localStorage if available
  useEffect(() => {
    const storedUser = localStorage.getItem('mindmendUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      axios.defaults.headers.common['auth-token'] = parsedUser.token;
    }
    setLoading(false); // Set loading to false after checking
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('mindmendUser', JSON.stringify(user));
      axios.defaults.headers.common['auth-token'] = user.token;
    } else {
      localStorage.removeItem('mindmendUser');
      delete axios.defaults.headers.common['auth-token'];
    }
  }, [user]);

  // Login Function
  const login = async (email, password) => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      setUser({
        email,
        token: res.data.token,
        name: res.data.name,
        _id: res.data._id,
      });
    } catch (err) {
      throw new Error(err.response.data.error || 'Login failed');
    }
  };

  // Signup Function
  const signup = async (email, password, name) => {
    try {
      await axios.post('/api/auth/register', { email, password, name });
      await login(email, password, name);
    } catch (err) {
      throw new Error(err.response.data.error || 'Signup failed');
    }
  };

  // Logout Function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};