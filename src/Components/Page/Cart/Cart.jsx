import { useContext } from "react"
import { CartContext } from "../../../Context/CartContext"
import TarjetaCart from "../../Common/SectionCart/TarjetaCart/TarjetaCart"
import TarjetaDescuento from "../../Common/SectionCart/TarjetaCupon/TarjetaCupon"
import SelectorPago from "../../Common/SectionCart/SelectorPago/SelectorPago"
import TransitionsModal from "../../Common/SectionCart/Modal/Modal"
import BotonDetelle from "../../Common/SectionDetalles/DetalleProductos/BotonDetalle/BotonDetelle"
import '../Cart/cart.css'
import { Link } from "react-router-dom"
import ModalFinalizarCompra from "../../Common/SectionCart/ModalFinalizarCompra/ModalFinalizarCompra"

const Cart = () => {
  const {cart, clearCart, calcularFinal} = useContext(CartContext)
 

  let total = calcularFinal()

  return (
    <div className="container-general-cart">
    <div className="container-retroceso" >
    <h1 className="titulo-retroceso">Carrito de compras</h1>
    <div className="container-retroceso-borrar">
    <TransitionsModal clearCart={clearCart}   cart={cart}/>
    </div>
    </div>
      {
        cart.map((producto)=>(
          
        <TarjetaCart key={producto.id} producto={producto}  />
        
        ))
        
      }
    {
      cart.length > 0 
      ?
      <div>
      <TarjetaDescuento id={cart.id}/> 
      <SelectorPago total={total} />
      <ModalFinalizarCompra />

      </div>
      :
      <div className="container-sinProductos">
      <h1 className="titulo-sinProducto">No hay productos en el carrito</h1>
      <Link to={"/categoria"} className="botonSinProducto">
      <div>
      <BotonDetelle text={"SEGUIR COMPRANDO"} />
      </div>
      </Link>

      </div>
    }
    </div>


  )
}

export default Cart