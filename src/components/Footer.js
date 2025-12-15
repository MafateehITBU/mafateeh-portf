import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="https://res.cloudinary.com/dodz4hnzc/image/upload/v1764061394/WHITE_LOGO_ihsqjp.webp" 
              alt="Mafateeh IT & Media Solutions" 
              className="footer-logo"
            />
            <p className="footer-description">
              Creating innovative digital solutions through design, marketing, and video production.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('ai-videos')}>AI Videos</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('videos')}>Videos</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('social-media')}>Social Media</button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>Design</li>
              <li>Marketing</li>
              <li>Video Production</li>
              <li>AI Video Generation</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="contact-info">
              <p>Ready to start your project?</p>
              <button className="contact-button" onClick={() => window.location.href = 'mailto:info@mafateeh.com'}>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mafateeh IT & Media Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

