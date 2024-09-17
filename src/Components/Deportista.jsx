import React from 'react';

const Deportista = ({ nombre, habilidades, imagen, id, onSelect }) => {
  console.log('ID recibido en Deportista:', id); // Esto te ayudará a depurar
  
  const handleClick = () => {
    if (onSelect && typeof onSelect === 'function') {
      onSelect(id);
    }
  };

  return (
    <div className="deportista" onClick={handleClick}>
      <img src={imagen} alt={nombre} className="deportista-imagen" />
      <div className="deportista-info">
        <h2>{nombre}</h2>
        <ul className="deportista-habilidades">
          {habilidades.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Deportista;
