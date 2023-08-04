import React from 'react'
import '../TarjetaCupon/tarjetaCupon.css'
import Boton from '../../Navbar/Boton/Boton'
import Logo from '../../Navbar/Logo/Logo'
import BuscadorDescuento from '../ContadorUnidades/BuscadorDescuento/BuscadorDescuento'

const TarjetaDescuento = () => {
  return (
    
    <div className='container cuponDescuento'>
    <span className="container-span"></span>
      <Logo />
      <BuscadorDescuento />
      <Boton  text={"Aplicar"} />
   
   
    </div>
  )
}

export default TarjetaDescuento
