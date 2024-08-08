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
        <Stack className='colegio'>
          <Typography variant='h3'className='col' sx={{fontFamily:"Dancing Script"}} > Colegio Jorge Isaacs </Typography>
        </Stack>

        <Grid className="first-content" sx={{ display: "flex",flexDirection:"column" , gap:"20px"}}>
          <Grid className="glass">
            <Foto1></Foto1>
            <Typography variant="h8" sx={{ textAlign: 'center' }}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid
              fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi
              iusto adipisci aliquam asperiores?{' '}
            </Typography>
          </Grid>
          <Grid className='glass'>
            <Foto1></Foto1>
            <Typography variant="h8" sx={{ textAlign: 'center' }}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid
              fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi
              iusto adipisci aliquam asperiores?{'help '}
            </Typography>
          </Grid>

          <Grid className="glass">
            <Foto1></Foto1>
            <Typography variant="h8" sx={{ textAlign: 'center' }}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid
              fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi
              iusto adipisci aliquam asperiores?{' '}
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
