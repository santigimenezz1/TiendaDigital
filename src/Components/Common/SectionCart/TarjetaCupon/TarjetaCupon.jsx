import React from 'react'
import '../TarjetaCupon/tarjetaCupon.css'
import BuscadorDescuento from '../BuscadorDescuento/BuscadorDescuento'
import Boton from '../../Navbar/Boton/Boton'
import Logo from '../../Navbar/Logo/Logo'

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
