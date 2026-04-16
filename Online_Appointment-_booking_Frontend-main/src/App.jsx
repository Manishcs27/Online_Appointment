import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

// User Dashboard Pages
import UserDashboard from './pages/dashboard/UserDashboard';
import BookAppointment from './pages/dashboard/BookAppointment';
import MyAppointments from './pages/dashboard/MyAppointments';

// Admin Dashboard Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageAppointments from './pages/admin/ManageAppointments';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-sans min-h-screen text-white bg-slate-950 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* User Routes */}
            <Route 
              path="/user/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['user']}>
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/user/book" 
              element={
                <ProtectedRoute allowedRoles={['user']}>
                  <BookAppointment />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/user/appointments" 
              element={
                <ProtectedRoute allowedRoles={['user']}>
                  <MyAppointments />
                </ProtectedRoute>
              } 
            />
            {/* Catch missing user routes with redirect to dashboard */}
            <Route path="/user/*" element={<Navigate to="/user/dashboard" replace />} />
            
            {/* Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/users" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ManageUsers />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/appointments" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <ManageAppointments />
                </ProtectedRoute>
              } 
            />
            {/* Catch missing admin routes with redirect to dashboard */}
            <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
            
            {/* Global Catch */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
