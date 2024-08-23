import Modal1 from '../Components/Modal';
import { Stack, Typography, Grid } from '@mui/material';
import Appbar from '../Components/Appbar';
import './Principal.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Foto1 from '../Components/Imagen1';

const Principal = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Stack className="principal-container">
      <Appbar />

      <Stack className="content">
        <Stack className="colegio">
          <Stack className="overlay"> </Stack>
          <video autoPlay loop muted id="Video">
            <source src="/public/Videos/video.mp4" type="video/mp4" />
          </video>

          <Typography variant="h2" className="col" sx={{ fontFamily: 'Dancing Script', marginRight:"100px" }}>
            Colegio Jorge Isaacs
          </Typography>
        </Stack>

        <Grid className="first-content" sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <img className='h' src="/public/imagenes/imagendelcolegio.png" alt="" />
          <Grid className="glass">
            <Foto1></Foto1>
            <Typography variant="h8" sx={{ textAlign: 'center' }}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid
              fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi
              iusto adipisci aliquam asperiores?{' '}
            </Typography>
          </Grid>
          <Grid className="glass">
            <Foto1></Foto1>
            <Typography variant="h8" sx={{ textAlign: 'center' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid
              fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi
              iusto adipisci aliquam asperiores?
            </Typography>
          </Grid>

          <Grid className="glass">
            <Foto1></Foto1>
            <Typography variant="h8" sx={{ textAlign: 'center' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid
              fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi
              iusto adipisci aliquam asperiores?
            </Typography>
          </Grid>
        </Grid>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat corporis rem sit vitae asperiores quis.
          Distinctio atque unde quod ab accusamus sapiente rerum totam ex nemo. Praesentium quae quaerat impedit.
        </Typography>

        <Stack>
          <Modal1 />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Principal;
