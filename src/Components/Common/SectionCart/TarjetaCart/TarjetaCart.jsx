import React, { useContext } from "react";
import "../TarjetaCart/tarjetaCart.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContadorUnidades from "../ContadorUnidades/ContadorUnidades";
import { CartContext } from "../../../../Context/CartContext";
import { Link } from "react-router-dom";

const TarjetaCart =  ( {producto} )=>{
    const {deleteCart, cart, setCart, mostarContador  } = useContext(CartContext)
   
    const mostrarPrecioConFormato = (precio, cantidad) => {   //cambiar formato del precio 
        let total = precio * cantidad
        return total.toLocaleString("es-ES");
      };
      
    

    const precioDinamico = producto.precio * producto.cantidad

    const {addToCart,calcularFinal} = useContext(CartContext)

    const onAdd = (valor)=>{
        let productCart = {...producto, cantidad:valor }
        addToCart(productCart)
        console.log(productCart)
        calcularFinal()
      }                                        //LOGICA PARA AGREGAR O QUITAR UNIDADES DESDE TARJETA CARRITO
    const agregarUnidad = (valor)=>{
        let nuevo = valor + 1 
        onAdd(nuevo)    
    }
    const quitarUnidad = (valor)=>{
        let nuevo = valor > 1 ? valor - 1  : 1  
        onAdd(nuevo)    
    }



    return (
        <div className="container-terminarCompra">
        <div className="container-tituloImage">
        <span className="span"></span>
        <Link onClick={()=>mostarContador()} to={`/Detalle/${producto.id}`}>
        <img className="terminarCompra-image" src={producto.img}></img>
        </Link>
        <h1 className="terminarCompra-title">{producto.nombre}</h1>
        </div>

         <div className="container-contador">
         <ContadorUnidades stock={producto.stock} initial={1} agregarUnidad={agregarUnidad} quitarUnidad={quitarUnidad} />
         <h2 className="precio-tarjetaCart">${mostrarPrecioConFormato(producto.precio, producto.cantidad)}</h2>
         <div className="icon-delete" onClick={()=>deleteCart(producto.id)}>
         <DeleteForeverIcon  className="icon-trash" />
         </div>
         </div>
        </div>
    )
}
export default TarjetaCart