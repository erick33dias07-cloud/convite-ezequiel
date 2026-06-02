import React, { useState, useEffect } from 'react';
import { Gift, Package, RefreshCw, Sparkles } from 'lucide-react';
import './GiftSuggestions.css';

const SIZE_DESCRIPTIONS = {
  'RN':   { label: 'Recém-Nascido (RN)', tip: 'Ideal para as primeiras semanas! 🍼' },
  'P':    { label: 'Tamanho P',           tip: 'Perfeito para o primeiro mês! 💛' },
  'M':    { label: 'Tamanho M',           tip: 'O mais usado pelos bebês! 💙'    },
  'G/GG': { label: 'Tamanho G / GG',      tip: 'Para quando o Ezequiel crescer! 👑' },
};

const GiftSuggestions = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSpinning, setIsSpinning]     = useState(false);
  const [displayedSize, setDisplayedSize] = useState('?');
  const [revealed, setRevealed]         = useState(false);

  // Carrega resultado salvo no dispositivo
  useEffect(() => {
    const saved = localStorage.getItem('ezequiel_gift_size');
    if (saved) {
      setSelectedSize(saved);
      setDisplayedSize(saved);
      setRevealed(true);
    }
  }, []);

  const sizes = ['RN', 'P', 'M', 'G/GG'];

  const generateSuggestion = () => {
    if (isSpinning || selectedSize) return;
    setIsSpinning(true);
    setRevealed(false);

    let spins = 0;
    const interval = setInterval(() => {
      setDisplayedSize(sizes[Math.floor(Math.random() * sizes.length)]);
      spins++;

      if (spins > 24) {
        clearInterval(interval);

        // Pesos: M=50%, P=20%, G/GG=20%, RN=10%
        const rand = Math.random();
        let finalSize;
        if      (rand < 0.50) finalSize = 'M';
        else if (rand < 0.70) finalSize = 'P';
        else if (rand < 0.90) finalSize = 'G/GG';
        else                  finalSize = 'RN';

        setDisplayedSize(finalSize);
        setSelectedSize(finalSize);
        localStorage.setItem('ezequiel_gift_size', finalSize);
        setIsSpinning(false);

        // Pequeno delay para a animação de revelação
        setTimeout(() => setRevealed(true), 80);
      }
    }, 90);
  };

  const info = selectedSize ? SIZE_DESCRIPTIONS[selectedSize] : null;

  return (
    <section className="section gifts-section">
      <div className="container">
        <h2 className="title">Sugestão de Presente</h2>
        <div className="gifts-intro">
          <p>A sua presença é o mais importante! 💙</p>
          <p>E, para presentear, sugerimos:</p>
          <h3>Fraldas + Lenços Umedecidos</h3>
        </div>

        <div className="roulette-container glass-panel">
          <div className="gift-icon">
            <Package size={56} color="var(--secondary-color)" />
          </div>

          {/* Área de display */}
          <div className="roulette-display">
            {isSpinning ? (
              /* Girando */
              <div className="spin-display">
                <span className="roulette-text spinning">{displayedSize}</span>
              </div>
            ) : selectedSize ? (
              /* Resultado revelado */
              <div className={`result-block ${revealed ? 'revealed' : ''}`}>
                <p className="result-label">Seu tamanho sugerido é</p>
                <span className="roulette-text final">{selectedSize}</span>
                {info && (
                  <>
                    <p className="result-size-name">{info.label}</p>
                    <p className="result-tip">{info.tip}</p>
                    <p className="result-reminder">
                      🛍️ Traga um pacote de fralda <strong>{selectedSize}</strong> + lenços umedecidos!
                    </p>
                  </>
                )}
              </div>
            ) : (
              /* Estado inicial */
              <p className="roulette-placeholder">
                Clique abaixo para descobrir o tamanho sugerido
              </p>
            )}
          </div>

          <button
            className="btn-primary roulette-btn"
            onClick={generateSuggestion}
            disabled={isSpinning || !!selectedSize}
          >
            {isSpinning ? (
              <>Sorteando <RefreshCw size={18} className="spin-icon" /></>
            ) : selectedSize ? (
              <>Tamanho Confirmado <Gift size={18} /></>
            ) : (
              <>Descobrir Meu Tamanho <Gift size={18} /></>
            )}
          </button>

          {/* Nota de rodapé */}
          {!selectedSize && !isSpinning && (
            <p className="roulette-note">
              O tamanho é sorteado automaticamente com base na necessidade do Ezequiel.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GiftSuggestions;
