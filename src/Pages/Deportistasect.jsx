import React, { useEffect, useState } from 'react';
import { Backdrop, Grid, Typography } from '@mui/material';
import './Deportistasect.css';
import VideoComponent from '../Components/VideoComponent';
import Appbar from '../Components/Appbar';
import Footer from '../Components/Footer';

function Deportistaect() {
  const deportistas = [
    {
      id: 1,
      nombre: 'Daniela Pelayo',
      habilidades: ['Natación'],
      imagen: './public/imagenes/36.jpeg',
      bio: 'Daniela es una nadadora destacada con múltiples medallas en competencias nacionales.',
      instagram: 'https://instagram.com/daniela'
    },
    {
      id: 2,
      nombre: 'Samuel Medina',
      habilidades: ['Futbol'],
      imagen: './public/imagenes/Samuel.jpeg',
      bio: 'Samuel es un futbolista talentoso con experiencia en ligas juveniles.',
      instagram: 'https://instagram.com/samuel'
    },
    {
      id: 3,
      nombre: 'Carlos',
      habilidades: ['Natación'],
      imagen: './public/imagenes/Carlos.jpeg',
      bio: 'Carlos es un nadador prometedor con grandes expectativas para el futuro.',
      instagram: 'https://instagram.com/carlos'
    },
    {
      id: 4,
      nombre: 'Isabella Payares',
      habilidades: ['Natación'],
      imagen: './public/imagenes/Paya.jpg',
      bio: 'Isabella es una nadadora versátil con experiencia en diferentes estilos.',
      instagram: 'https://instagram.com/isabella'
    },
    {
      id: 5,
      nombre: 'Janic',
      habilidades: ['Futbol'],
      imagen: './public/imagenes/Jani.jpeg',
      bio: 'Janic es un futbolista rápido y hábil, especializado en pases precisos.',
      instagram: 'https://instagram.com/janic'
    },
    {
      id: 6,
      nombre: 'Juan Andrés',
      habilidades: ['Futbol'],
      imagen: './public/imagenes/Andre.jpg',
      bio: 'Juan Andrés es un defensor sólido con gran capacidad para anticiparse.',
      instagram: 'https://instagram.com/juan'
    }
  ];

  const [visibleDeportistas, setVisibleDeportistas] = useState([deportistas[0], deportistas[1]]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Función para manejar el evento de arrastrar
    const track = document.getElementById('image-track');
    if (!track) return;

    let mouseDownAt = 0;
    let prevPercentage = 0;

    const onMouseDown = (e) => {
      mouseDownAt = e.clientX;
    };

    const onMouseUp = () => {
      mouseDownAt = 0;
      prevPercentage = parseFloat(track.dataset.percentage) || 0;
    };

    const onMouseMove = (e) => {
      if (mouseDownAt === 0) return;

      const mouseDelta = mouseDownAt - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      let nextPercentage = prevPercentage + percentage;
      nextPercentage = Math.max(Math.min(nextPercentage, 0), -100); // Limitar el porcentaje

      track.dataset.percentage = nextPercentage;

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

      for (const imagel of track.getElementsByClassName("imagel")) {
        imagel.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    };

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    // Cleanup
    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleDeportistas((prev) => {
        let nextIndex1 = (currentIndex + 1) % deportistas.length;
        let nextIndex2 = (currentIndex + 2) % deportistas.length;
        setCurrentIndex(nextIndex1);
        return [deportistas[nextIndex1], deportistas[nextIndex2]];
      });
    }, 5000); // Cambia deportistas cada 5 segundos
    return () => clearInterval(interval);
  }, [currentIndex, deportistas]);

  const handleSelectDeportista = (deportista) => {
    window.open(deportista.instagram, '_blank');
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const showInitialScreen = async () => {
      handleOpen();
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } finally {
        handleClose();
        setShowContent(true);
      }
    };
    
    showInitialScreen();
  }, []);

  return (
    <>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundImage: './public/Imagenes/Imagendelcolegio.png'
        }}
        open={open}
      >
        <div className="todo">
          <img className="in" src="./public/Imagenes/it.png" width={'100%'} alt="" />
          <div className="progress"></div>
        </div>
      </Backdrop>

      {/* Overlay temporal */}
      {!showContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 9999,
          transition: 'opacity 0.5s ease-in-out'
        }}></div>
      )}

      <Grid className="for">
        <Appbar />
        <div className="stacked">
          <div className="overlays3">
            <h1 className="ti">Deportistas</h1>
          </div>
          
          <div className="media">
            <img className="to" src="./public/imagenes/ye.jpg" alt="" />
          </div>
        </div>

      <div className="all2">
        <section className="cort">
          <h1 className="othe"> Jugadores </h1>
          <section className="ui">
            {visibleDeportistas.map((deportista) => (
              <div key={deportista.id}>
                <div className="Carta">
                  <div className="slid">
                    <div className="deportista-card" onClick={() => handleSelectDeportista(deportista)}>
                      <img src={deportista.imagen} alt={deportista.nombre} className="deportista-image" />
                      <div className="overlays">
                        <h6 className="deportista-name">{deportista.nombre}</h6>
                        <h6 className="deportista-habilidades">{deportista.habilidades.join(', ')}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>

        <div className="tags">
          <h1 className="depo"> Deportes</h1>
          {['Natación', 'Gimnasia Artística', 'Baloncesto', 'Futbol', 'Volleyball'].map((deporte) => (
            <div className="car" key={deporte}>
              <p className="po"> {deporte} </p>
            </div>
          ))}
        </div>

        <div className="video-slider">
          <div className="video-slide">
            <VideoComponent />
          </div>
        </div>
      </div>

      <div className="yop">
        <Typography textAlign={'center'} justifyContent={'center'} variant='h3' sx={{color:"white", fontFamily: 'Dancing Script'
        }}>
            Imagenes
        </Typography>
        <div id="image-track" data-percentage="0">
          <img className="imagel" src="./public/imagenes/38.jpeg" alt="" draggable="false" />
          <img className="imagel" src="./public/imagenes/31.jpeg" alt="" draggable="false" />
          <img className="imagel" src="./public/imagenes/34.jpeg" alt="" draggable="false" />
          <img className="imagel" src="./public/imagenes/30.jpeg" alt="" draggable="false" />
          <img className="imagel" src="./public/imagenes/36.jpeg" alt="" draggable="false" />
          <img className="imagel" src="./public/imagenes/37.jpeg" alt="" draggable="false" />
        </div>
      </div>
      <Footer></Footer>
    </Grid>
 )}
 </>
);
}

export default Deportistaect;
