import { useState, useRef } from 'react';
import Appbar from '../Components/Appbar';
import './Historia.css';
import { Stack, Typography } from '@mui/material';
import Footer from '../Components/Footer';
import Spot from '../Components/spot';

const Historia = () => {
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

  return (
    <Stack>
      <Appbar />
      <img className="portada" src="/public/imagenes/Educando.png" alt="Portada" />
      <Stack sx={{gap:"100px"}}>
        <Typography sx={{textAlign:"center", fontFamily: 'Dancing Script'}} variant='h3'>
          Himno del Colegio Jorge Isaacs
        </Typography>
        <Stack className='him' flexDirection={'row'} sx={{ justifyContent: 'space-around' }}>
          <img className="rotate linear infinite" src="/public/imagenes/fondo.png" width="300px" alt="" />
          <button
            id="lo"
            onClick={togglePlayPause}
            style={{
              backgroundImage: `url(${isPlaying ? 'play.png' : 'paused.png'})`,
              backgroundRepeat: 'no-repeat'
            }}
          >
            <Typography sx={{fontFamily: 'Dancing Script'}} variant='h5'>{isPlaying ? 'Pause Music' : 'Play Music'}</Typography>
          </button>
          <audio ref={audioRef} src="/public/Audios/Himno.mp3" loop autoPlay />
        <Spot></Spot>
        </Stack>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default Historia;
