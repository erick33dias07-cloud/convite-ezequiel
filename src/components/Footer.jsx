import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-message">Com amor, aguardamos sua presença neste momento tão especial 💙</p>
        <div className="footer-credits">
          <p>Ezequiel Baby Shower &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
