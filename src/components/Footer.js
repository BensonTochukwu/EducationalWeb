import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Educational Page. All rights reserved.</p>
        
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#settings">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
