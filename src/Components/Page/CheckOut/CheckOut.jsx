import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from "yup"
import { CartContext } from '../../../Context/CartContext';
import { db } from '../../../firebaseConfig';
import {serverTimestamp, addDoc, collection, updateDoc, doc} from "firebase/firestore"



export default function CheckOut() {
 const {cart, calcularFinal} = useContext(CartContext)
 const [idCompra, setIdCompra]= useState("")



    const {handleSubmit, handleChange, errors} = useFormik({
      initialValues:{
        name: "",
        apellido :"" ,
        email: ""
      },
      
    
  
      validationSchema:Yup.object({
        name: Yup.string(),
        email: Yup.string(),
        apellido: Yup.string()
      }),
      validateOnChange:false,
    })


  return (
    <div>
    { 
      idCompra ?(
        <h1>hola</h1>
      )
      :(
        
        
        <form onSubmit={handleSubmit}>
     
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
      variant="filled" 
      name='apellido' 
      error= {errors.apellido ? true : false} />
   
      <TextField onChange={handleChange} 
      helperText={errors.email}
      type='text'  
      id="standard-basic" 
      label="email" 
      variant="standard" 
      name='email' 
      error= {errors.email ? true : false}
      />
      <Button type='submit'>Enviar</Button>
      
       </form>
      )
      
    
    }
    </div>
    
     );
  
}