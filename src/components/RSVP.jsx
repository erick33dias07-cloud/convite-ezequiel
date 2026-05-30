import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({ name: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const diaperSize = localStorage.getItem('ezequiel_gift_size') || 'Não sorteado';
    
    const data = new URLSearchParams();
    data.append('form-name', 'rsvp');
    data.append('name', formData.name);
    data.append('diaper_size', diaperSize);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString()
    })
    .then(() => setSubmitted(true))
    .catch(() => alert('Houve um erro ao enviar a confirmação. Tente novamente.'));
  };

  return (
    <section className="section rsvp-section">
      <div className="container">
        <h2 className="title">Sua presença é o nosso maior presente</h2>
        <p className="rsvp-subtitle">Por favor, confirme sua presença para que possamos preparar tudo com ainda mais carinho.</p>
        
        <div className="rsvp-form-container glass-panel">
          {submitted ? (
            <div className="rsvp-success fade-in">
              <h3>Presença Confirmada!</h3>
              <p>Obrigado por celebrar este momento especial conosco.</p>
            </div>
          ) : (
            <form className="rsvp-form" onSubmit={handleSubmit} name="rsvp" data-netlify="true">
              <input type="hidden" name="form-name" value="rsvp" />
              <div className="form-group">
                <label>Nome Completo</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ex: Maria Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <button type="submit" className="btn-primary">
                Confirmar Presença <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
