/**
 * COMPONENTE ATÓMICO: Image
 * 
 * CONCEPTO: Componente Funcional con Props
 * Este componente demuestra cómo las props permiten la reutilización
 * y personalización de componentes en React.
 * 
 * CONCEPTO: Manejo de Eventos
 * React utiliza SyntheticEvents que envuelven los eventos nativos del DOM
 * proporcionando una API consistente entre navegadores.
 */

import React, { useState } from 'react';
import './Image.css';

/**
 * Componente Image - Átomo para mostrar imágenes con fallback y lazy loading
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.src - URL de la imagen
 * @param {string} props.alt - Texto alternativo para accesibilidad
 * @param {string} props.className - Clases CSS adicionales
 * @param {function} props.onLoad - Callback cuando la imagen se carga
 * @param {function} props.onError - Callback cuando hay error al cargar
 * @returns {JSX.Element} Elemento JSX de la imagen
 * 
 * CONCEPTO: Hooks - useState
 * useState es un Hook que permite agregar estado local a componentes funcionales.
 * Devuelve un array con el valor actual del estado y una función para actualizarlo.
 */
const Image = ({ 
  src, 
  alt, 
  className = '', 
  onLoad = () => {}, 
  onError = () => {},
  ...props 
}) => {
  /**
   * CONCEPTO: Estado Local
   * El estado permite que los componentes "recuerden" información entre renders.
   * Aquí usamos el estado para controlar si la imagen se está cargando y si hubo error.
   */
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  /**
   * CONCEPTO: Funciones de Manejo de Eventos
   * Estas funciones manejan los eventos de carga y error de la imagen
   */
  const handleLoad = (event) => {
    setIsLoading(false);
    setHasError(false);
    onLoad(event);
  };

  const handleError = (event) => {
    setIsLoading(false);
    setHasError(true);
    onError(event);
  };

  /**
   * CONCEPTO: Renderizado Condicional
   * Mostramos diferentes contenidos basados en el estado del componente
   */
  if (hasError) {
    return (
      <div className={`image image--error ${className}`}>
        <span>❌ Error al cargar imagen</span>
      </div>
    );
  }

  return (
    <div className={`image-container ${className}`}>
      {/* CONCEPTO: Renderizado Condicional con Operador Lógico */}
      {isLoading && (
        <div className="image-loading">
          <span>⏳ Cargando...</span>
        </div>
      )}
      
      {/* 
        CONCEPTO: Eventos en JSX
        Los eventos en JSX se escriben en camelCase y reciben funciones como valores
      */}
      <img
        className={`image ${isLoading ? 'image--loading' : 'image--loaded'}`}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default Image; 