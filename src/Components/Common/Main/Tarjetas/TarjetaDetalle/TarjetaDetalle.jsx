import React, { useContext, useEffect, useState } from 'react'
import '../TarjetaDetalle/tarjetaDetalle.css'
import ContadorUnidades from '../../../SectionCart/ContadorUnidades/ContadorUnidades'
import { CartContext } from '../../../../../Context/CartContext'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../../../firebaseConfig'
import { Box, Skeleton } from '@mui/material'

const TarjetaDetalle = ({producto, onAdd, totalProductosId}) => {
    const [carrusel, setCarrusel] = useState(true)
    const [data, setData] = useState([])
    const {categoria} = useParams()
    
    useEffect(() => {
      let productsCollection = collection(db, "products"); //traeme una colleccion, de esa db y la colleccion products
      let consulta;
      if(categoria){
        consulta = query( productsCollection, where("categoria", "==", categoria)) //peticion a todos los productos, si categoria == a categoria (useParams). filtra solo esos objetos que cumplen
      }else{
        consulta = productsCollection //si el useParams viene undefined pinta toda la coleccion
      }
      getDocs(consulta).then((res)=>{ //.then manejo la promesa. tengo que mapear el res.docs y retornar un nuevo objeto, {id:doc.id ...doc.data} porque el id no viene junto con el objeto doc.data, lo tengo que incluir
        let productos = res.docs.map( doc => {
          return {...doc.data(), id: doc.id}
        } )
        setData(productos) //y lo guardo en mi estado
      })
    }, [categoria]);
  
     


  return (
    <div className='container-tarjetaDetalle'>
    <div className='container-imagenes-tarjetaDetalle'>  
     {data.length > 0 ?(
      <>
      {
        carrusel === true
        ? <img className='image-principal' src={producto.img}></img>
        : <img className='image-principal' src={producto.imgSecundary}></img>
       }
       <div className='container-imagenes-carrusel'>
       <img onClick={()=> setCarrusel(true)} className='image-carrusel'  src={producto.img}></img>
       <img onClick={()=> setCarrusel(false)} className='image-carrusel' src={producto.imgSecundary}></img>
       </div>
      </>
     )
     :(
      <div style={{display:"flex", flexDirection:"column", gap:"40px", justifyContent:"center"}}>
      <Skeleton  variant="rectangular" width={400} height={400} /> 
      <Box style={{display:"flex", gap:"40px", justifyContent:"center"}}>
      <Skeleton  variant="rectangular" width={150} height={150} /> 
      <Skeleton  variant="rectangular" width={150} height={150} /> 
      </Box>
      </div>

     )
    }
      <div>
      </div>
      </div>
    <div className='container-info-tarjetaDetalle'>
    <div className='container-info'>
    <h1 className='titulo-tarjetaDetalle'>{producto.nombre}</h1>
    <h2 className='price'>  {producto.precio}</h2>
    <h3 className='cuotas'>Mismo precio en cuotas de $12.500</h3>
    <h1>{}</h1>
    </div>
    <div>


    <div className='container-caracteristicasBotones'>
    <div>
    </div>
     <div className='contadorBoton'>
     <h1>{producto.cantidad}</h1>
     {
      producto.stock === 0 ?<h1>sin stock</h1> :<ContadorUnidades initial={1}  stock={producto.stock} onAdd={onAdd} totalProductosId={totalProductosId}/>

     }
     </div>
     </div>
    </div>
    </div>



    </div>
  )
}

export default TarjetaDetalle