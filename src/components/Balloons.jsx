import React, { useEffect, useState } from 'react';
import './Balloons.css';

const Balloons = () => {
  const [elements, setElements] = useState({ balloons: [], stars: [] });

  useEffect(() => {
    // Generate balloons
    const balloonCount = 18;
    const newBalloons = Array.from({ length: balloonCount }).map((_, i) => ({
      id: `balloon-${i}`,
      left: Math.random() * 100, // random horizontal position
      duration: Math.random() * 14 + 14, // 14s to 28s float time (smoother and slower)
      delay: Math.random() * -20, // Negative delay so some balloons start immediately
      scale: Math.random() * 0.4 + 0.6, // 0.6 to 1.0 size
      colorClass: i % 3 === 0 ? 'gold' : i % 3 === 1 ? 'light-blue' : 'white',
      swayDelay: Math.random() * 5 // random sway animation offset
    }));

    // Generate stars
    const starCount = 45;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: `star-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 1.2, // 1.2px to 3.7px
      delay: Math.random() * 6,
      duration: Math.random() * 4 + 3 // 3s to 7s twinkle time
    }));

    setElements({ balloons: newBalloons, stars: newStars });
  }, []);

  return (
    <div className="background-effects-container">
      {/* Stars Background */}
      <div className="stars-container">
        {elements.stars.map((s) => (
          <div
            key={s.id}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`
            }}
          />
        ))}
      </div>

      {/* Balloons */}
      <div className="balloons-container">
        {elements.balloons.map((b) => (
          <div
            key={b.id}
            className="balloon-wrapper"
            style={{
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              transform: `scale(${b.scale})`
            }}
          >
            <div className={`balloon ${b.colorClass}`} style={{ animationDelay: `-${b.swayDelay}s` }}>
              <div className="balloon-body">
                <div className="balloon-highlight"></div>
              </div>
              <svg className="balloon-string" viewBox="0 0 20 100" preserveAspectRatio="none">
                <path d="M10,0 Q15,25 10,50 T10,100" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Balloons;
