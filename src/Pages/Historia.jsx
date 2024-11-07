import React, { useState, useRef, useEffect } from 'react';
import Appbar from '../Components/Appbar';
import './Historia.css';
import { Backdrop, Grid, Stack, Typography } from '@mui/material';
import Footer from '../Components/Footer';
import Spot from '../Components/spot';
import { useNavigate } from 'react-router-dom';

const Historia = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true); 
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
  // Mostrar el Backdrop inmediatamente y ocultarlo después de 3 segundos
  useEffect(() => {
    const showBackdrop = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 4000)); // Espera de 3 segundos
      } finally {
        setOpen(false); // Cierra el Backdrop
      }
    };

    showBackdrop();
  }, []);
 // Esto asegura que se ejecute una sola vez cuando el componente se monta.
  
  const Deportes = () => {
    navigate('/Deportistas');
  };

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
              <Typography sx={{ textAlign: 'center', fontFamily: 'Dancing Script' , color:"white" }} variant="h3" >
                Videos
              </Typography>
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
          <Stack alignItems={'center'} sx={{gap:"10px"}}>
          <Typography sx={{ textAlign: 'center', fontFamily: 'Dancing Script' , color:"white" }} variant="h3" >
                Tour
              </Typography>
            <iframe
              width="900"
              height="515"
              src="https://www.youtube.com/embed//O-NWtAjWZXg"
              title="Colegio Jorge Isaacs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Stack>
          <button className="bts" onClick={() => Deportes()}>
               <Typography variant="h4" sx={{ fontFamily: 'Dancing Script' }}> Deportes</Typography>
            </button>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default Historia;
