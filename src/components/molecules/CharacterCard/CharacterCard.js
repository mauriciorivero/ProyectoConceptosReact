/**
 * COMPONENTE MOLÉCULA: CharacterCard
 * 
 * CONCEPTO: Composición de Componentes
 * Las moléculas combinan átomos para formar componentes más complejos.
 * Este componente demuestra cómo reutilizar componentes atómicos
 * para crear interfaces más elaboradas.
 * 
 * CONCEPTO: Props Drilling
 * Mostramos cómo los datos se pasan de componentes padre a hijo
 * a través de props, permitiendo la comunicación entre componentes.
 */

import React from 'react';
import Card from '../../atoms/Card/Card';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import './CharacterCard.css';

/**
 * Componente CharacterCard - Molécula para mostrar información de un personaje
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.character - Objeto con datos del personaje
 * @param {number} props.character.id - ID del personaje
 * @param {string} props.character.name - Nombre del personaje
 * @param {string} props.character.image - URL de la imagen del personaje
 * @param {string} props.character.status - Estado del personaje (Alive, Dead, unknown)
 * @param {string} props.character.species - Especie del personaje
 * @param {string} props.character.gender - Género del personaje
 * @param {Object} props.character.origin - Información del origen
 * @param {Object} props.character.location - Información de la ubicación actual
 * @param {function} props.onClick - Función que se ejecuta al hacer click en la tarjeta
 * @returns {JSX.Element} Elemento JSX de la tarjeta del personaje
 * 
 * CONCEPTO: Destructuring de Props
 * Extraemos las propiedades que necesitamos del objeto props
 * para un código más limpio y legible.
 */
const CharacterCard = ({ character, onClick }) => {
  /**
   * CONCEPTO: Validación Básica
   * Verificamos que tengamos los datos necesarios antes de renderizar
   */
  if (!character) {
    return null;
  }

  /**
   * CONCEPTO: Extracción de Datos
   * Extraemos los datos que necesitamos del objeto character
   */
  const {
    id,
    name,
    image,
    status,
    species,
    gender,
    origin,
    location
  } = character;

  /**
   * CONCEPTO: Funciones Helper para el Renderizado
   * Creamos funciones auxiliares para determinar estilos o valores
   * basados en los datos del personaje
   */
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'success';
      case 'dead':
        return 'error';
      default:
        return 'warning';
    }
  };

  const getStatusEmoji = (status) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return '🟢';
      case 'dead':
        return '🔴';
      default:
        return '🟡';
    }
  };

  /**
   * CONCEPTO: Renderizado Condicional y Composición
   * Utilizamos JSX para componer la interfaz combinando múltiples
   * componentes atómicos. Cada átomo mantiene su responsabilidad específica.
   */
  return (
    <Card 
      className="character-card"
      variant="elevated"
      hoverable={true}
      onClick={() => onClick && onClick(character)}
    >
      {/* 
        CONCEPTO: Uso de Componentes Atómicos
        Reutilizamos el componente Image con props específicas
      */}
      <div className="character-card__image">
        <Image
          src={image}
          alt={`${name} - Personaje de Rick and Morty`}
        />
      </div>

      <div className="character-card__content">
        {/* 
          CONCEPTO: Props Dinámicas
          Pasamos diferentes variantes y colores basados en los datos
        */}
        <Text variant="subtitle" className="character-card__name">
          {name}
        </Text>

        <div className="character-card__status">
          <Text 
            variant="body" 
            color={getStatusColor(status)}
            className="character-card__status-text"
          >
            {getStatusEmoji(status)} {status} - {species}
          </Text>
        </div>

        <div className="character-card__details">
          <Text variant="caption" color="secondary">
            <strong>Género:</strong> {gender}
          </Text>
          
          {/* 
            CONCEPTO: Renderizado Condicional
            Solo mostramos la información si está disponible
          */}
          {origin?.name && (
            <Text variant="caption" color="secondary">
              <strong>Origen:</strong> {origin.name}
            </Text>
          )}

          {location?.name && (
            <Text variant="caption" color="secondary">
              <strong>Ubicación:</strong> {location.name}
            </Text>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CharacterCard; 