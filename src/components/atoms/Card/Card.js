/**
 * COMPONENTE ATÓMICO: Card
 * 
 * CONCEPTO: Composición de Componentes
 * Este componente demuestra el patrón de composición en React,
 * donde los componentes actúan como contenedores que pueden
 * alojar otros componentes o contenido mediante props.children.
 * 
 * CONCEPTO: Children Props
 * La prop 'children' es especial en React y contiene cualquier
 * contenido que se pase entre las etiquetas de apertura y cierre
 * del componente.
 */

import React from 'react';
import './Card.css';

/**
 * Componente Card - Átomo para crear tarjetas contenedoras reutilizables
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido hijo del componente
 * @param {string} props.className - Clases CSS adicionales
 * @param {boolean} props.hoverable - Si la tarjeta tiene efecto hover
 * @param {string} props.variant - Variante de la tarjeta (default, elevated, outlined)
 * @param {function} props.onClick - Función que se ejecuta al hacer click
 * @returns {JSX.Element} Elemento JSX de la tarjeta
 * 
 * CONCEPTO: Valores por Defecto en Props
 * Utilizamos destructuring con valores por defecto para manejar props opcionales
 */
const Card = ({ 
  children, 
  className = '', 
  hoverable = false,
  variant = 'default',
  onClick,
  ...props 
}) => {
  /**
   * CONCEPTO: Construcción Dinámica de Clases CSS
   * Creamos las clases CSS dinámicamente basadas en las props
   */
  const cardClasses = [
    'card',
    `card--${variant}`,
    hoverable && 'card--hoverable',
    onClick && 'card--clickable',
    className
  ].filter(Boolean).join(' ');

  /**
   * CONCEPTO: Spread Operator
   * Utilizamos el spread operator (...props) para pasar todas las props
   * adicionales al elemento DOM subyacente
   */
  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {/* 
        CONCEPTO: Children
        {children} renderiza cualquier contenido que se pase
        entre las etiquetas de apertura y cierre del componente
      */}
      {children}
    </div>
  );
};

export default Card; 