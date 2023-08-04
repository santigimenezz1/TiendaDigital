import { useContext, useState } from "react";
import '../ContadorUnidades/contadorUnidades.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BotonDetelle from "../../SectionDetalles/DetalleProductos/BotonDetalle/BotonDetelle";
import { CartContext } from "../../../../Context/CartContext";
import { useLocation } from 'react-router-dom';


const ContadorUnidades = ({stock, initial, onAdd, totalProductosId, agregarUnidad, quitarUnidad, cantidad})=>{
    const [pantalla, setPantalla] = useState(initial)
    const [botonAgregar, setBotonAgregar] = useState(true)
    const location = useLocation();  //HOOK PARA VERIFICAR LA URL
 
    const incrementarValor = ()=>{
        pantalla === stock ? setPantalla(pantalla(stock)) : setPantalla(pantalla + 1)
        setPantalla(stock > 0  ? pantalla + 1 :0)
        agregarUnidad(pantalla)    
    }
    const decrementarValor = ()=>{
        pantalla > 1 && setPantalla(pantalla - 1 )
        quitarUnidad(pantalla)
    }
    return (
        <section className="container-agregandoProductoCarrito">
        <div className="container-contadorBoton">
        <button onClick={decrementarValor} className="botones"><RemoveIcon /></button>
          <h1 className="pantalla">{pantalla}</h1> 
          <button onClick={incrementarValor}  className="botones"><AddIcon /></button>
        </div>
        {  
            pantalla === stock ?
            <h4 style={{fontSize:"13px", color:"#fd611a"}}>Maximo alcanzado</h4> 
            :
            <h4 className="maximoAlcanzado">Maximo alcanzado</h4>
        }
        {
            location.pathname !== '/Cart' &&
            <div onClick={()=>onAdd(pantalla)}>
            <BotonDetelle text={"AGREGAR"} />
            </div> 
          }
        <div>
        </div>
        </section>
    )
}
export default ContadorUnidades