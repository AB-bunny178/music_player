import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import OnboardingScreen from './components/OnboardingScreen';
import MoodSelectionScreen from './components/MoodSelectionScreen';
import MusicPlayerScreen from './components/MusicPlayerScreen';
import './App.css';

function AppRoutes() {
  const navigate = useNavigate();
  const [mood, setMood] = useState('Happy');

  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/onboarding" element={<OnboardingScreen onNext={() => navigate('/mood')} />} />
      <Route path="/mood" element={<MoodSelectionScreen onNext={(selectedMood) => { setMood(selectedMood); navigate('/player'); }} />} />
      <Route path="/player" element={<MusicPlayerScreen mood={mood} />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
