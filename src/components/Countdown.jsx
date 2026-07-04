import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  // Data do evento: 12 de Julho às 16:00
  const targetDate = new Date('2026-07-12T16:00:00');
  const targetTime = targetDate.getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <section className="section countdown-section">
      <div className="container">
        <h2 className="title">Contagem Regressiva</h2>
        <div className="countdown-grid">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="countdown-item glass-panel">
              <span className="countdown-value">{value < 10 ? `0${value}` : value}</span>
              <span className="countdown-unit">{
                unit === 'days' ? 'Dias' :
                unit === 'hours' ? 'Horas' :
                unit === 'minutes' ? 'Minutos' : 'Segundos'
              }</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
