import React, { useContext, useEffect, useState } from 'react'
import '../TarjetaDetalle/tarjetaDetalle.css'
import ContadorUnidades from '../../../SectionCart/ContadorUnidades/ContadorUnidades'
import { CartContext } from '../../../../../Context/CartContext'

const TarjetaDetalle = ({producto, onAdd, totalProductosId}) => {
  
    const [carrusel, setCarrusel] = useState(true)
  return (
    <div className='container-tarjetaDetalle'>
    <div className='container-imagenes-tarjetaDetalle'>
    {
     carrusel === true
     ? <img className='image-principal' src={producto.img}></img>
     : <img className='image-principal' src={producto.imgSecundary}></img>
    }
    <div className='container-imagenes-carrusel'>
    <img onClick={()=> setCarrusel(true)} className='image-carrusel'  src={producto.img}></img>
    <img onClick={()=> setCarrusel(false)} className='image-carrusel' src={producto.imgSecundary}></img>
    </div>
    </div>
    <div className='container-info-tarjetaDetalle'>
    <div className='container-info'>
    <h1 className='titulo-tarjetaDetalle'>{producto.nombre}</h1>
    <h2 className='price'>  {producto.precio}</h2>
    <h3 className='cuotas'>Mismo precio en cuotas de $12.500</h3>
    </div>
    <div>


    <div className='container-caracteristicasBotones'>
    <ul>
    <h3>Carecteristicas</h3>
  
     <li>• Gráficos Integrado Intel UHD Graphics 605 con memoria compartida </li>
     <li>• Tamaño de Pantalla 39.6cm (15.6")</li>
    <li>• Tipo de Pantalla TFT LCD</li>
     <li>• Tecnología de iluminación Blacklight LED</li>
     <li>• Resolución de la Pantalla 1366 x 768</li>
     <li>• Memoria Total del Sistema Instalada 8GB</li>
     <li>• Tecnología de memoria del sistema DDR4 SDRAM</li>
     </ul>
     <div className='contadorBoton'>
     <h1>{producto.cantidad}</h1>
     {
      producto.stock === 0 ?<h1>sin stock</h1> :<ContadorUnidades initial={1}  stock={producto.stock} onAdd={onAdd} totalProductosId={totalProductosId}/>

     }
     
     </div>
     </div>
    </div>
    </div>



    </div>
  )
}

export default TarjetaDetalle