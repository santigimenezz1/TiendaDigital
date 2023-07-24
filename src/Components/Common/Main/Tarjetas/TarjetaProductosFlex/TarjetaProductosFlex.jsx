import React, { useEffect, useState } from 'react'
import { products } from '../../../../../productsMoks'
import '../TarjetaProductosFlex/tarjetaProductosFlex.css'
import TarjetaProductos from '../TarjetaProductos/TarjetaProductos'
import { useParams } from 'react-router-dom'
import Carrusel from '../../Carrusel/Carrusel'
import ImagenesGrid from '../../ImagenesGrid/ImagenesGrid'

const TarjetaProductosFlex = () => {

    const [data, setData] = useState([])
    const {categoria} = useParams()

    useEffect(()=>{
      let productoFiltrado = products.filter((producto)=>producto.categoria === categoria)
     
      const promesa = new Promise((res,rej)=>{
        res(categoria === undefined ?products:productoFiltrado)
     })
     promesa.then((res)=>setData(res))

    },[categoria])


  return (
    <div className='container-tarjetaProductosFlex'>
    <Carrusel />
    <div className='container-tarjetaSectionProductos'>
    <img className='image-tarjeta-productos' src={data.img}></img>
    <div className='container-info'>
    <span className='text-tarjetaProductos'>
   {data.nombre}</span>
    <h2 className='price-tarjetaProductos'>{data.precio}</h2>
    <BotonDetelle text={"SUMAR AL CARRITO"} />
    </div>
      
    </div>
        
        </div>


  )
}

export default TarjetaProductosFlex