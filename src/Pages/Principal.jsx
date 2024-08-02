
import Modal1 from '../Components/Modal';
import { Stack, Typography, Grid } from '@mui/material';
import Appbar from '../Components/Appbar';
import "./Principal.css";
import { useEffect } from 'react'
import Aos from 'aos'
import Foto1 from '../Components/Imagen1';


const Principal = () => {
  useEffect(() => {
    Aos.init();
    }, [])
  return (
    <Stack className="principal-container" >
      <Appbar />
      
      <Stack className="content" sx={{ padding: "10px" }}>
        <img className='foto_del_colegio' src="./public/imagenes/Imagendelcolegio.png" alt="" />
        
        <Grid className='first-content'>
          <Stack className='glass' sx={{flexDirection:'row', justifyContent: "space-between", alignItems:"center"}}>
            <Foto1></Foto1>
            <Typography sx={{textAlign:"center"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi iusto adipisci aliquam asperiores? </Typography>
          </Stack>
          <Stack className='glass2' sx={{flexDirection:'row-reverse', justifyContent: "space-between", alignItems:"center"}}>
            <Foto1></Foto1>
            <Typography sx={{textAlign:"center"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi iusto adipisci aliquam asperiores? </Typography>
          </Stack>
          <Stack className='glass' sx={{flexDirection:'row', justifyContent: "space-between", alignItems:"center"}}>
            <Foto1></Foto1>
            <Typography sx={{textAlign:"center"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus quaerat quam dolor aliquid fugiat, porro animi, iure deleniti repudiandae aperiam, corrupti recusandae. Doloremque laborum animi iusto adipisci aliquam asperiores? </Typography>
          </Stack>
        </Grid>
        <Typography >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat corporis rem sit vitae asperiores quis. Distinctio atque unde quod ab accusamus sapiente rerum totam ex nemo. Praesentium quae quaerat impedit.
        </Typography>
        
        <Stack>
          <Modal1 />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Principal;
