import React from 'react';

const OnboardingScreen = ({ onNext }) => {
  return (
    <div className="centered" style={{ padding: 24 }}>
      <div style={{ marginBottom: 32 }}>
        <span style={{ fontSize: 96, display: 'block' }}>🎧</span>
      </div>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 12, textAlign: 'center' }}>
        Mood-based music discovery
      </h2>
      <p style={{ color: '#666', fontSize: 16, marginBottom: 32, textAlign: 'center' }}>
        Select music that matches your mood
      </p>
      <button
        style={{
          background: '#8f6fff',
          color: '#fff',
          border: 'none',
          borderRadius: 16,
          padding: '14px 48px',
          fontWeight: 600,
          fontSize: 18,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(143,111,255,0.08)',
        }}
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default OnboardingScreen; 