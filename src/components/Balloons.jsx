import React, { useEffect, useState } from 'react';
import './Balloons.css';

const Balloons = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    // Generate balloons
    const balloonCount = 20;
    const newBalloons = Array.from({ length: balloonCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random horizontal position
      duration: Math.random() * 12 + 10, // 10s to 22s float time
      delay: Math.random() * 15, // 0s to 15s delay
      scale: Math.random() * 0.4 + 0.6, // 0.6 to 1.0 size
      colorClass: i % 3 === 0 ? 'gold' : i % 3 === 1 ? 'light-blue' : 'white'
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="balloons-container">
      {balloons.map((b) => (
        <div
          key={b.id}
          className={`balloon ${b.colorClass}`}
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            transform: `scale(${b.scale})`
          }}
        >
          <div className="balloon-body"></div>
          <div className="balloon-string"></div>
        </div>
      ))}
    </div>
  );
};

export default Balloons;
