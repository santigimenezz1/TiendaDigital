import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from "yup"
import { CartContext } from '../../../../Context/CartContext';
import {serverTimestamp, addDoc, collection, updateDoc, doc} from "firebase/firestore"
import { db } from '../../../../firebaseConfig';
import '../ModalFinalizarCompra/modalFinalizarCompra.css'
import CheckIcon from '@mui/icons-material/Check';
import { Link, Navigate } from 'react-router-dom';
import {ToastContainer, toast} from "react-toastify"
import CloseIcon from '@mui/icons-material/Close';
import LoadingModal from '../LoadingModal/LoadingModal';






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};
export default function ModalFinalizarCompra() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false)
  const {cart, calcularFinal, clearCart} = useContext(CartContext)
  const [idCompra, setIdCompra]= useState("")

  const cruzClear = ()=>{
    clearCart()
    handleClose()
  }
 
 
 
     const {handleSubmit, handleChange, errors} = useFormik({
       initialValues:{
         name: "",
         apellido :"" ,
         email: ""
       },
       
       onSubmit: (data)=>{
       let order = {
       buyer: data,
       items: cart,
       total:calcularFinal(),
       date: serverTimestamp(),
      };
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        
      }, 5000);
 
     // CREAR LA ORDEN EN FIREBASE
     const ordersCollection = collection(db, "orders");
     addDoc(ordersCollection, order).then((res) => setIdCompra(res.id));

     //MODIFICAR STOCK RECORRO EL CARRITO Y RESTO LA CANTIDAD QUE AGREGO MENOS EL STOCK Y CON UPDATE ACTUALIZO
     cart.forEach((product)=>{
      updateDoc(doc(db, "products", product.id), {stock: product.stock - product.cantidad})
     })
     
   },
   
       validationSchema:Yup.object({
         name: Yup.string().required("Este campo es requerido"),
         email: Yup.string().required("Este campo es requerido").email(),
         apellido: Yup.string().required("este campo es requerido")
       }),
       validateOnChange:false,
     })
 
     
 
  

  return (
    <div style={{display:"flex", justifyContent:"end", marginRight:"100px", marginBottom:"15px"}}>
      <Button style={{ color:"white", border:"none", borderRadius:"4px", backgroundColor:"chocolate",}}  onClick={handleOpen}>Finalizar compra</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
        <div style={{border:"1px solid red", backgroundColor:"red"}}>
        
          <Box style={{border:"1px solid white", borderRadius:"7px"}} sx={style}>
          {
            idCompra === false && 
            <Typography style={{textAlign:"center", color:"#fd611a"}} id="transition-modal-title" variant="h6" component="h2">
                Finalizar compra
                </Typography>
            } 
           
            <div>
          
           
            {
            
                idCompra && loading === false
                ? (
                    
                  
                    <div className='container-pagoTerminado'>
                    <div className='icon-cruz-termianrPago'>
                    <Link to={"/categoria"}>
                    <CloseIcon onClick={()=>cruzClear()} fontSize='small' />
                    </Link>
                    </div>

                    <div style={{ display:"flex",alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
                    <img className='image-pago' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690321314/E-COMERCE%20CODER/png-transparent-check-mark-computer-icons-icon-design-cheque-successful-angle-logo-grass_srwnqy.png'></img>
                    <h1 style={{marginTop:"30px"}} className='titulo-pago'>Tu solicitud se ah procesado correctamente</h1>
                    <h1 className='subtitulo-pago'>En breve te contactamos via <span style={{color:"#25D366", fontWeight:"700"}}>whatsapp</span> </h1>
                    <h1 className='total-pago'>Total a pagar ${calcularFinal()}</h1>

                    <h1 style={{marginBottom:"10px"}} className='seguimiento-pago'>Codigo de seguimiento: <span className='span-seguimiento'>{idCompra}</span> </h1>
                    </div>

                    <div style={{marginBottom:"10px"}}>
                    <Link onClick={()=>clearCart()} className='buton-seguirComprandoPago' to={'/categoria'}>Seguir comprando</Link>
                    </div>
                    </div>
                    
                    
            
                  
                    
                    )

                    
                :  
                <form className='form-finalizarCompra' onSubmit={handleSubmit}>
                <Typography id="transition-modal-description" sx={{ mt: 2, fontSize:"25px" }}>
                Ingresa tus datos y te contactamos
              </Typography>
         
          <TextField onChange={handleChange} 
          type='text' 
          id="outlined-basic" 
          label="nombre" 
          variant="outlined" 
          name='name' 
          error= {errors.name ? true : false}
          helperText={errors.name}
          />
          
          
          <TextField onChange={handleChange} 
          type='text' 
          id="filled-basic" 
          label="apellido" 
          variant="outlined" 
          name='apellido' 
          error= {errors.apellido ? true : false} />
       
          <TextField onChange={handleChange} 
          helperText={errors.email}
          type='text'  
          id="standard-basic" 
          label="email" 
          variant="outlined" 
          name='email' 
          error= {errors.email ? true : false}
          />

          <TextField onChange={handleChange} 
          helperText={errors.telefono}
          type='text'  
          id="standard-basic" 
          label="telefono" 
          variant="outlined" 
          name='telefono' 
          error= {errors.telefono ? true : false}
          />
          <Button  type='submit'>Enviar</Button>
          {

            loading ?
            <LoadingModal/>
            :<h1>sin loading</h1> 
          }
          
           </form>
            }
            </div>
          </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}