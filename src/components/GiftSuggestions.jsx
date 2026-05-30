import React, { useState, useEffect } from 'react';
import { Gift, Package, RefreshCw } from 'lucide-react';
import './GiftSuggestions.css';

const GiftSuggestions = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [displayedSize, setDisplayedSize] = useState('?');

  // Verifica se o dispositivo já tem um tamanho salvo
  useEffect(() => {
    const savedSize = localStorage.getItem('ezequiel_gift_size');
    if (savedSize) {
      setSelectedSize(savedSize);
      setDisplayedSize(savedSize);
    }
  }, []);

  const sizes = ['RN', 'P', 'M', 'G/GG'];

  const generateSuggestion = () => {
    setIsSpinning(true);
    let spins = 0;
    
    // Animação da roleta
    const interval = setInterval(() => {
      setDisplayedSize(sizes[Math.floor(Math.random() * sizes.length)]);
      spins++;
      
      if (spins > 20) {
        clearInterval(interval);
        
        // Sorteio com pesos baseados nos dados do usuário:
        // 5 em 10 (50%) -> M
        // 2 em 10 (20%) -> P
        // 2 em 10 (20%) -> G/GG
        // 1 em 10 (10%) -> RN
        const rand = Math.random();
        let finalSize;
        if (rand < 0.50) finalSize = 'M';
        else if (rand < 0.70) finalSize = 'P';
        else if (rand < 0.90) finalSize = 'G/GG';
        else finalSize = 'RN';
        
        setDisplayedSize(finalSize);
        setSelectedSize(finalSize);
        localStorage.setItem('ezequiel_gift_size', finalSize); // Salva para impedir re-sorteio
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <section className="section gifts-section">
      <div className="container">
        <h2 className="title">Sugestão de Presente</h2>
        <div className="gifts-intro">
          <p>A sua presença é o mais importante! 💙</p>
          <p>E, para presentear, sugerimos:</p>
          <h3>Fraldas + Lenços Umedecidos</h3>
        </div>
        
        <div className="roulette-container glass-panel fade-in">
          <div className="gift-icon">
            <Package size={60} color="var(--secondary-color)" />
          </div>
          
          <div className="roulette-display">
            {isSpinning ? (
              <span className="roulette-text spinning">{displayedSize}</span>
            ) : selectedSize ? (
              <div className="result-container fade-in">
                <span className="roulette-text final">{selectedSize}</span>
              </div>
            ) : (
              <p className="roulette-placeholder">Clique abaixo para descobrir o tamanho sugerido</p>
            )}
          </div>

          <button 
            className="btn-primary" 
            onClick={generateSuggestion} 
            disabled={isSpinning || selectedSize}
          >
            {isSpinning ? (
              <>Sorteando <RefreshCw size={18} className="spin-icon" /></>
            ) : selectedSize ? (
              <>Tamanho Selecionado <Gift size={18} /></>
            ) : (
              <>Descobrir Tamanho <Gift size={18} /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftSuggestions;
