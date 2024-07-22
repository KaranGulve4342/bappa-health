import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My React Project</h1>
      <p>This is a simple introduction to my project. Let's get started!</p>
      <Button onClick={handleGetStarted}>Get Started</Button>
    </div>
  );
};

export default Home;
