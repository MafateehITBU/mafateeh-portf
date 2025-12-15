import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AIVideoSection from './components/AIVideoSection';
import SocialMediaSection from './components/SocialMediaSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AIVideoSection />
      <VideoSection />
      <SocialMediaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

