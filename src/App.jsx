import React, { useState } from 'react';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import RSVP from './components/RSVP';
import GiftSuggestions from './components/GiftSuggestions';
import Footer from './components/Footer';
import Balloons from './components/Balloons';
import './App.css';

function App() {
  const [showInvite, setShowInvite] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleEnter = () => {
    setTransitioning(true);
    // Wait for the CSS transition, then reveal the invite
    setTimeout(() => {
      setShowInvite(true);
    }, 600);
  };

  return (
    <div className="app-container">
      {/* Intro screen — fades out when transitioning */}
      {!showInvite && (
        <div className={`intro-wrapper ${transitioning ? 'fading-out' : ''}`}>
          <Intro onEnter={handleEnter} />
        </div>
      )}

      {/* Main invitation — fades in */}
      {showInvite && (
        <div className="invite-wrapper fade-in-invite">
          <Balloons />
          <div className="content-wrapper">
            <Hero />
            <Countdown />
            <Details />
            <GiftSuggestions />
            <RSVP />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
