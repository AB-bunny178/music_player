import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(160deg, #b16cea 0%, #ff5e69 50%, #00c9ff 100%)',
      padding: 24,
      boxSizing: 'border-box'
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logo} alt="MoodaTune Logo" style={{ width: 80, height: 80, marginBottom: 32 }} />
        <h1 style={{ color: 'white', fontWeight: 700, fontSize: 32, letterSpacing: 1 }}>MoodaTune</h1>
      </div>
      <button
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          color: '#8f6fff',
          border: 'none',
          borderRadius: 16,
          padding: '14px 48px',
          fontWeight: 600,
          fontSize: 18,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: 360
        }}
        onClick={() => navigate('/onboarding')}
      >
        Get Started
      </button>
    </div>
  );
};

export default WelcomeScreen; 