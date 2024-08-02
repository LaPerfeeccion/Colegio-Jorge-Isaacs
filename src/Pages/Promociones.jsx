import { useEffect, useRef } from 'react';
import Appbar from '../Components/Appbar';
import { Grid, Stack, Typography } from '@mui/material';
import Imagenetuals from '../Components/Imagenetuals';
import Imagenaurum from '../Components/Imagenaurum';
import Imagenzykions from '../Components/Imagenzykions';
import './Promociones.css';
import ImagenProm2020 from '../Components/Imagenprom2020';
import ImagenProm2022 from '../Components/Imagenprom2022';
import ImagenProm2021 from '../Components/Imagenprom2021';
import Atropos from 'atropos/react';
// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';
<link rel="stylesheet" href="path/to/atropos.css" />;

const Promociones = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true // Whether to animate only once
    });

    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (isElementInViewport(card)) {
          card.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecuta la animación en el inicio

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div>
      <Appbar />
      <Grid
        className="Prom"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: '40px', justifyContent: 'space-around', alignItems: 'center', gap: '15px' }}
      >
        <Atropos className="my-atropos">
          <Stack
            data-aos="zoom-out"
            className="card"
            item
            xs={6}
            flexDirection="column"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '35px ',
              textAlign: 'center'
            }}
          >
            <div className='element' ref={(el) => (cardsRef.current[0] = el)}>
              <Imagenetuals />
              <Typography variant="h5" sx={{ fontFamily: 'Dancing Script' }}>
                Prom 2024
              </Typography>
            </div>
          </Stack>
        </Atropos>

        <Atropos className="my-atropos">
          <Stack
            data-aos="zoom-out"
            className="card"
            item
            xs={6}
            flexDirection="column"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '35px ',
              textAlign: 'center'
            }}
          >
            <div ref={(el) => (cardsRef.current[1] = el)}>
              <Imagenaurum />
              <Typography variant="h5" sx={{ fontFamily: 'Dancing Script' }}>
                Prom 2023
              </Typography>
            </div>
          </Stack>
        </Atropos>
        <Atropos className="my-atropos">
          <Stack
            data-aos="zoom-out"
            className="card"
            item
            xs={6}
            flexDirection="column"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '35px ',
              textAlign: 'center'
            }}
          >
            <div ref={(el) => (cardsRef.current[2] = el)}>
              <ImagenProm2022 />
              <Typography variant="h5" sx={{ fontFamily: 'Dancing Script' }}>
                Prom 2022
              </Typography>
            </div>
          </Stack>
        </Atropos>

        <Atropos className="my-atropos">
          <Stack
            data-aos="zoom-out"
            className="card"
            item
            xs={6}
            flexDirection="column"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '35px ',
              textAlign: 'center'
            }}
          >
            <div ref={(el) => (cardsRef.current[3] = el)}>
              <ImagenProm2021 />
              <Typography variant="h5" sx={{ fontFamily: 'Dancing Script' }}>
                Prom 2021
              </Typography>
            </div>
          </Stack>
        </Atropos>

        <Atropos  className="my-atropos">
          <Stack
            data-aos="zoom-out"
            className="card"
            item
            xs={6}
            flexDirection="column"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '35px ',
              textAlign: 'center'
            }}
          >
            <div ref={(el) => (cardsRef.current[4] = el)}>
              <ImagenProm2020 />
              <Typography variant="h5" sx={{ fontFamily: 'Dancing Script' }}>
                Prom 2020
              </Typography>
            </div>
          </Stack>
        </Atropos>
        <Atropos  className="my-atropos">
          <Stack
            data-aos="zoom-out"
            className="card"
            item
            xs={6}
            flexDirection="column"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '35px ',
              textAlign: 'center'
            }}
          >
            <div className="element" ref={(el) => (cardsRef.current[5] = el)}>
              <Imagenzykions />
              <Typography variant="h5" sx={{ fontFamily: 'Dancing Script' }}>
                Prom 2019
              </Typography>
            </div>
          </Stack>
        </Atropos>
      </Grid>
    </div>
  );
};

export default Promociones;
