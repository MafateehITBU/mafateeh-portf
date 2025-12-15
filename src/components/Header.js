import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:info@mafateehgroup.com';
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="https://res.cloudinary.com/dodz4hnzc/image/upload/v1764057831/new_logo_2024_IT_MEDIA_PNG2-02_mvlrwo.png" 
            alt="Mafateeh IT & Media Solutions" 
            className="logo-image"
          />
        </div>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollToSection('ai-videos')} className="nav-link">
            AI Videos
          </button>
          <button onClick={() => scrollToSection('videos')} className="nav-link">
            Videos
          </button>
          <button onClick={() => scrollToSection('social-media')} className="nav-link">
            Social Media
          </button>
          <button onClick={handleContactClick} className="nav-link cta-button">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

