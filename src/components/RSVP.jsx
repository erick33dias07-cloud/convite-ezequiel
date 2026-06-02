import React, { useState, useEffect } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData]   = useState({ name: '' });
  const [submitted, setSubmitted] = useState(false);
  const [diaperSize, setDiaperSize] = useState(null);

  // Lê o tamanho sorteado do localStorage (atualiza ao montar)
  useEffect(() => {
    const saved = localStorage.getItem('ezequiel_gift_size');
    if (saved) setDiaperSize(saved);
  }, []);

  // Permite que o componente detecte se o sorteio foi feito
  // mesmo que o usuário role a página depois de sortear
  const handleFocus = () => {
    const saved = localStorage.getItem('ezequiel_gift_size');
    if (saved && saved !== diaperSize) setDiaperSize(saved);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tenta pegar o tamanho novamente na hora do submit (mais seguro)
    const size = localStorage.getItem('ezequiel_gift_size') || diaperSize || 'Não sorteado';

    const data = new URLSearchParams();
    data.append('form-name',   'rsvp');
    data.append('name',        formData.name.trim());
    data.append('diaper_size', size);

    fetch('/', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    data.toString(),
    })
      .then((res) => {
        // Netlify retorna 200 mesmo em erros de schema — considera enviado
        setSubmitted(true);
      })
      .catch(() => {
        alert('Houve um erro ao enviar. Por favor tente novamente.');
      });
  };

  return (
    <section className="section rsvp-section">
      <div className="container">
        <h2 className="title">Sua presença é o nosso maior presente</h2>
        <p className="rsvp-subtitle">
          Por favor, confirme sua presença para que possamos preparar tudo com ainda mais carinho.
        </p>

        <div className="rsvp-form-container glass-panel">
          {submitted ? (
            <div className="rsvp-success fade-in">
              <div className="success-icon">🎉</div>
              <h3>Presença Confirmada!</h3>
              <p>Obrigado por celebrar este momento especial conosco.</p>
              {diaperSize && (
                <p className="success-diaper">
                  Não esqueça: sua fralda é <strong>tamanho {diaperSize}</strong> + lenços umedecidos! 💙
                </p>
              )}
            </div>
          ) : (
            <form
              className="rsvp-form"
              onSubmit={handleSubmit}
              name="rsvp"
              data-netlify="true"
              onFocus={handleFocus}
            >
              {/* Campos ocultos obrigatórios para o Netlify Forms */}
              <input type="hidden" name="form-name"   value="rsvp" />
              <input type="hidden" name="diaper_size" value={diaperSize || 'Não sorteado'} />

              {/* Nome */}
              <div className="form-group">
                <label htmlFor="rsvp-name">Nome Completo</label>
                <input
                  id="rsvp-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Ex: Maria Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Tamanho sorteado — visível para o convidado confirmar */}
              {diaperSize ? (
                <div className="diaper-preview">
                  <span className="diaper-label">🎁 Sua fralda sorteada:</span>
                  <span className="diaper-value">Tamanho {diaperSize}</span>
                  <p className="diaper-sub">Este tamanho será registrado junto com sua confirmação.</p>
                </div>
              ) : (
                <div className="diaper-warning">
                  <AlertCircle size={18} />
                  <p>
                    Você ainda não girou a roleta de fraldas!{' '}
                    <strong>Role a página para cima</strong> e descubra o seu tamanho antes de confirmar.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={!diaperSize}
                title={!diaperSize ? 'Gire a roleta de fraldas primeiro' : ''}
              >
                Confirmar Presença <Send size={18} />
              </button>

              {!diaperSize && (
                <p className="rsvp-block-note">
                  ⬆️ Gire a roleta na seção acima para habilitar a confirmação.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
