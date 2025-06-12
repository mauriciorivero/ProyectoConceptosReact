/**
 * COMPONENTE ATÓMICO: Text
 * 
 * CONCEPTO: Componente Funcional
 * Los componentes funcionales son funciones de JavaScript que reciben props
 * como parámetro y retornan JSX para describir la interfaz de usuario.
 * Son más simples y eficientes que los componentes de clase.
 * 
 * CONCEPTO: Props
 * Las props (propiedades) son argumentos que se pasan a los componentes React.
 * Permiten que los componentes sean reutilizables y dinámicos.
 * Las props son inmutables (no se pueden modificar dentro del componente).
 */

import React from 'react';
import './Text.css';

/**
 * Componente Text - Átomo para mostrar texto con diferentes variantes
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.children - Contenido de texto a mostrar
 * @param {string} props.variant - Variante del texto (title, subtitle, body, caption)
 * @param {string} props.color - Color del texto
 * @param {string} props.className - Clases CSS adicionales
 * @returns {JSX.Element} Elemento JSX del texto
 * 
 * CONCEPTO: JSX
 * JSX permite escribir elementos HTML dentro de JavaScript.
 * React transpila JSX a llamadas React.createElement()
 */
const Text = ({ 
  children, 
  variant = 'body', 
  color = 'default', 
  className = '',
  ...props 
}) => {
  /**
   * CONCEPTO: Template Literals y Clases Dinámicas
   * Construimos las clases CSS dinámicamente basadas en las props
   */
  const textClasses = `text text--${variant} text--${color} ${className}`.trim();

  /**
   * CONCEPTO: Renderizado Condicional
   * Dependiendo de la variante, renderizamos diferentes elementos HTML
   */
  switch (variant) {
    case 'title':
      return <h1 className={textClasses} {...props}>{children}</h1>;
    case 'subtitle':
      return <h2 className={textClasses} {...props}>{children}</h2>;
    case 'caption':
      return <small className={textClasses} {...props}>{children}</small>;
    default:
      return <p className={textClasses} {...props}>{children}</p>;
  }
};

export default Text; 