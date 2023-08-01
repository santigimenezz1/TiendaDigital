import "../Navbar/navBar.css"
import Boton from "../../Common/Navbar/Boton/Boton";
import Enlaces from "../../Common/Navbar/Enlaces/Enlaces";
import Logo from "../../Common/Navbar/Logo/Logo";
import Buscador from "../../Common/Navbar/Buscador/Buscador";
import Carrito from "../../Common/Navbar/Carrito/Carrito";
import { Link } from "react-router-dom";
import ModalInicioSesion from "../../Common/Main/ModalInicioSesion/ModalInicioSesion";



const NavBar = ()=>{
    return (
      <div>
      <div className='container-navBar'>
      <Link to={"/"}>
      <Logo />
      </Link>
    <Buscador placeholder={"buscador de productos"} />
    <ModalInicioSesion/>
    <Link to={"/Cart"}>
    <Carrito />
    </Link>
    </div>
    <Enlaces />
    
      </div>
    
     )
}
export default NavBar