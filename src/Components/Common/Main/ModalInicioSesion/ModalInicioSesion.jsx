import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import '../ModalInicioSesion/modalInicioSesion.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useFormik } from 'formik';
import * as Yup from "yup"



export default function ModalInicioSesion() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {handleChange,handleSubmit,errors} = useFormik({
    initialValues:{
     email: ""
    },
    validationSchema:Yup.object({
      email: Yup.string().email("El email debe contener @").required("Este campo es requerido")
    }),
   validateOnChange:false
  })
  return (
    <div>
      <Button style={{color:"white", backgroundColor:"#fd611a", borderRadius:"4px"}} onClick={handleOpen}>Iniciar sesion</Button>
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
          <div className='container-general-box' >
          <div className='container-box'>
          <HighlightOffIcon onClick={handleClose} className='icon-box' fontSize='medium' />
          <div className='tipografia-box'>
          <Typography  style={{color:"black"}}  id="transition-modal-title" variant="h6" component="h2">
            Iniciar sesion
          </Typography>
          <Typography style={{color:"#fd611a"}}  id="transition-modal-description" >
           Para comenzar ingresa tu email
          </Typography>
          </div>

          <form onSubmit={handleSubmit}>
          <TextField 
          style={{width:"500px"}}
          name='email' 
          onChange={handleChange} 
          id="standard-basic" 
          label="Email" 
          variant="standard"
          error= {errors.email ? true : false}
          helperText={errors.email}
           />
          <div className='container-botonBox'>
          <button type='submit' className='botones-box'>Continuar</button>
          <button type='text'  className='botones-box-crearCuenta'>Crear cuenta</button>
          </div>
          </form>

          </div>


          </div>
        </Fade>
      </Modal>
    </div>
  );
}