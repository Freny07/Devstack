import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ornament-divider"></div>
      
      <div className="footer-container">
        
        <div className="footer-section">
          <h3 className="footer-title">LocalCraft<span className="logo-dot">.</span></h3>
          <p className="footer-desc">
            Bringing the soul of Indian streets and local artisans directly to your home. 
            Discover genuine handmade crafts, stories, and heritage dating back centuries.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact Us</h4>
          <ul className="footer-contact">
            <li><Phone size={18} /> +91 1800 123 4567</li>
            <li><Phone size={18} /> +91 9876 543 210</li>
            <li><Mail size={18} /> namaste@localcraft.in</li>
            <li><MapPin size={18} /> 42 Artisan Alley, Old Delhi, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Follow Our Journey</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <TwitterIcon />
            </a>
          </div>
          <p className="footer-note">Tag us to share your finds #LocalCraftIndia</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LocalCraft. All rights reserved.</p>
        <p>Crafted with love for our artisans.</p>
      </div>
    </footer>
  );
};

export default Footer;
