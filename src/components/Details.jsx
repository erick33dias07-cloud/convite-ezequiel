import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import './Details.css';

const Details = () => {
  return (
    <section className="section details-section">
      <div className="container">
        <h2 className="title">Detalhes da Celebração</h2>
        <div className="details-grid">
          <div className="detail-card glass-panel fade-in">
            <div className="icon-wrapper">
              <Calendar size={32} color="var(--secondary-color)" />
            </div>
            <h3>Data</h3>
            <p>22 de Junho</p>
          </div>
          
          <div className="detail-card glass-panel fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="icon-wrapper">
              <Clock size={32} color="var(--secondary-color)" />
            </div>
            <h3>Horário</h3>
            <p>16:00</p>
          </div>

          <div className="detail-card glass-panel fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="icon-wrapper">
              <MapPin size={32} color="var(--secondary-color)" />
            </div>
            <h3>Local</h3>
            <p>Rua Empresário Waldir Teixeira, 172<br/>Bairro Dom Silvério</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
