import React, { useState } from 'react';
import './Deportistasect.css';
import Deportista from '../Components/Deportista';
import Appbar from '../Components/Appbar';
import { Grid } from '@mui/material';
import Bio from './Bio';
import { useNavigate } from 'react-router-dom';

function Deportistaect() {
  const navigate = useNavigate();


  const deportistas = [
    { 
      nombre: "Daniela Pelayo",
      habilidades: ["Natación"],
      imagen: "https://picsum.photos/200/300?random=1",
      bio: "Daniela es una nadadora destacada con múltiples medallas en competencias nacionales."
    },
    { 
      nombre: "Samuel Medina",
      habilidades: ["Futbol"],
      imagen: "https://picsum.photos/200/301?random=2",
      bio: "Samuel es un futbolista talentoso con experiencia en ligas juveniles."
    },
    { 
      nombre: "Carlos ",
      habilidades: ["Natación"],
      imagen: "https://picsum.photos/200/302?random=3",
      bio: "Carlos es un nadador prometedor con grandes expectativas para el futuro."
    },
    { 
      nombre: "Isabella Payares ",
      habilidades: ["Natación"],
      imagen: "./public/imagenes/Paya.jpeg",
      bio: "Isabella es una nadadora versátil con experiencia en diferentes estilos."
    },
    { 
      nombre: "Janic ",
      habilidades: ["Futbol"],
      imagen: "https://picsum.photos/200/302?random=3",
      bio: "Janic es un futbolista rápido y hábil, especializado en pases precisos."
    },
    { 
      nombre: "Juan Andrés ",
      habilidades: ["Futbol"],
      imagen: "https://picsum.photos/200/302?random=3",
      bio: "Juan Andrés es un defensor sólido con gran capacidad para anticiparse."
    },
    { 
      nombre: "Luciano ",
      habilidades: ["Natación"],
      imagen: "https://picsum.photos/200/302?random=3",
      bio: "Luciano es un nadador especializado en distancias largas con gran resistencia."
    },
    { 
      nombre: "Emiliano ",
      habilidades: ["Baloncesto"],
      imagen: "https://picsum.photos/200/302?random=3",
      bio: "Emiliano es un jugador de baloncesto versátil con grandes habilidades encestadoras."
    },
    { 
      nombre: "Alfi ",
      habilidades: ["Vollyball"],
      imagen: "https://picsum.photos/200/302?random=3",
      bio: "Alfi es un voleibolista talentoso con excelentes reflejos y técnica."
    }
  ];


  const handleSelectDeportista = (id) => {
    console.log('ID enviado:', id); // Esto te ayudará a depurar
    navigate(`/Bio/${id}`);
  };

  return (
    <Grid> 
      <Appbar></Appbar>
      <div className="app">
        <h1>Deportistas Destacados</h1>
        <div className="deportistas-grid">
          {deportistas.map((deportista, index) => (
            <Deportista 
              key={index} 
              id={deportista.id}
              nombre={deportista.nombre}
              habilidades={deportista.habilidades}
              imagen={deportista.imagen}
              onSelect={handleSelectDeportista}
            />
          ))}
        </div>
      </div>
    </Grid>
  );
}

export default Deportistaect;