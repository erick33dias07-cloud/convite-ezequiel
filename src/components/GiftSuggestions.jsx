import React from 'react';
import { Gift, Package } from 'lucide-react';
import './GiftSuggestions.css';

const GiftSuggestions = () => {
  return (
    <section className="section gifts-section">
      <div className="container">
        <h2 className="title">Sugestão de Presente</h2>
        <div className="gifts-intro">
          <p>A sua presença é o mais importante! 💙</p>
          <p>E, para presentear, sugerimos:</p>
          <h3>Fraldas + Lenços Umedecidos</h3>
        </div>
        
        <p className="gifts-subtitle">Escolha abaixo o tamanho que você gostaria de presentear:</p>

        <div className="gifts-grid">
          {['P', 'M', 'G', 'XG'].map((size) => (
            <div key={size} className="gift-card glass-panel">
              <div className="gift-icon">
                <Package size={40} color="var(--secondary-color)" />
              </div>
              <h3 className="gift-size">Tamanho {size}</h3>
              <button className="btn-primary gift-btn">Presentear <Gift size={16} /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSuggestions;
