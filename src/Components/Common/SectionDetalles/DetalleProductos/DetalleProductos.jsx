import { useEffect, useState } from "react"
import { products } from "../../../../productsMoks"
import { useParams } from "react-router-dom"
import TarjetaDetalle from "../../Main/Tarjetas/TarjetaDetalle/TarjetaDetalle"


const DetalleProductos = () => {
    const [data,setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        let productoSeleccionado = products.find((producto)=>producto.id === Number(id) )
        const promesa = new Promise((res)=>{
            res(productoSeleccionado)
        })
        promesa.then((res)=>setData(res))
    },[id])
  
  return (
    <>
    
    <TarjetaDetalle product={data} />

      </>
      
  )
}

export default DetalleProductos