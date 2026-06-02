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
    setTimeout(() => {
      setShowInvite(true);
    }, 600);
  };

  return (
    <div className="app-container">

      {/*
       * Balloons ficam FORA de qualquer container com transform/filter.
       * Qualquer pai com `transform` vira o containing-block de `position:fixed`,
       * fazendo o bg-canvas ficar preso e cortado no meio da página.
       * Aqui, app-container tem apenas `position: relative` — sem transforms.
       */}
      {showInvite && <Balloons />}

      {/* Intro — fade-out ao clicar */}
      {!showInvite && (
        <div className={`intro-wrapper ${transitioning ? 'fading-out' : ''}`}>
          <Intro onEnter={handleEnter} />
        </div>
      )}

      {/* Convite — fade-in usando apenas opacity (sem transform) */}
      {showInvite && (
        <div className="invite-wrapper fade-in-invite">
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
