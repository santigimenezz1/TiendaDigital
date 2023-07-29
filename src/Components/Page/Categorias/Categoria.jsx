import { useEffect, useState } from "react"
import TarjetaSectionProductos from "../../Common/Main/Tarjetas/TarjetaCategorias/TarjetaSectionProductos"
import AcordionCategorias from "../../Common/SectionCategorias/AcordionCategorias/AcordionCategorias"
import '../Categorias/categorias.css'
import {  useParams } from "react-router-dom"
import { db } from "../../../firebaseConfig"
import {getDocs, collection, query, where} from "firebase/firestore"
import { Box, Skeleton } from "@mui/material"
//db = base de datos
//getDocs = todos los documentos
//colleccion = toda la coleccion
//query = hacer una peticion
//where= cuando, pongo la condicion para filtrar


const Categoria = () => {
  const [data, setData] = useState([])
  const {categoria} = useParams()
  let arr = [1,2,3,4,5]
  
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
    <div className="container-categorias">
    <img className="image-categorias" src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1689022071/E-COMERCE%20CODER/subcategoria_default_u119l7.jpg"></img>
    <div className="container-tarjetas-categorias">
    <AcordionCategorias />
    <div className="tarjetas-productos-categorias">
    {
      data.length > 0 ?
      
      data.map((producto)=>{ 
      return <TarjetaSectionProductos key={producto.id} producto={producto} />
      } //y aca mapeo el estado con toda la coleccion o con la parte filtrada, depende si me encuentro en categoria o en categoria/algo mas
      )
      : arr.map((elemento)=>{
        
        return (
          <div key={elemento}>
          <Box sx={{maxWidth:"1000px", borderRadius:"4px" ,backgroundColor:"white", display:"flex", border:"1px solid white", justifyContent:"center", alignItems:"center", gap:"45px", margin:"15px"}}>
          <Box sx={{margin:"30px"}}>
          <Skeleton  variant="rectangular" width={170} height={170} /> 
          </Box>
          <Box sx={{display:"flex", flexDirection:"column"}}>
          <Skeleton  variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px"}} width={550} height={30}  />
          <Skeleton variant="text" sx={{ fontSize: "1.3rem", marginRight:"50px" }} width={550} height={30} />
          <Skeleton variant="text" sx={{ fontSize: "1.3rem"}} width={100} height={30} />
          <Box sx={{marginTop:"10px"}}>
          <Skeleton  variant="rounded" width={250} height={40}  /> 
          </Box>
          </Box>

          </Box>

        </div>
        )
         

      })
     }
   
    </div>
    </div>
    </div>
  )
}

export default Categoria









