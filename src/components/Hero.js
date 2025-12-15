import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Creative Solutions for
            <span className="highlight"> Digital Excellence</span>
          </h1>
          <p className="hero-description">
            We specialize in design, marketing, and video production, delivering 
            innovative solutions that elevate your brand and captivate your audience.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('ai-videos')}
            >
              View Our Work
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = 'mailto:info@mafateehgroup.com'}>
                Contact Us
              </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>Design</h3>
            <p>Creative Visuals</p>
          </div>
          <div className="stat-item">
            <h3>Marketing</h3>
            <p>Strategic Campaigns</p>
          </div>
          <div className="stat-item">
            <h3>Video</h3>
            <p>Compelling Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

