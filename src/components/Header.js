import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
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
        <nav className="nav">
        <button onClick={() => scrollToSection('ai-videos')} className="nav-link">
            AI Videos
          </button>
          <button onClick={() => scrollToSection('videos')} className="nav-link">
            Videos
          </button>
          
          <button onClick={() => scrollToSection('social-media')} className="nav-link">
            Social Media
          </button>
          <button onClick={() => window.location.href = 'mailto:info@mafateehgroup.com'} className="nav-link cta-button">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

