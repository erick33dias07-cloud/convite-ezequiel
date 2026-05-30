import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Details from './components/Details';
import RSVP from './components/RSVP';
import GiftSuggestions from './components/GiftSuggestions';
import Footer from './components/Footer';
import Balloons from './components/Balloons';

function App() {
  return (
    <div className="app-container">
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
  );
}

export default App;
