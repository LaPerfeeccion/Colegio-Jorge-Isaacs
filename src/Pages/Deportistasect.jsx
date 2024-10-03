import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import './Deportistasect.css';  // Puedes seguir usando tus propios estilos globales si es necesario
import { useNavigate } from 'react-router-dom';

function Deportistaect() {
  const navigate = useNavigate();
  const [selectedDeportista, setSelectedDeportista] = useState(null);
  const [open, setOpen] = useState(false);

  const deportistas = [
    {
      id: 1,
      nombre: 'Daniela Pelayo',
      habilidades: ['Natación'],
      imagen: './public/imagenes/Dani.jpg',
      bio: 'Daniela es una nadadora destacada con múltiples medallas en competencias nacionales.',
      instagram: 'https://instagram.com/daniela'
    },
    {
      id: 2,
      nombre: 'Samuel Medina',
      habilidades: ['Futbol'],
      imagen: 'https://picsum.photos/200/301?random=2',
      bio: 'Samuel es un futbolista talentoso con experiencia en ligas juveniles.',
      instagram: 'https://instagram.com/samuel'
    },
    {
      id: 3,
      nombre: 'Carlos ',
      habilidades: ['Natación'],
      imagen: './public/imagenes/Carlos.jpeg',
      bio: 'Carlos es un nadador prometedor con grandes expectativas para el futuro.',
      instagram: 'https://instagram.com/carlos'
    },
    {
      id: 4,
      nombre: 'Isabella Payares ',
      habilidades: ['Natación'],
      imagen: './public/imagenes/Paya.jpeg',
      bio: 'Isabella es una nadadora versátil con experiencia en diferentes estilos.',
      instagram: 'https://instagram.com/isabella'
    },
    {
      id: 5,
      nombre: 'Janic ',
      habilidades: ['Futbol'],
      imagen: './public/imagenes/Jani.jpg',
      bio: 'Janic es un futbolista rápido y hábil, especializado en pases precisos.',
      instagram: 'https://instagram.com/janic'
    },
    {
      id: 6,
      nombre: 'Juan Andrés ',
      habilidades: ['Futbol'],
      imagen: './public/imagenes/Andre.jpeg',
      bio: 'Juan Andrés es un defensor sólido con gran capacidad para anticiparse.',
      instagram: 'https://instagram.com/juan'
    }
  ];

  // Manejo del click para abrir la página de Instagram
  const handleSelectDeportista = (deportista) => {
    window.open(deportista.instagram, '_blank');  // Abrir en una nueva pestaña
  };

  return (
    <Grid>
      <Typography variant='h2' sx={{ textAlign: 'center', fontFamily: 'Dancing Script', color: 'white' }}>Deportistas</Typography>
      <Grid container spacing={2} className="all2">
        {deportistas.map((deportista) => (
          <Grid item xs={12} sm={6} md={4} key={deportista.id}>
            <Card 
              onClick={() => handleSelectDeportista(deportista)} 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                borderRadius: '10px',
                transition: 'all 0.5s ease, backgroundColor 0.3s ease',
                width: '200px',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'aliceblue',
                  transform: 'translateY(-5px) scale(1.2)',
                  boxShadow: '0 0 10px white',
                  outline: '10px black',
                  width:"340px",
                }
              }}
            >
              <img src={deportista.imagen} alt={deportista.nombre} className="deportista-image" />
              <CardContent>
                <Typography variant="h6" sx={{ textAlign: 'center', fontFamily: 'Dancing Script' }}>{deportista.nombre}</Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Dancing Script' }}>{deportista.habilidades.join(', ')}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Deportistaect;
