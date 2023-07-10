import React from 'react'
import './tarjetaCart.css'
import Boton from '../../../Navbar/Boton/Boton'

const TarjetaSectionProductos = () => {
  return (
    <div className='container-tarjetaSectionProductos'>
    <img className='image-tarjeta-productos' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688403760/E-COMERCE%20CODER/compragamer_Imganen_general_36800_Notebook_Gamer_Thunderobot_911_AIR_FHD_15.6__Core_I5_12450H_16GB_512GB_SSD_NVMe_RTX_3050TI_W11_Pro_144Hz_ea0729a8-med_nakf3f.jpg'></img>
    <div className='container-info'>
    <span className='text-tarjetaProductos'>
    Notebook Gamer Thunderobot 911 AIR FHD 15.6" Core I5 12450H 16GB 512GB SSD NVMe RTX 3050TI W11 Pro 144Hz</span>
    <h2 className='price-tarjetaProductos'>$ 85.000</h2>
    <Boton text={"Agregar"} />
    </div>
      
    </div>
  )
}

export default TarjetaSectionProductos
