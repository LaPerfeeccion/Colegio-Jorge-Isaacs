import { Link } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Appbar.css'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/navbar";

export default function Appbar() {
  const [historiaActive, setHistoriaActive] = useState(false);
  const navigate = useNavigate();
  const Principal1 = () => {
    setHistoriaActive(!historiaActive);
    navigate(`/`)
  };
  const Hisotria1 = () => {
    navigate(`/Historia`)
    
  };
  const Promociones1 = () => {
    navigate(`/Promociones`)

  };

  return (
    <Navbar isBordered variant="sticky">
      <NavbarBrand >
        <img src="./public/imagenes/icon.png" className="icon" width={"80px"}  alt="" />
        <p className="font-bold text-2xl" >Colegio Jorge Isaacs</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="Button-animated" color="foreground"onClick={() => Principal1()}>
            Pagina Principal
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="Button-animated" onClick={() => Hisotria1()} aria-current="page">
            Historia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="Button-animated" color="foreground" onClick={() => Promociones1()}>
            Promociones
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
