import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

const playlists = {
  Happy: [
    'Sunshine',
    'Better Together',
    'Good Times',
    'Perfect Day',
    'Joyful Sound',
  ],
  Sad: [
    'Blue Skies',
    'Lonely Road',
    'Tears in Rain',
    'Lost in Thought',
    'Quiet Night',
  ],
  Chill: [
    'Calm Breeze',
    'Evening Glow',
    'Peaceful Mind',
    'Gentle Waves',
    'Serene Space',
  ],
  Romantic: [
    'Love Song',
    'Heartbeats',
    'Sweet Moments',
    'Forever Us',
    'Moonlight Dance',
  ],
};

const moodIcons = {
  Happy: '😊',
  Sad: '😢',
  Chill: '🧘‍♀️',
  Romantic: '❤️',
};

const MusicPlayerScreen = ({ mood = 'Happy' }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress] = useState(30); // seconds
  const duration = 180; // seconds
  const songs = playlists[mood] || [];

  const handlePrev = () => setCurrent((c) => (c > 0 ? c - 1 : songs.length - 1));
  const handleNext = () => setCurrent((c) => (c < songs.length - 1 ? c + 1 : 0));
  const handlePlayPause = () => setPlaying((p) => !p);

  return (
    <div className="centered" style={{ padding: 24, justifyContent: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 360, margin: '32px auto 0' }}>
        <img
          src={logo}
          alt="MoodaTune Logo"
          style={{
            width: 40,
            height: 40,
            position: 'absolute',
            top: 24,
            left: 24,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        />
        <div style={{ marginBottom: 24, paddingTop: 40 }}>
          <div style={{ fontSize: 18, color: '#222', fontWeight: 600 }}>
            You're feeling <span style={{ fontSize: 22 }}>{moodIcons[mood]}</span> {mood}
          </div>
        </div>
        <div style={{ background: '#fff9c4', borderRadius: 18, padding: 20, marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>Good Vibes</div>
          <div style={{ fontSize: 14, color: '#888', marginBottom: 12 }}>Song songs</div>
          {songs.map((song, idx) => (
            <div key={song} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '6px 0',
              fontWeight: idx === current ? 700 : 500,
              color: idx === current ? '#8f6fff' : '#222',
            }}>
              <span>{song}</span>
              <span style={{ fontSize: 13, color: '#aaa' }}>{mood}</span>
            </div>
          ))}
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>{songs[current]}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button onClick={handlePrev} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}>⏮️</button>
            <button onClick={handlePlayPause} style={{ background: '#222', color: '#fff', border: 'none', borderRadius: '50%', width: 48, height: 48, fontSize: 24, cursor: 'pointer' }}>
              {playing ? '⏸️' : '▶️'}
            </button>
            <button onClick={handleNext} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}>⏭️</button>
          </div>
          <div style={{ marginTop: 16, width: '100%' }}>
            <div style={{ height: 6, background: '#eee', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: `${(progress / duration) * 100}%`, height: '100%', background: '#8f6fff' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#888', marginTop: 4 }}>
              <span>{Math.floor(progress / 60)}:{(progress % 60).toString().padStart(2, '0')}</span>
              <span>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerScreen; 