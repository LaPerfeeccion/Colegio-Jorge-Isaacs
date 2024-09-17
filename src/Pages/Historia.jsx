import React, { useState, useRef, useEffect } from 'react';
import Appbar from '../Components/Appbar';
import './Historia.css';
import { Backdrop, Grid, Stack, Typography } from '@mui/material';
import Footer from '../Components/Footer';
import Spot from '../Components/spot';

const Historia = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar la reproducción
  const audioRef = useRef(null); // Referencia al elemento de audio

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  useEffect(() => {
    const showBackdrop = async () => {
      handleOpen();
      try {
        await new Promise((resolve) => setTimeout(resolve, 6000)); // Espera de 6 segundos
      } finally {
        handleClose(); // Cierra el Backdrop
      }
    };
    
    showBackdrop();
  }, []);  // Esto asegura que se ejecute una sola vez cuando el componente se monta.
  

  return (
    <Stack>
      <Appbar />
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
      <img className="portada" src="/public/imagenes/Educando.png" alt="Portada" />
      <Stack sx={{ gap: '100px' }}>
        <Stack className="him" flexDirection={'column'} sx={{ justifyContent: 'space-around' }}>
          <Typography sx={{ textAlign: 'center', fontFamily: 'Dancing Script' }} variant="h3">
            Himno del Colegio Jorge Isaacs
          </Typography>
          <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            {/* <img className="rotate linear infinite" src="/public/imagenes/fondo.png" width="300px" alt="" /> */}
            {/* <button
              id="lo"
              onClick={togglePlayPause}
              style={{
                backgroundImage: `url(${isPlaying ? 'play.png' : 'paused.png'})`,
                backgroundRepeat: 'no-repeat'
              }}
            >
              <Typography sx={{ fontFamily: 'Dancing Script' }} variant="h5">
                {isPlaying ? 'Pause Music' : 'Play Music'}
              </Typography>
            </button>
            <audio ref={audioRef} src="/public/Audios/Himno.mp3" loop autoPlay /> */}
            <Spot></Spot>
          </Grid>
        </Stack>
          <Stack className='videos'>
            <iframe
              width="1200"
              height="515"
              src="https://www.youtube.com/embed/h9T2lO08bF4"
              title="Colegio Jorge Isaacs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Stack>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default Historia;
