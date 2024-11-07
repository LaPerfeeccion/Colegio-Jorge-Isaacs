import { Link } from "@nextui-org/react";
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/navbar";
import './Appbar.css';  // Asegúrate de tener el archivo CSS importado

export default function Appbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Obtenemos la ubicación actual (ruta)

  // Función para verificar si el path coincide con la ruta actual
  const isActive = (path) => location.pathname === path;

  const Principal1 = () => {
    navigate(`/`);
  };

  const Hisotria1 = () => {
    navigate(`/Historia`);
  };

  const Promociones1 = () => {
    navigate(`/Promociones`);
  };

  return (
    <Navbar isBordered variant="sticky">
      <NavbarBrand>
        <img src="./public/imagenes/fondo.png" className="icon" width={"60px"} alt="Colegio Jorge Isaacs" />
        <p className="font-bold text-2xl">Colegio Jorge Isaacs</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className={isActive('/') ? '' : 'active'}  // Añadir clase 'active' cuando esté en la página principal
            onClick={Principal1}
          >
            Página Principal
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={isActive('/Historia') ? '' : 'active'}  // Añadir clase 'active' para Historia
            onClick={Hisotria1}
          >
            Historia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={isActive('/Promociones') ? '' : 'active'}  // Añadir clase 'active' para Promociones
            onClick={Promociones1}
          >
            Promociones
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
