import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Index from './pages/index';
import Test from './pages/test';
import GuestBook from './pages/GuestBook';
import Program from './pages/program';
import TestResult from './pages/TestResult';
import CharacterInfo from './pages/CharacterInfo';

import './App.css';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test-result" element={<TestResult />} />
        <Route path="/guestbook" element={<GuestBook />} />
        <Route path="/program" element={<Program />} />
        <Route path="/CharacterInfo" element={<CharacterInfo />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
