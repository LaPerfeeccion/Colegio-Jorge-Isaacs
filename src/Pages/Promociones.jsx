import React, { useEffect } from 'react';
import Appbar from '../Components/Appbar';
import { initializeCarousel } from "../Components/Prom";
import "./Promociones.css";
import { Backdrop } from '@mui/material';

const Promociones = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  
  useEffect(() => {
    const cleanup = initializeCarousel();

    return () => {
      if (cleanup) cleanup();  // Limpia los temporizadores y cualquier efecto residual
    };
  }, []);
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
  }, []); 

  return (
    <div>
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
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img className='lo' src="./public/imagenes/etuals.png" alt="Etuals" />
            <div className="content">
              <div className="title">Etuals</div>
              <div className="name">Prom 2024</div>
            </div>
          </div>
          <div className="item">
            <img className='lo' src="./public/imagenes/Aurum.png" alt="Aurum" />
            <div className="content">
              <div className="title">Aurum</div>
              <div className="name">Prom 2023</div>
            </div>
          </div>
          <div className="item">
            <img className='lo' src="./public/imagenes/Prom2022.jpeg" width={"200px"} alt="GEMDEX 2022" />
            <div className="content">
              <div className="title">GEMDEX</div>
              <div className="name">Prom 2022</div>
              <div className="buttons">
                <button>More</button>
                <button>Less</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img className='lo' src="./public/imagenes/Prom2021.jpeg" alt="GEMDEX 2021" />
            <div className="content">
              <div className="title">GEMDEX</div>
              <div className="name">Prom 2021</div>
            </div>
          </div>
        </div>

        {/* Elimina o comenta esta sección */}
        {/* <div className="thumbnail">
          <div className="item">
            <img src="public/imagenes/etuals.png" alt="Thumbnail Etuals" />
            <div className="content">
              <div className="title">PROMOCIONES</div>
              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Aurum.png" alt="Thumbnail Aurum" />
            <div className="content">
              <div className="title">PROMOCIONES</div>
              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Prom2022.jpeg" alt="Thumbnail GEMDEX 2022" />
            <div className="content">
              <div className="title">PROMOCIONES</div>
              <div className="des">Description</div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Prom2021.jpeg" alt="Thumbnail GEMDEX 2021" />
            <div className="content">
              <div className="title">PROMOCIONES</div>
              <div className="des">Description</div>
            </div>
          </div>
        </div> */}

        <div className="arrows">
          <button id='prev'>{'<'}</button>
          <button id='next'>{'>'}</button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
};

export default Promociones;
