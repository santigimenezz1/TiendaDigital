import React from 'react'
import '../TarjetaProductos/tarjetaProductos.css'
import Boton from '../../../Navbar/Boton/Boton'
import { Link } from 'react-router-dom'

const TarjetaProductos = ({product}) => {
  return (
    <Link className='container-tarjeta-link' to={`/Detalle/${product.id}`}>
    
    <div class="card-container">
  <div class="card">
  <div class="front-content">
    <img className='image-animada' src={product.img}></img>
    <div className='front-content-price'>
      <h1 className='titulo-tarjeta-productos'>{product.precio}</h1>
      <h1 className='front-content-dcto'>{product.dcto}</h1>
    </div>
    <h2 className='front-content-envio'>{product.envio}</h2>
    </div>

  <div class="content">
    <p class="heading">{product.modelo}</p>
    <p>
      aca van todas las caracteristicas
      aca van todas las caracteristicas
      aca van todas las caracteristicas
      aca van todas las caracteristicas
    </p>
    
    <Boton text={"VER MAS"}  />
  </div>
</div>
</div>
</Link>
  )
}

export default TarjetaProductos