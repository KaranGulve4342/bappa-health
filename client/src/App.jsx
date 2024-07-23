import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
// import Page1 from './pages/Page1'; // Import different components for different pages
// import Page2 from './pages/Page2';
// import Page3 from './pages/Page3';

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
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
