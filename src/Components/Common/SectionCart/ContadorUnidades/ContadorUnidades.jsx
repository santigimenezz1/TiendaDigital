import { useState } from "react";
import '../ContadorUnidades/contadorUnidades.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BotonDetelle from "../../SectionDetalles/DetalleProductos/BotonDetalle/BotonDetelle";

const ContadorUnidades = ({stock, initial, onAdd, totalProductosId, agregarUnidad, quitarUnidad})=>{
    const [pantalla, setPantalla] = useState(initial)
    
  
    
    const incrementarValor = ()=>{
        pantalla === stock ? setPantalla(pantalla(stock)) : setPantalla(pantalla + 1)
        setPantalla(stock > 0  ? pantalla + 1 :0)

        agregarUnidad(pantalla)
        
    }
    const decrementarValor = ()=>{
        setPantalla(pantalla > 0 ? pantalla - 1 : 0)
        quitarUnidad(pantalla)
    }
    
    return (
        <section className="container-agregandoProductoCarrito">
        <div className="container-contadorBoton">
        <button onClick={decrementarValor} className="botones"><RemoveIcon /></button>
          <h1 className="pantalla">{pantalla}</h1> 
          <button onClick={incrementarValor}  className="botones"><AddIcon /></button>
        </div>
        <div onClick={()=>onAdd(pantalla)}>
        <BotonDetelle text={"AGREGAR"} />
        </div>
        <div>
        </div>
        
        </section>
    )
}

export default ContadorUnidades