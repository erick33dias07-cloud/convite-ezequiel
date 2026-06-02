import React from 'react';
import './GoldDivider.css';

const GoldDivider = () => {
  return (
    <div className="gold-divider-container">
      <div className="gold-line left"></div>
      <div className="gold-crown-icon">
        <svg viewBox="0 0 24 18" width="24" height="18" fill="var(--secondary-color)">
          <path d="M3,13 L21,13 L19.5,16.5 L4.5,16.5 Z M3,12 L1,4 L6.5,8.5 L12,1 L17.5,8.5 L23,4 L21,12 Z" />
          <circle cx="1" cy="3" r="1" fill="#FFFFFF" />
          <circle cx="12" cy="0.5" r="1.2" fill="#FFFFFF" />
          <circle cx="23" cy="3" r="1" fill="#FFFFFF" />
        </svg>
      </div>
      <div className="gold-line right"></div>
    </div>
  );
};

export default GoldDivider;
