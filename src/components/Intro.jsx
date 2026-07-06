import React, { useState, useEffect } from 'react';
import './Intro.css';

const Intro = ({ onEnter }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: stars (immediate)
    setPhase(1);

    const t2 = setTimeout(() => setPhase(2), 800);   // crown appears
    const t3 = setTimeout(() => setPhase(3), 2000);  // name appears
    const t4 = setTimeout(() => setPhase(4), 3200);  // subtitle appears
    const t5 = setTimeout(() => setPhase(5), 4400);  // date appears
    const t6 = setTimeout(() => setPhase(6), 5400);  // button appears

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  return (
    <div className="intro-screen">
      {/* Stars layer */}
      <div className={`intro-stars ${phase >= 1 ? 'visible' : ''}`}>
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="intro-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2.5 + 1}px`,
              height: `${Math.random() * 2.5 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow behind crown */}
      <div className={`intro-glow ${phase >= 2 ? 'visible' : ''}`} />

      {/* Content stack */}
      <div className="intro-content">

        {/* Crown SVG */}
        <div className={`intro-crown ${phase >= 2 ? 'visible' : ''}`}>
          <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="intro-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#FFE87F" />
                <stop offset="30%"  stopColor="#F5C71A" />
                <stop offset="70%"  stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#9A6B00" />
              </linearGradient>
              <linearGradient id="intro-sapphire" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#BEE3F8" />
                <stop offset="50%"  stopColor="#6495ED" />
                <stop offset="100%" stopColor="#0D3A7A" />
              </linearGradient>
              <filter id="intro-glow-filter">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Crown Base */}
            <path d="M18,54 L82,54 L78,62 L22,62 Z" fill="url(#intro-gold)" />

            {/* Base gems */}
            <circle cx="28" cy="58" r="1.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="39" cy="58" r="2"   fill="#E2E8F0" />
            <circle cx="50" cy="58" r="2.8" fill="url(#intro-sapphire)" />
            <circle cx="61" cy="58" r="2"   fill="#E2E8F0" />
            <circle cx="72" cy="58" r="1.5" fill="#FFFFFF" opacity="0.9" />

            {/* Crown Body */}
            <path d="M18,52 L12,28 L30,40 L50,12 L70,40 L88,28 L82,52 Z" fill="url(#intro-gold)" />

            {/* Inner arch detail */}
            <path d="M32,52 Q41,31 50,13 Q59,31 68,52" stroke="#9A6B00" strokeWidth="1.2" fill="none" opacity="0.55" />
            <path d="M50,12 L50,54" stroke="#9A6B00" strokeWidth="0.9" fill="none" opacity="0.35" />

            {/* Peak pearls */}
            <circle cx="12" cy="27" r="3.5" fill="#FFFFFF" filter="url(#intro-glow-filter)" />
            <circle cx="30" cy="39" r="2"   fill="#FFF8DC" />
            <circle cx="50" cy="11" r="4.5" fill="#FFFFFF" filter="url(#intro-glow-filter)" />
            <circle cx="70" cy="39" r="2"   fill="#FFF8DC" />
            <circle cx="88" cy="27" r="3.5" fill="#FFFFFF" filter="url(#intro-glow-filter)" />
          </svg>
        </div>

        {/* Name */}
        <h1 className={`intro-name ${phase >= 3 ? 'visible' : ''}`}>
          EZEQUIEL
        </h1>

        {/* Ornamental line */}
        <div className={`intro-divider ${phase >= 4 ? 'visible' : ''}`}>
          <span className="intro-line" />
          <span className="intro-diamond">◆</span>
          <span className="intro-line" />
        </div>

        {/* Subtitle */}
        <p className={`intro-subtitle ${phase >= 4 ? 'visible' : ''}`}>
          Chá de Bebê
        </p>

        {/* Date */}
        <p className={`intro-date ${phase >= 5 ? 'visible' : ''}`}>
          12 de Julho · 12h
        </p>

        {/* CTA Button */}
        <button
          className={`intro-btn ${phase >= 6 ? 'visible' : ''}`}
          onClick={onEnter}
        >
          <span>Abrir Convite</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Intro;
