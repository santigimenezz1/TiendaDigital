import React, { useState } from 'react'
import '../NavBarBurguer/navBarBurguer.css'
import MenuIcon from '@mui/icons-material/Menu';

const MenuHamburguesa = () => {
    const [hamburguerOn, setHamburguerOn] = useState(true)
    const cambioEstado = ()=>{
       setHamburguerOn(!hamburguerOn)
    }
  return (
    <div className='container-hamburguesa'>
    <ul className={hamburguerOn ? 'enlaces-hamburguesa' : "enlace-hamburguesa-off"}>
    <li><a href="#">CATEGORIAS</a></li>
    <li><a href="#">OFERTAS</a></li>
    <li><a href="#">PLACAS DE VIDEO</a></li>
    <li><a href="#">AURICULARES</a></li>
  </ul>   
    <div className='container-icon-hamburguesa'>
    <MenuIcon onClick={cambioEstado} className='icon-hambuerguesa' fontSize='large'/>
    </div>
    <div>
    </div>
    </div>

  )
}

export default MenuHamburguesa
