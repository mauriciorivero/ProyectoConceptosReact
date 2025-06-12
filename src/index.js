/**
 * CONCEPTO: Punto de entrada de React
 * Este archivo es el punto de entrada principal donde React se monta en el DOM.
 * Aquí vemos cómo React toma control del elemento con id "root" y renderiza nuestra aplicación.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * CONCEPTO: Renderizado
 * ReactDOM.createRoot() crea un root de React en el elemento DOM especificado.
 * El método render() toma nuestro componente App y lo renderiza en el Virtual DOM,
 * que luego se sincroniza con el DOM real.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * CONCEPTO: JSX
 * <App /> es JSX (JavaScript XML) - una extensión de sintaxis que permite
 * escribir elementos HTML dentro de JavaScript. Babel transpila esto a
 * llamadas de React.createElement().
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 