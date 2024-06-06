import  { useContext, useEffect, useState } from 'react'
import '../TarjetaDetalle/tarjetaDetalle.css'
import ContadorUnidades from '../../../SectionCart/ContadorUnidades/ContadorUnidades'
import { CartContext } from '../../../../../Context/CartContext'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../../../firebaseConfig'
import { Box, Skeleton } from '@mui/material'

const TarjetaDetalle = ({producto, onAdd, totalProductosId}) => {
    const [carrusel, setCarrusel] = useState(true)
    const [data, setData] = useState([])
    const {categoria} = useParams()
    const{cart, getQuantityById}= useContext(CartContext)

   
                           //FILTRADO POR CATEGORIA
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

                               //FILTRADO POR ID 

    const [dataa,setDataa] = useState({})
    const {id} = useParams()
    useEffect(()=>{
      let productsColeccion = collection(db, "products")
      let productRef = doc(productsColeccion, id)
      getDoc(productRef).then((res)=>{
        let producto = {...res.data(), id: res.id}
        setDataa(producto)
      })   
    },[id])

     const cuotas = Math.round(producto.precio / 6)
   const mostrarPrecioConFormato = (precio) => {  //FUNCION PARA PONERLE EL PUNTO A LOS PRECIOS 
    return precio.toLocaleString("es-ES");
  };
 
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
    <div className='container-info-detalle'>
    <>
    
    {Object.keys(dataa).length > 0 
      ?
      <>
      <h1 className='titulo-tarjetaDetalle'>{dataa.nombre}</h1>
      <h2 className='price'>  ${mostrarPrecioConFormato(producto.precio)}</h2>
      </>
      :
      <>
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={450} height={60}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={450} height={60}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={450} height={60}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={150} height={100}  />

      </>
    }
    {Object.keys(dataa).length > 0 ?
      <h3 className='cuotas'>Pagalo en 6 cuotas de ${cuotas}</h3>
      :
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={200} height={20}  />
    }
    {Object.keys(dataa).length > 0 ? (
      <>
      <div className='container-caracteristicas'>
      <h1>- {dataa.caracteristicas.graficos}</h1>
      <h1>- {dataa.caracteristicas.tamañoPantalla}</h1>
      <h1>- {dataa.caracteristicas.TipoPantalla}</h1>
      <h1>- {dataa.caracteristicas.TecnologíaIluminación}</h1>
      <h1>- {dataa.caracteristicas.Resolución}</h1>
      <h1>- {dataa.caracteristicas.Memoria}</h1>
      <h1>- {dataa.caracteristicas.TipoPantalla}</h1>
      
      </div>
      </>
    ) : (
      <>
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={550} height={30}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={550} height={30}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={550} height={30}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={550} height={30}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={550} height={30}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={550} height={30}  />
      <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={550} height={30}  />
      </>
    )}
  </>
    </div>
    <div>
    <div className='container-caracteristicasBotones'>
    <div>
    </div>
   
     <div className='contadorBoton'>
     
     {
      producto.stock === 0 ?<h1 className='titulo-sinStock'>Sin stock</h1> :<ContadorUnidades initial={1}   stock={producto.stock} onAdd={onAdd} totalProductosId={totalProductosId} producto={producto}/>

     }
     </div>
     </div>
    </div>
    </div>



    </div>
  )
}

export default TarjetaDetalle