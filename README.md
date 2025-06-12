# 🛸 Rick and Morty React Concepts App

Una aplicación React educativa que demuestra los conceptos fundamentales de React mientras consume la API oficial de Rick and Morty.

## 🎯 Propósito

Esta aplicación fue diseñada para enseñar los conceptos básicos de React de manera práctica e interactiva, incluyendo:

- **Componentes Funcionales**
- **JSX (JavaScript XML)**
- **Estado con useState**
- **Props y Props Drilling**
- **Renderizado y Renderizado Condicional**
- **Ciclo de vida con useEffect**
- **Virtual DOM**
- **Manejo de Eventos**
- **Consumo de APIs**
- **Atomic Design Pattern**

## 🏗️ Arquitectura - Atomic Design

La aplicación sigue la metodología **Atomic Design** para una estructura escalable y mantenible:

### 🔸 Átomos (Atoms)
- `Text` - Componente para mostrar texto con diferentes variantes
- `Image` - Componente para imágenes con manejo de estados de carga
- `Card` - Contenedor reutilizable para tarjetas

### 🔹 Moléculas (Molecules)
- `CharacterCard` - Combina átomos para mostrar información de un personaje

### 🔷 Organismos (Organisms)
- `Header` - Cabecera de la aplicación
- `Footer` - Pie de página con créditos
- `CharacterList` - Lista principal que consume la API y maneja el estado

### 🔶 Templates
- `App` - Template principal que organiza todos los organismos

## 🚀 Cómo ejecutar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```

3. **Abrir en el navegador:**
   La aplicación se abrirá automáticamente en `http://localhost:3000`

## 📚 Conceptos de React Implementados

### 1. **Componentes Funcionales**
```javascript
const MyComponent = ({ props }) => {
  return <div>{props.children}</div>;
};
```

### 2. **JSX**
```javascript
return (
  <div className="container">
    <h1>Título</h1>
    <p>Párrafo</p>
  </div>
);
```

### 3. **Estado con useState**
```javascript
const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(true);
```

### 4. **Props**
```javascript
<CharacterCard 
  character={character} 
  onClick={handleClick} 
/>
```

### 5. **useEffect para Ciclo de Vida**
```javascript
useEffect(() => {
  fetchCharacters();
}, []); // Se ejecuta al montar el componente
```

### 6. **Renderizado Condicional**
```javascript
{loading && <div>Cargando...</div>}
{error && <div>Error: {error}</div>}
```

### 7. **Renderizado de Listas**
```javascript
{characters.map(character => (
  <CharacterCard key={character.id} character={character} />
))}
```

## 🌐 API Utilizada

- **Rick and Morty API**: `https://rickandmortyapi.com/api/character`
- Documentación: [rickandmortyapi.com](https://rickandmortyapi.com/documentation)

## 📱 Características

- ✅ **Responsive Design** - Se adapta a todos los tamaños de pantalla
- ✅ **Carga Progresiva** - Implementa lazy loading para más personajes
- ✅ **Manejo de Errores** - Gestiona errores de red y API
- ✅ **Estados de Carga** - Feedback visual durante las operaciones
- ✅ **Interactividad** - Click en tarjetas para demostrar event handling
- ✅ **Animaciones CSS** - Mejora la experiencia de usuario

## 🛠️ Tecnologías

- **React 18** - Biblioteca principal
- **JavaScript ES6+** - Lenguaje de programación
- **CSS3** - Estilos y animaciones
- **Fetch API** - Consumo de datos
- **Rick and Morty API** - Fuente de datos

## 👨‍💻 Desarrollador

**Mauricio Rivero - MRD2**

Esta aplicación fue creada con fines educativos para demostrar los conceptos fundamentales de React de manera práctica y comprensible.

## 📖 Estructura de Archivos

```
src/
├── components/
│   ├── atoms/
│   │   ├── Text/
│   │   ├── Image/
│   │   └── Card/
│   ├── molecules/
│   │   └── CharacterCard/
│   └── organisms/
│       ├── Header/
│       ├── Footer/
│       └── CharacterList/
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🎓 Objetivos de Aprendizaje

Al estudiar esta aplicación, comprenderás:

1. Cómo estructurar una aplicación React
2. La diferencia entre componentes presentacionales y contenedores
3. Cómo manejar estado y efectos secundarios
4. Patrones de composición de componentes
5. Consumo de APIs en React
6. Buenas prácticas de desarrollo React

¡Explora el código y aprende React de manera práctica! 🚀 