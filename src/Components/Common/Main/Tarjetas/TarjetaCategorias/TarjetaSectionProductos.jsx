import './tarjetaCart.css'
import BotonDetelle from '../../../SectionDetalles/DetalleProductos/BotonDetalle/BotonDetelle'
import { Link } from 'react-router-dom'

const TarjetaSectionProductos = ({producto}) => {
 

  return (
    <div>
    <div className='container-tarjetaSectionProductos'>
    <Link className='container-imagenDetalle' to={`/Detalle/${producto.id}`}>
     <img className='image-tarjeta-productos' src={producto.img}></img>
    </Link>
    <div className='container-info'>
    <Link to={`/Detalle/${producto.id}`} className='text-tarjetaProductos'>
   {producto.nombre}</Link>
    <h2 className='price-tarjetaProductos'>{producto.precio}</h2>
    <BotonDetelle text={"SUMAR AL CARRITO"} />
    </div>
      
    </div>
    </div>
  )
}

export default TarjetaSectionProductos
