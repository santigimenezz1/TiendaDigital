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

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Logo from '../../Navbar/Logo/Logo';
import DoneIcon from '@mui/icons-material/Done';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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


  //ENVIO DE FORMULARIO POR EMAIL JS 
  const form = useRef();
  const sendEmail = () => {
    emailjs.sendForm('service_pq131eq', 'template_0thietb', form.current, 'XjMquqg7KQ908ur2Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

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
      sendEmail()
        
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
         user_name: Yup.string().required("Este campo es requerido"),
         user_email: Yup.string().required("Este campo es requerido").email(),
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
        <div style={{ backgroundColor:"red"}}>
        
          <div className='container-general-modal'  style={{border:"10px solid #fd611a", borderRadius:"7px", }} sx={style}>
          {
            idCompra === false &&
            <div className='container-logo-modal'>
            <Logo />
            </div>
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
                    <div className='container-image-modal'>
                    <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690986577/istockphoto-1295706732-612x612_pree7x.jpg'></img>
                    </div>
                    <h1 style={{marginTop:"10px"}} className='titulo-pago'>Tu solicitud se ah procesado correctamente</h1>
                    <div className='container-textos-modalTerminar'>
                    <h1 className='subtitulo-pago'>En breve te contactamos via <span style={{color:"#25D366", fontWeight:"700"}}>whatsapp</span> </h1>
                    <h1 className='total-pago'>Total a pagar ${calcularFinal()}</h1>
                    <h1 style={{marginBottom:"10px"}} className='seguimiento-pago'>Codigo de seguimiento: <span className='span-seguimiento'>{idCompra}</span> </h1>

                    </div>
                   
                    </div>

                    <div style={{marginTop:"30px"}}>
                    <Link onClick={()=>clearCart()} className='buton-seguirComprandoPago' to={'/categoria'}>Seguir comprando</Link>
                    </div>
                    </div>
                    
                    
            
                  
                    
                    )

                    
                :  
                <>
                <div className='container-logo-modal'>
                <Logo />
                </div>
                <form ref={form} className='form-finalizarCompra' onSubmit={handleSubmit}>
                <Typography id="transition-modal-description" sx={{ mt: 2, fontSize:"25px" }}>
                Ingresa tus datos y te contactamos
              </Typography>
         
          <TextField onChange={handleChange} 
          type='text' 
          id="outlined-basic" 
          label="nombre" 
          variant="outlined" 
          name="user_name" 
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
          name="user_email"  
          error= {errors.email ? true : false}
          />

          <TextField onChange={handleChange} 
          helperText={errors.telefono}
          type='text'  
          id="standard-basic" 
          label="telefono" 
          variant="outlined" 
          name="message" 
          error= {errors.telefono ? true : false}
          />
          <div style={{display:"flex", justifyContent:"center"}}>
          <div className='container-boton-modal'>
          <button type='submit'>Enviar</button>
          </div>
          </div>
          {

            loading &&
            <LoadingModal/>
            
          }
          
           </form>
           </>
            }
            </div>
          </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}