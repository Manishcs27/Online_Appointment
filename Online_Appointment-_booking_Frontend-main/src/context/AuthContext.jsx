import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('hub_user');
    const token = localStorage.getItem('hub_token');
    
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
      api.setToken(token);
    }
    setLoading(false);
  }, []);

  const signup = async (name, email, password) => {
    try {
      const response = await api.signup(name, email, password);
      if (response.success) {
        const userData = {
          id: response.user.id,
          name: response.user.name,
          email: response.user.email,
          role: response.user.role,
        };
        setUser(userData);
        api.setToken(response.token);
        localStorage.setItem('hub_user', JSON.stringify(userData));
        return { success: true, role: response.user.role };
      }
      return response;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await api.login(email, password);
      if (response.success) {
        const userData = {
          id: response.user.id,
          name: response.user.name,
          email: response.user.email,
          role: response.user.role,
        };
        setUser(userData);
        api.setToken(response.token);
        localStorage.setItem('hub_user', JSON.stringify(userData));
        return { success: true, role: response.user.role };
      }
      return response;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    try {
      await api.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      api.clearToken();
      localStorage.removeItem('hub_user');
      localStorage.removeItem('hub_token');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
