import React from 'react';
import { Baby } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero fade-in">
      <div className="container hero-content">
        <div className="crown-icon">👑</div>
        <h2 className="subtitle">É com grande alegria que anunciamos a chegada do nosso pequeno príncipe</h2>
        <h1 className="title-main">EZEQUIEL</h1>
        <div className="hero-decoration">
          <Baby size={48} color="var(--secondary-color)" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
