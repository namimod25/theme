
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/tech" className="footer-link">Tech</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;