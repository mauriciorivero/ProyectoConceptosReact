/**
 * COMPONENTE PRINCIPAL: App
 * 
 * CONCEPTO: Componente Raíz
 * Este es el componente raíz de nuestra aplicación React.
 * Actúa como un template que organiza y estructura todos los
 * organismos para formar la página completa.
 * 
 * CONCEPTO: Composición de Componentes
 * Demuestra cómo los componentes React se componen entre sí
 * para formar interfaces complejas a partir de piezas más simples.
 * 
 * CONCEPTO: Arquitectura de la Aplicación
 * Siguiendo Atomic Design, este componente funciona como un template
 * que organiza organismos (Header, CharacterList, Footer) para
 * crear la estructura completa de la aplicación.
 * 
 * # Instalar dependencias
 * npm install
 * 
 * # Ejecutar en modo desarrollo
 * npm start
 */

import React from 'react';
import Header from './components/organisms/Header/Header';
import CharacterList from './components/organisms/CharacterList/CharacterList';
import Footer from './components/organisms/Footer/Footer';
import './App.css';

/**
 * Componente App - Template principal de la aplicación
 * 
 * @returns {JSX.Element} Elemento JSX de la aplicación completa
 * 
 * CONCEPTO: Estructura de la Aplicación
 * Este componente define la estructura básica de la aplicación:
 * - Header: Contiene el título y navegación
 * - Main: Contiene el contenido principal (lista de personajes)
 * - Footer: Contiene información del desarrollador
 * 
 * CONCEPTO: Layout Components
 * Utilizamos componentes de layout para organizar la estructura
 * visual de la aplicación de manera semántica y accesible.
 */
function App() {
  /**
   * CONCEPTO: JSX Return
   * El return de un componente React debe devolver un solo elemento padre.
   * Utilizamos un div con className "app" como contenedor principal.
   * 
   * CONCEPTO: Elementos Semánticos
   * Aunque React permite usar cualquier elemento HTML, utilizamos
   * elementos semánticos apropiados para mejorar la accesibilidad.
   */
  return (
    <div className="app">
      {/* 
        CONCEPTO: Composición de Organismos
        Combinamos diferentes organismos para formar la página completa.
        Cada organismo mantiene su responsabilidad específica.
      */}
      
      {/* 
        CONCEPTO: Componente Header
        El Header se renderiza una sola vez y mantiene información estática
      */}
      <Header 
        title="Rick and Morty Characters"
        subtitle="Aplicación didáctica para aprender conceptos de React"
      />
      
      {/* 
        CONCEPTO: Componente Principal con Estado
        CharacterList es un componente inteligente que maneja:
        - Estado de la aplicación
        - Efectos secundarios (API calls)
        - Lógica de negocio
      */}
      <CharacterList />
      
      {/* 
        CONCEPTO: Componente Footer
        El Footer proporciona información adicional y cierre visual
      */}
      <Footer />
    </div>
  );
}

/**
 * CONCEPTO: Export Default
 * Exportamos el componente como export default para que pueda
 * ser importado fácilmente desde otros archivos.
 * 
 * CONCEPTO: Modularidad
 * Cada componente es un módulo independiente que puede ser
 * reutilizado y mantenido por separado.
 */
export default App; 