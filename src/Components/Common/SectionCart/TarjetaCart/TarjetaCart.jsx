import React, { useContext } from "react";
import "../TarjetaCart/tarjetaCart.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContadorUnidades from "../ContadorUnidades/ContadorUnidades";
import { CartContext } from "../../../../Context/CartContext";
import { Link } from "react-router-dom";

const TarjetaCart =  ( {producto} )=>{
    const {deleteCart} = useContext(CartContext)
    const precioDinamico = producto.precio * producto.cantidad
    return (
        <div className="container-terminarCompra">
        <div className="container-tituloImage">
        <span className="span"></span>
        <Link to={`/Detalle/${producto.id}`}>
        <img className="terminarCompra-image" src={producto.img}></img>
        </Link>
        <h1 className="terminarCompra-title">{producto.nombre}</h1>
        </div>

         <div className="container-contador">
         <ContadorUnidades stock={producto.stock} initial={1}/>
         <h2>{precioDinamico}</h2>
         <div onClick={()=>deleteCart(producto.id)}>
         <DeleteForeverIcon  className="icon-trash" />
         </div>
         </div>
        </div>
    )
}
export default TarjetaCart