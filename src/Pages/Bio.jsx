import React from 'react';
import { useParams } from 'react-router-dom';

function Bio() {
  const { id } = useParams();
  
  console.log('ID recibido:', id); // Esto te ayudará a depurar
  
  return (
    <div>
      <h1>Bio del Deportista</h1>
      <p>ID del Deportista: {id}</p>
      {/* Aquí puedes mostrar la información del deportista basada en el ID */}
    </div>
  );
}

export default Bio;
