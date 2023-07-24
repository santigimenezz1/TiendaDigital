import {  useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TarjetaDetalle from "../../Main/Tarjetas/TarjetaDetalle/TarjetaDetalle"
import { CartContext } from "../../../../Context/CartContext"
import Swal from 'sweetalert2'
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../../firebaseConfig"
import {getDoc, collection, doc } from "firebase/firestore"


const DetalleProductos = () => {
   const {addToCart,calcularFinal,calcularTotalProductosId} = useContext(CartContext)
    const [data,setData] = useState({})
    const {id} = useParams()
    let totalProductosId = calcularTotalProductosId(id)
    useEffect(()=>{
      let productsColeccion = collection(db, "products")
      let productRef = doc(productsColeccion, id)
      getDoc(productRef).then((res)=>{
        let producto = {...res.data(), id: res.id}
        setData(producto)
      })
       
    },[id])

    const onAdd = (cantidad)=>{
      let productCart = {...data, cantidad: cantidad}
      addToCart(productCart)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: true,
        timer: 1500
      })
      toast.success("producto agregado")
      calcularFinal()
      
    }
  
  return (
    <>
    
    <TarjetaDetalle producto={data}  onAdd={onAdd} totalProductosId={totalProductosId} />
    <ToastContainer
    position="top-right"
    autoClose={800}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover
    theme="light"
    />

      </>
      
  )
}

export default DetalleProductos