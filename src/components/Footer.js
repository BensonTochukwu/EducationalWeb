import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Educational Page. All rights reserved.</p>
        
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#learn-more">Learn More</a>
          <a href="#contact">Contact Us</a>
          <a href="#settings">Settings</a>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
