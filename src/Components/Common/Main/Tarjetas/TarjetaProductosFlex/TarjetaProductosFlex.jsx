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
      { 
        data.map((product)=>(
       <TarjetaProductos product={product} />
        ))
      }
    </div>


  )
}

export default TarjetaProductosFlex