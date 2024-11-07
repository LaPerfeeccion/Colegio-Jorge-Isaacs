import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const videoIds = ['lD2FV6JRQ9g', '93XkLmpjCzY', 'rBOuV6NBaOY', 'jaluGm4INck']; // IDs de los videos

const VideoComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length); // Cambia al siguiente video
    }, 7000); // Cambia el video cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const videoOptions = {
    playerVars: {
      autoplay: 1, // Reproducción automática
      controls: 0, // Sin controles
      loop: 1, // Repetir
      mute: 1 // Silenciar para permitir autoplay
    }
  };

  return (
    <div >
      <YouTube videoId={videoIds[currentIndex]} opts={{
          ...videoOptions,
          width: '400px',
          height: '300px',
        }} />
    </div>
  );
};

export default VideoComponent;
