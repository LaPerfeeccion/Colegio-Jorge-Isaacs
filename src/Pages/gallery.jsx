import React from 'react';
import './gallery.css';
import Appbar from '../Components/Appbar';

const Gallery = () => {
  const media = [
    { type: "image", src: "./public/imagenes/1.jpeg" },
    { type: "image", src: "./public/imagenes/2.jpeg" },
    { type: "image", src: "./public/imagenes/3.jpeg" },
    { type: "reel", src: "https://www.instagram.com/reel/C_UAZ1xvOXJ/embed" }, // Enlace embebido de Instagram
    { type: "image", src: "./public/imagenes/4.jpeg" },
    { type: "reel", src: "https://www.instagram.com/reel/C_T_MJaPycA/embed" }, // Otro Reel embebido de Instagram
    { type: "image", src: "./public/imagenes/5.jpeg" },
    { type: "image", src: "./public/imagenes/6.jpeg" },
    { type: "reel", src: "https://www.instagram.com/reel/C66TluFL-dt/embed" },
    { type: "reel", src: "https://www.instagram.com/reel/C6c5sLBtU96/embed" },
    { type: "reel", src: "https://www.instagram.com/reel/C6PgNsoLqub/embed" },
    { type: "reel", src: "https://www.instagram.com/reel/C6JV--yrpXE/embed" },
    { type: "reel", src: "https://www.instagram.com/reel/C6F12zTOf1X/embed" },
    { type: "reel", src: "https://www.instagram.com/reel/C5bQtdML7ZP/embed" },
    { type: "reel", src: "https://www.instagram.com/reel/Cz2GOhmrEBX/embed" },
    { type: "reel", src: "https://www.instagram.com/reel/CzWKD1ZrEyF/embed" },
    { type: "reel", src: "https://www.instagram.com/reel/CzToVvCrBMB/embed" },
  ];

  return (
    <div className="pint">
      <Appbar />
      <div className="gallery">
        {media.map((item, index) => (
          item.type === "image" ? (
            <img key={index} className='pines' src={item.src} alt={`Imagen ${index + 1}`} />
          ) : item.type === "video" ? (
            <video key={index} className='pines' controls>
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              key={index}
              className='pines'
              src={item.src}
              width="320"
              height="480"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Instagram Reel ${index + 1}`}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Gallery;
