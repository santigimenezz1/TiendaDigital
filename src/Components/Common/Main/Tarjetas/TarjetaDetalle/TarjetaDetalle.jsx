import React from 'react'
import '../TarjetaDetalle/tarjetaDetalle.css'
import Boton from '../../../Navbar/Boton/Boton'

const TarjetaDetalle = ({product}) => {
  return (
    <div className='container-tarjetaDetalle'>
    <div className='container-imagenes-tarjetaDetalle'>
    <img className='image-principal' src={product.img}></img>
    <div className='container-imagenes-carrusel'>
    <img className='image-carrusel'  src={product.img}></img>
    <img className='image-carrusel' src={product.imgSecundary}></img>
    </div>
    </div>
    <div className='container-info-tarjetaDetalle'>
    <h1 className='titulo-tarjetaDetalle'>{product.nombre}</h1>
    <h2 className='price'>  {product.precio}</h2>
    <h3 className='cuotas'>Mismo precio en cuotas de $12.500</h3>
    <div>
    <h3>Carecteristicas</h3>
     <ul>
     <li>• Gráficos Integrado Intel UHD Graphics 605 con memoria compartida </li>
     <li>• Tamaño de Pantalla 39.6cm (15.6")</li>
    <li>• Tipo de Pantalla TFT LCD</li>
     <li>• Tecnología de iluminación Blacklight LED</li>
     <li>• Resolución de la Pantalla 1366 x 768</li>
     <li>• Memoria Total del Sistema Instalada 8GB</li>
     <li>• Tecnología de memoria del sistema DDR4 SDRAM</li>


     </ul>
    </div>
    <Boton text={"COMPRAR"} />
    <Boton text={"SUMAR AL CARRITO"} />


    </div>
    </div>
  )
}

export default TarjetaDetalle