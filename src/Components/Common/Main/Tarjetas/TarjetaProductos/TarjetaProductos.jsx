import '../TarjetaProductos/tarjetaProductos.css'
import Boton from '../../../Navbar/Boton/Boton'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../../../../Context/CartContext'

const TarjetaProductos = ({product}) => {
  let arr = [product.caracteristicas]
  const {mostarContador} = useContext(CartContext)

  const mostrarPrecioConFormato = (precio) => {  //FUNCION PARA PONERLE EL PUNTO A LOS PRECIOS 
    return precio.toLocaleString("es-ES");
  };


  return (
    <Link onClick={()=>mostarContador()} className='container-tarjeta-link' to={`/Detalle/${product.id}`}>
    
    <div className="card-container">
  <div className="card">
  <div className="front-content">
    <img className='image-animada' src={product.img}></img>
    <div className='front-content-price'>
      <h1 className='titulo-tarjeta-productos'>${mostrarPrecioConFormato(product.precio)}</h1>
      <h1 className='front-content-dcto'>{product.dcto}</h1>
    </div>
    <h2 className='front-content-envio'>{product.envio}</h2>
    </div>

  <div className="content">
    <h1 className="heading">{product.modelo}</h1>
    <ul>
   <li className='li-caracteristicas'>- {product.caracteristicas.graficos}</li>
   <li className='li-caracteristicas'>- {product.caracteristicas.Resolución}</li>
   <li className='li-caracteristicas'>- {product.caracteristicas.TecnologíaIluminación}</li>
    </ul>
    
  </div>
</div>
</div>
</Link>
  )
}

export default TarjetaProductos