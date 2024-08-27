import Appbar from '../Components/Appbar';
import "./Promociones.css"

const Promociones = () => {
  return (
    <div>
      <body>
        <Appbar />
      
        
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src="./public/imagenes/etuals.png" alt="" />
            <div className="content">
              <div className="name"> Etuals </div>
              <div className="title"> Prom 2024 </div>
              <div className="integrants"> 18 estudiantes </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Aurum.png" alt="" />
            <div className="content">
              <div className="name"> Aurum </div>
              <div className="title"> Prom 2023 </div>
              <div className="integrants"> 14 estudiantes </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Prom2022.jpeg" alt="" />
            <div className="content">
              <div className="name"> GEMDEX </div>
              <div className="title"> Prom 2022 </div>
              <div className="integrants"> 18 estudiantes </div>
              <div className="buttons">
                <button> More </button>
                <button> less </button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/imagenes/Prom2021.jpeg" alt="" />
            <div className="content">
              <div className="name"> GEMDEX </div>
              <div className="title"> Prom 2021 </div>
              <div className="integrants"> 18 estudiantes </div>
              <div className="buttons">
                <button> More </button>
                <button> less </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </body>
      
      <script src="../Components/Prom.js"></script>
    </div>
  );
};

export default Promociones;
