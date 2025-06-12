/**
 * COMPONENTE ORGANISMO: Header
 * 
 * CONCEPTO: Organismos en Atomic Design
 * Los organismos son componentes más complejos que combinan
 * moléculas y átomos para formar secciones distintivas de la interfaz.
 * El Header es responsable de mostrar la navegación y branding de la app.
 */

import React from 'react';
import Text from '../../atoms/Text/Text';
import './Header.css';

/**
 * Componente Header - Organismo para la cabecera de la aplicación
 */
const Header = ({ 
  title = "Rick and Morty Characters", 
  subtitle = "Explorando los conceptos de React" 
}) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <Text 
            variant="title" 
            color="white" 
            className="header__title"
          >
            {title}
          </Text>
          
          {subtitle && (
            <Text 
              variant="body" 
              color="white" 
              className="header__subtitle"
            >
              {subtitle}
            </Text>
          )}
        </div>

        <div className="header__decoration">
          <span className="header__icon">🛸</span>
          <span className="header__icon">👽</span>
          <span className="header__icon">🧪</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 