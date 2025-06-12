/**
 * COMPONENTE ORGANISMO: Footer
 * 
 * CONCEPTO: Componente de Presentación
 * El Footer es un componente puramente presentacional que muestra
 * información estática como créditos y enlaces.
 */

import React from 'react';
import Text from '../../atoms/Text/Text';
import './Footer.css';

/**
 * Componente Footer - Organismo para el pie de página
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <Text variant="body" color="white" className="footer__text">
            Desarrollado con ❤️ por{' '}
            <strong className="footer__developer">Mauricio Rivero - MRD2</strong>
          </Text>
          
          <Text variant="caption" color="white" className="footer__year">
            © {currentYear} - Proyecto educativo sobre conceptos de React
          </Text>
        </div>
        
        <div className="footer__tech">
          <Text variant="caption" color="white">
            Construido con React.js y Rick and Morty API
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 