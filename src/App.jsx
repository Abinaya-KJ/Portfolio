import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Work from './components/Work';

import Contact from './components/Contact';
import PageWrapper from './components/PageWrapper';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Force scroll to top on route change
  const ScrollToTop = () => {
    // Logic could be added here if needed, or handled by a wrapper component
    return null;
  }

  return (
    <Router>
      <div className="app-container">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<PageWrapper><HeroSection /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/work" element={<PageWrapper><Work /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
