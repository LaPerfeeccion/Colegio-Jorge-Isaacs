import Modal1 from '../Components/Modal';
import { Stack, Typography, Grid, Backdrop, CircularProgress } from '@mui/material';
import Appbar from '../Components/Appbar';
import './Principal.css';
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import Foto1 from '../Components/Imagen1';
import Footer from '../Components/Footer';
import Cover from '../Components/cover';
import Primer from '../Components/primer';
import Segundo from '../Components/segundo';
import Ter from '../Components/Ter';
import For from '../Components/For';
import FloatingButton from '../Components/Floating';
import { useNavigate } from 'react-router-dom';


const Principal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    Aos.init();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    const showBackdrop = async () => {
      handleOpen();
      try {
        await new Promise((resolve) => setTimeout(resolve, 6000)); // Espera de 800ms
      } finally {
        handleClose(); // Cierra el círculo de progreso
      }
    };

    showBackdrop();

    const scrollElements = document.querySelectorAll('.Scroll');
    scrollElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  const gallery = () => {
    navigate('/gallery');
  };

  return (
    <Stack className="principal-container">
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
      <Stack className="content">
        <Stack className="colegio">
          <Stack className="overlay"> </Stack>
          <video autoPlay loop muted id="Video">
            <source src="/public/Videos/video.mp4" type="video/mp4" />
          </video>
          <Typography variant="h1" className="col" sx={{ fontFamily: 'Dancing Script', marginRight: '100px' }}>

            Colegio Jorge Isaacs
            <button className="btn" onClick={() => gallery()}>
              {' '}
              <Typography variant="h4" sx={{ fontFamily: 'Dancing Script' }}>
                Galeria
              </Typography>{' '}
            </button>
          </Typography>
        </Stack>

        <Grid
          className="first-content"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '50px' }}
        >
          <section className="Scroll">
            <Grid className="fondo1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <Ter />
              <Grid className="texto">
                <Typography className="tex " variant="h6" sx={{ textAlign: 'center', fontFamily: 'Dancing Script' }}>
                  

                  50 años haciendo historia. Padres de familia, estudiantes, docentes y directivos. GRACIAS juntos lo
                  logramos
              
                </Typography>
              </Grid>
            </Grid>
          </section>
          <section className="Scroll">
            <Grid
              className="fondo2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row-reverse'
              }}
            >
              <Primer />
              <Grid className="texto">
                <Typography className="tex" variant="h6" sx={{ textAlign: 'center', fontFamily: 'Dancing Script' }}>
                  Colegio Jorge Isaacs
                  <tbody></tbody>
                  Educando con amor.
                </Typography>
              </Grid>
            </Grid>
          </section>
          <section className="Scroll">
            <Grid className="fondo3" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <For />
              <Grid className="texto">
                <Typography className="tex" variant="h6" sx={{ textAlign: 'center', fontFamily: 'Dancing Script' }}>
                  Barranquilla prócera e inmortal ceñida de agua y madurada al sol
                </Typography>
              </Grid>
            </Grid>
          </section>
        </Grid>
        {/* <Segundo /> */}
        <div>
            <Typography className="wo" variant="h1" sx={{ textAlign: 'center', fontFamily: 'Dancing Script', color:'white' }}>
          Redes
          </Typography>
        </div>
        
        <div className="Scroll">
          <Cover />
        </div>
      </Stack>
      <Footer />
      <FloatingButton />
    </Stack>
  );
};

export default Principal;
