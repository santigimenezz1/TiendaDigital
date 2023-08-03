import './tarjetaCart.css'
import BotonDetelle from '../../../SectionDetalles/DetalleProductos/BotonDetalle/BotonDetelle'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../../Context/CartContext'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'

const TarjetaSectionProductos = ({producto}) => {
  const {addToCart,calcularFinal} = useContext(CartContext)


 

  const onAdd = (cantidad=1)=>{
    let productCart = {...producto, cantidad: cantidad}
    addToCart(productCart)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: true,
      timer: 1500,
    })
      calcularFinal()
  }

  return (
    <>
    
    <div>
    <div className='container-tarjetaSectionProductos'>
    <Link className='container-imagenDetalle' to={`/Detalle/${producto.id}`}>
     <img className='image-tarjeta-productos' src={producto.img}></img>
    </Link>
    <div className='container-info'>
    <Link to={`/Detalle/${producto.id}`} className='text-tarjetaProductos'>
   {producto.nombre}</Link>
    <h2 className='price-tarjetaProductos'>{producto.precio}</h2>
    {
      producto.stock !== 0 ?
      <div onClick={()=>onAdd()}>
      <BotonDetelle  text={"SUMAR AL CARRITO"} />
      </div>
      :<h1>Sin stock</h1>
    }
    </div>
      
    </div>
    </div>
    <div>
    <div>
    <ToastContainer
    position="top-right"
    autoClose={800}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover
    theme="light"
    />
    </div>
    </div>
    </>
  )
}

export default TarjetaSectionProductos
