import { useEffect } from 'react';
import Appbar from '../Components/Appbar';
import { initializeCarousel } from "../Components/Prom";
import "./Promociones.css";

const Promociones = () => {
  useEffect(() => {
    const cleanup = initializeCarousel();

    return () => {
      if (cleanup) cleanup();  // Limpia los temporizadores y cualquier efecto residual
    };
  }, []);

  return (
    <div>
      <Appbar />
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src="./public/imagenes/etuals.png" alt="Etuals" />
            <div className="content">
              <div className="title">Etuals</div>
              <div className="name">Prom 2024</div>
              <div className="integrants">18 estudiantes</div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Aurum.png" alt="Aurum" />
            <div className="content">
              <div className="title">Aurum</div>
              <div className="name">Prom 2023</div>
              <div className="integrants">14 estudiantes</div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Prom2022.jpeg" alt="GEMDEX 2022" />
            <div className="content">
              <div className="title">GEMDEX</div>
              <div className="name">Prom 2022</div>
              <div className="integrants">18 estudiantes</div>
              <div className="buttons">
                <button>More</button>
                <button>Less</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Prom2021.jpeg" alt="GEMDEX 2021" />
            <div className="content">
              <div className="title">GEMDEX</div>
              <div className="name">Prom 2021</div>
              <div className="integrants">18 estudiantes</div>
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
