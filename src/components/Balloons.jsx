import React, { useEffect, useState } from 'react';
import './Balloons.css';

const COLORS = ['gold', 'light-blue', 'white'];

const Balloons = () => {
  const [elements, setElements] = useState({ balloons: [], stars: [] });

  useEffect(() => {
    const balloonCount = 22;

    const newBalloons = Array.from({ length: balloonCount }).map((_, i) => {
      const duration = Math.random() * 14 + 14; // 14–28s
      return {
        id: `balloon-${i}`,
        left: Math.random() * 98,                  // 0–98% horizontal
        duration,
        delay: -(Math.random() * duration),         // distribui ao longo de todo o ciclo
        scale: Math.random() * 0.45 + 0.55,         // 0.55–1.0
        colorClass: COLORS[i % 3],
        swayDuration: Math.random() * 3 + 4,        // 4–7s sway
        swayDelay: -(Math.random() * 6),
      };
    });

    const starCount = 70;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: `star-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.4 + 1,               // 1–3.4px
      twinkleDuration: Math.random() * 3 + 2.5,     // 2.5–5.5s
      twinkleDelay: Math.random() * 5,
    }));

    setElements({ balloons: newBalloons, stars: newStars });
  }, []);

  return (
    <div className="bg-canvas">
      {/* ── Starry sky (fixed, always visible) ── */}
      <div className="stars-layer" aria-hidden="true">
        {elements.stars.map((s) => (
          <span
            key={s.id}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.twinkleDuration}s`,
              animationDelay: `${s.twinkleDelay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Floating balloons ── */}
      <div className="balloons-layer" aria-hidden="true">
        {elements.balloons.map((b) => (
          /*
           * Three-wrapper pattern keeps transforms isolated:
           *  1. .balloon-float  → translateY animation (rises from bottom to top)
           *  2. .balloon-scale  → static scale() so it doesn't conflict with animation
           *  3. .balloon        → rotate/sway animation
           */
          <div
            key={b.id}
            className="balloon-float"
            style={{
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          >
            <div
              className="balloon-scale"
              style={{ transform: `scale(${b.scale})` }}
            >
              <div
                className={`balloon ${b.colorClass}`}
                style={{
                  animationDuration: `${b.swayDuration}s`,
                  animationDelay: `${b.swayDelay}s`,
                }}
              >
                <div className="balloon-body">
                  <div className="balloon-highlight" />
                </div>
                <svg
                  className="balloon-string"
                  viewBox="0 0 20 110"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10,0 Q16,28 10,55 Q4,82 10,110"
                    fill="none"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Balloons;
