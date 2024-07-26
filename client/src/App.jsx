import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Chatbox from './pages/chatbox';
import Mediscan from './pages/MediScan';
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/auth/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
              <Chatbox />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/chatbox" element={<Chatbox />} />
        <Route path="/mediScan" element={<Mediscan />} />
      </Routes>
    </Router>
  );
}

export default App;
