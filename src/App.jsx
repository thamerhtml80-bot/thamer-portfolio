import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <span className="logo-text">ثامر</span>
              <span className="logo-subtitle">Thamer</span>
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">الرئيسية</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">المشاريع</Link>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">اتصل بي</a>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2026 ثامر - مطور واجهات أمامية. جميع الحقوق محفوظة.</p>
            <div className="social-links">
              <a href="mailto:thamerhtml80@gmail.com" className="social-link">البريد الإلكتروني</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
