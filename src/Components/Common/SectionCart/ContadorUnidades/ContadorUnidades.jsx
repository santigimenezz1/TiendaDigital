import React from "react";
import { useState, useEffect } from "react";
import '../ContadorUnidades/contadorUnidades.css'

const ContadorUnidades = ({stock, initial})=>{
    const [pantalla, setPantalla] = useState(initial)
    
    const decrementarValor = ()=> setPantalla(pantalla > 0 ? pantalla - 1 : 0)
    const incrementarValor = ()=>{
        pantalla === stock ? setPantalla(pantalla(stock)) : setPantalla(pantalla + 1)
        setPantalla(stock > 0  ? pantalla + 1 :0)
    }
    const agregarAlCarrito = ()=>{
        pantalla !== 0 
        ? alert(`Añadiste al carrito ${pantalla} unidades`)  
        : setPantalla(pantalla)
    }
    
    return (
        <section className="container-agregandoProductoCarrito">
        <div className="container-contadorBoton">
        <button onClick={decrementarValor} className="botones">-</button>
          <h1 className="pantalla">{pantalla}</h1> 
          <button onClick={incrementarValor} className="botones">+</button>
        </div>
        <div>
        </div>
        
        </section>
    )
}

export default ContadorUnidades