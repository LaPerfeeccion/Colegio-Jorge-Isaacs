import Modal1 from '../Components/Modal';
import { Stack, Typography, Grid } from '@mui/material';
import Appbar from '../Components/Appbar';
import './Principal.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Foto1 from '../Components/Imagen1';
import Footer from '../Components/Footer';
import Cover from '../Components/cover';
import Primer from '../Components/primer';
import Segundo from '../Components/segundo';
import Ter from '../Components/Ter';
import For from '../Components/For';

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

          <Typography variant="h2" className="col" sx={{ fontFamily: 'Dancing Script', marginRight: '100px' }}>
            Colegio Jorge Isaacs
          </Typography>
        </Stack>

        <Grid
          className="first-content"
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:"50px" }}
        >
          <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Ter></Ter>
            <Grid className='texto' >
            <Typography className='tex' variant="h6" sx={{ textAlign: 'center', fontFamily: 'Dancing Script'}}>
              {' '}
              Deseo que el Colegio Jorge Isaacs saque estudiantes expecionales y capaces de enfrentar los desafios de
              este mundo{' '}
            </Typography>  
            </Grid>
          </Grid>
          <Grid
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row-reverse' }}
            >
            <Primer></Primer>
            <Grid className='texto' >
            <Typography className='tex' variant="h6" sx={{ textAlign: 'center', fontFamily: 'Dancing Script'}}>
              {' '}
              Deseo que el Colegio Jorge Isaacs saque estudiantes expecionales y capaces de enfrentar los desafios de
              este mundo{' '}
            </Typography>  
            </Grid>
          </Grid>
          <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <For></For>
            <Grid className='texto' >
            <Typography className='tex' variant="h6" sx={{ textAlign: 'center', fontFamily: 'Dancing Script'}}>
              {' '}
              Deseo que el Colegio Jorge Isaacs saque estudiantes expecionales y capaces de enfrentar los desafios de
              este mundo{' '}
            </Typography>  
            </Grid>
            
          </Grid>
        </Grid>
            {/* <Segundo></Segundo> */}
        <Cover />
        <Stack>
          {/* <Modal1 /> */}
        </Stack>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default Principal;
