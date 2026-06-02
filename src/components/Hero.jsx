import React from 'react';
import { Baby } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero fade-in">
      <div className="container hero-content">
        <div className="crown-container">
          <svg className="crown-svg" viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gold-crown" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE066" />
                <stop offset="30%" stopColor="#F5C71A" />
                <stop offset="70%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#996515" />
              </linearGradient>
              <linearGradient id="sapphire-gem" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#87CEFA" />
                <stop offset="50%" stopColor="#6495ED" />
                <stop offset="100%" stopColor="#104E8B" />
              </linearGradient>
              <filter id="crown-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Crown Base */}
            <path d="M18,54 L82,54 L78,62 L22,62 Z" fill="url(#gold-crown)" />
            {/* Base gems */}
            <circle cx="28" cy="58" r="1.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="39" cy="58" r="2" fill="#E2E8F0" />
            <circle cx="50" cy="58" r="2.5" fill="url(#sapphire-gem)" />
            <circle cx="61" cy="58" r="2" fill="#E2E8F0" />
            <circle cx="72" cy="58" r="1.5" fill="#FFFFFF" opacity="0.9" />
            {/* Crown Peaks */}
            <path d="M18,52 L12,28 L30,40 L50,12 L70,40 L88,28 L82,52 Z" fill="url(#gold-crown)" />
            {/* Peak Pearls */}
            <circle cx="12" cy="27" r="3" fill="#FFFFFF" filter="url(#crown-glow)" />
            <circle cx="30" cy="39" r="1.8" fill="url(#gold-crown)" />
            <circle cx="50" cy="11" r="4" fill="#FFFFFF" filter="url(#crown-glow)" />
            <circle cx="70" cy="39" r="1.8" fill="url(#gold-crown)" />
            <circle cx="88" cy="27" r="3" fill="#FFFFFF" filter="url(#crown-glow)" />
            {/* Inner arches / details */}
            <path d="M32,52 Q41,31 50,13 Q59,31 68,52" stroke="#996515" strokeWidth="1.2" fill="none" opacity="0.6" />
            <path d="M50,12 L50,54" stroke="#996515" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
        </div>
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
