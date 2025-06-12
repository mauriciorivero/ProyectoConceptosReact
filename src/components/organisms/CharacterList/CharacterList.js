/**
 * COMPONENTE ORGANISMO: CharacterList
 * 
 * CONCEPTO: Componente de Contenedor (Container Component)
 * Este es un componente inteligente que maneja estado, efectos secundarios
 * y lógica de negocio. Se encarga de obtener datos de la API y pasarlos
 * a componentes presentacionales.
 * 
 * CONCEPTO: Hooks de React
 * Utilizamos varios hooks para demostrar el manejo del estado y
 * el ciclo de vida en componentes funcionales.
 */

import React, { useState, useEffect } from 'react';
import CharacterCard from '../../molecules/CharacterCard/CharacterCard';
import Text from '../../atoms/Text/Text';
import './CharacterList.css';

/**
 * Componente CharacterList - Organismo para mostrar la lista de personajes
 * 
 * @returns {JSX.Element} Elemento JSX de la lista de personajes
 * 
 * CONCEPTO: useState Hook
 * useState permite agregar estado local a componentes funcionales.
 * Devuelve un array con [valor, setter] para el estado.
 * 
 * CONCEPTO: useEffect Hook
 * useEffect permite realizar efectos secundarios en componentes funcionales.
 * Es equivalente a componentDidMount, componentDidUpdate y componentWillUnmount
 * de los componentes de clase.
 */
const CharacterList = () => {
  /**
   * CONCEPTO: Estado Local con useState
   * Definimos múltiples estados para manejar diferentes aspectos del componente
   */
  const [characters, setCharacters] = useState([]); // Lista de personajes
  const [loading, setLoading] = useState(true);     // Estado de carga
  const [error, setError] = useState(null);         // Manejo de errores
  const [page, setPage] = useState(1);              // Paginación

  /**
   * CONCEPTO: Función Asíncrona para Fetch de Datos
   * Esta función demuestra cómo hacer peticiones HTTP y manejar
   * respuestas asíncronas en React
   */
  const fetchCharacters = async (pageNumber = 1) => {
    try {
      setLoading(true);
      setError(null);

      /**
       * CONCEPTO: Fetch API
       * Utilizamos fetch para hacer peticiones HTTP a la API de Rick and Morty
       */
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
      
      /**
       * CONCEPTO: Manejo de Errores HTTP
       * Verificamos si la respuesta es exitosa antes de procesar los datos
       */
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      
      /**
       * CONCEPTO: Actualización del Estado
       * Actualizamos el estado con los nuevos datos recibidos de la API
       */
      if (pageNumber === 1) {
        setCharacters(data.results);
      } else {
        // CONCEPTO: Spread Operator para agregar elementos al array
        setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
      }
      
    } catch (error) {
      /**
       * CONCEPTO: Manejo de Errores
       * Capturamos y manejamos errores de red o de la API
       */
      console.error('Error al cargar personajes:', error);
      setError(error.message);
    } finally {
      /**
       * CONCEPTO: Finally Block
       * Este bloque se ejecuta siempre, sin importar si hubo error o no
       */
      setLoading(false);
    }
  };

  /**
   * CONCEPTO: useEffect - Ciclo de Vida del Componente
   * Este efecto se ejecuta cuando el componente se monta (equivale a componentDidMount)
   * El array vacío [] como segundo parámetro significa que solo se ejecuta una vez
   */
  useEffect(() => {
    fetchCharacters(1);
  }, []); // Array de dependencias vacío = ejecutar solo una vez

  /**
   * CONCEPTO: Función de Manejo de Eventos
   * Esta función maneja el click en las tarjetas de personajes
   */
  const handleCharacterClick = (character) => {
    /**
     * CONCEPTO: Callback / Event Handler
     * Demostramos cómo manejar eventos y realizar acciones basadas en interacciones del usuario
     */
    alert(`Has seleccionado a ${character.name}!\n\nEste es un ejemplo de cómo manejar eventos en React.`);
  };

  /**
   * CONCEPTO: Función para Cargar Más Contenido
   * Implementamos lazy loading para demostrar actualización de estado
   */
  const loadMoreCharacters = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCharacters(nextPage);
  };

  /**
   * CONCEPTO: Renderizado Condicional
   * Mostramos diferentes contenidos basados en el estado actual del componente
   */
  if (error) {
    return (
      <div className="character-list character-list--error">
        <Text variant="title" color="error">
          ❌ Error al cargar personajes
        </Text>
        <Text variant="body" color="error">
          {error}
        </Text>
        <button 
          className="character-list__retry-button"
          onClick={() => fetchCharacters(1)}
        >
          🔄 Intentar de nuevo
        </button>
      </div>
    );
  }

  /**
   * CONCEPTO: JSX - Composición de Elementos
   * Componemos la interfaz utilizando JSX que combina HTML y JavaScript
   */
  return (
    <main className="character-list">
      <div className="character-list__container">
        <Text variant="subtitle" color="white" className="character-list__title">
          Personajes de Rick and Morty
        </Text>
        
        <Text variant="body" color="white" className="character-list__description">
          Esta aplicación demuestra los conceptos fundamentales de React consumiendo la API oficial.
        </Text>

        {/* 
          CONCEPTO: Renderizado de Lista
          Utilizamos el método map() para renderizar una lista de componentes
          basada en un array de datos
        */}
        <div className="character-list__grid">
          {characters.map((character) => (
            /*
              CONCEPTO: Key Prop
              React requiere una prop 'key' única para cada elemento en una lista
              para optimizar el proceso de reconciliación del Virtual DOM
            */
            <CharacterCard
              key={character.id}
              character={character}
              onClick={handleCharacterClick}
            />
          ))}
        </div>

        {/* 
          CONCEPTO: Renderizado Condicional con Operador Lógico &&
          Solo mostramos el indicador de carga si loading es true
        */}
        {loading && (
          <div className="character-list__loading">
            <Text variant="body" color="white">
              ⏳ Cargando personajes...
            </Text>
          </div>
        )}

        {/* 
          CONCEPTO: Botón para Cargar Más Contenido
          Demostramos cómo actualizar el estado para agregar más datos
        */}
        {!loading && characters.length > 0 && (
          <div className="character-list__load-more">
            <button 
              className="character-list__load-button"
              onClick={loadMoreCharacters}
              disabled={loading}
            >
              📱 Cargar más personajes
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default CharacterList; 