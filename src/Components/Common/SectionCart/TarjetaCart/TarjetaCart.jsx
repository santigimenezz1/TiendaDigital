import React from "react";
import "../TarjetaCart/tarjetaCart.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContadorUnidades from "../ContadorUnidades/ContadorUnidades";

const TarjetaCart = ({imagen, nombreProducto, stock, precioProducto} )=>{
    return (
        <div className="container-terminarCompra">
        <div className="container-tituloImage">
        <span className="span"></span>
        <img className="terminarCompra-image" src={imagen}></img>
        <h1 className="terminarCompra-title">{nombreProducto}</h1>
        </div>

         <div className="container-contador">
         <ContadorUnidades stock={stock} initial={1}/>
         <h2>${precioProducto}</h2>
         <DeleteForeverIcon className="icon-trash" />
         </div>
        </div>
    )
}
export default TarjetaCart