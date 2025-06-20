import React, { useState } from 'react';

const moods = [
  { label: 'Happy', icon: '😊', color: '#fff9c4' },
  { label: 'Sad', icon: '😢', color: '#e3eafc' },
  { label: 'Chill', icon: '🧘‍♀️', color: '#e0f7fa' },
  { label: 'Romantic', icon: '❤️', color: '#ffe0e6' },
];

const MoodSelectionScreen = ({ onNext }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="centered" style={{ padding: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 32, textAlign: 'center' }}>
        How are you feeling?
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
        {moods.map((mood, idx) => (
          <button
            key={mood.label}
            onClick={() => setSelected(mood.label)}
            style={{
              background: selected === mood.label ? '#8f6fff' : mood.color,
              color: selected === mood.label ? '#fff' : '#222',
              border: 'none',
              borderRadius: 18,
              padding: '32px 0',
              fontSize: 22,
              fontWeight: 600,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: selected === mood.label ? '0 2px 12px rgba(143,111,255,0.12)' : '0 1px 4px rgba(0,0,0,0.04)',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ fontSize: 36, marginBottom: 8 }}>{mood.icon}</span>
            {mood.label}
          </button>
        ))}
      </div>
      <button
        style={{
          background: selected ? '#8f6fff' : '#e0e0e0',
          color: selected ? '#fff' : '#aaa',
          border: 'none',
          borderRadius: 16,
          padding: '14px 48px',
          fontWeight: 600,
          fontSize: 18,
          cursor: selected ? 'pointer' : 'not-allowed',
          boxShadow: selected ? '0 2px 8px rgba(143,111,255,0.08)' : 'none',
        }}
        onClick={() => selected && onNext(selected)}
        disabled={!selected}
      >
        Next
      </button>
    </div>
  );
};

export default MoodSelectionScreen; 