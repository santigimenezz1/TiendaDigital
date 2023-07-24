import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import '../ModalCrearCuenta/modalCrearCuenta.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:600,
  bgcolor: 'background.paper',
  p: 4,
  borderRadius:"4px",
  border:"none"
 
};

export default function ModalCrearCuenta() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {handleChange,handleSubmit, errors} = useFormik({
    initialValues:{
      nombre:"",
      apellido:"",
      email:"",
      codigoArea:"",
      telefono:"",
      contraseña:"",
      repetirContraseña:"",
    },
    onSubmit: (data)=>console.log(data),
    validateOnChange:false,
    validationSchema:Yup.object({
      nombre:Yup.string().min(4).max(10).required(),
      apellido:Yup.string().min(4).max(10).required(),
      email:Yup.string().min(4).email().required(),
      codigoArea:Yup.string().min(3),
      telefono:Yup.number().min(5),
      
    })
  })
 console.log({errors})
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
          <Box sx={style}>
          <div className='container-box'>
          <HighlightOffIcon onClick={handleClose} className='icon-box' fontSize='medium' />
          <div className='tipografia-box'>
          <Typography  style={{color:"black"}}  id="transition-modal-title" variant="h6" component="h2">
            Registrarse
          </Typography>
          <Typography style={{color:"#fd611a"}}  id="transition-modal-description" >
          Ingresá tus datos para crear tu cuenta
          </Typography>
          </div>

           <form onSubmit={handleSubmit}> 
           

          <div className='iputs-form'>
          <TextField 
          name='nombre' 
          nChange={handleChange} 
          className='input-name' 
          id="standard-basic" 
          label="Nombre" 
          variant="standard"
          helperText={errors.nombre} 
          error= {errors.nombre ? true : false}

          />

          <TextField name='apellido' 
          onChange={handleChange} 
          className='input-name' 
          id="standard-basic" 
          label="Apellido" 
          variant="standard"
          helperText={errors.apellido} 
          error= {errors.apellido ? true : false}

          />
          </div>

          <TextField 
          name='email' 
          onChange={handleChange} 
          id="standard-basic" 
          label="Email" 
          variant="standard"
          helperText={errors.email} 
          error= {errors.email ? true : false}

          />

          <div className='iputs-form'>
          <h1 style={{ display:"flex", alignItems:"center", color:"black"}}>telefono</h1>
          <div></div>
          <TextField 
          name='codigoArea' 
          onChange={handleChange} 
          className='input-codigoArea' 
          id="standard-basic" 
          label="Codigo de area" 
          variant="standard"
          helperText={errors.codigoArea} 
          error= {errors.codigoArea ? true : false}

          />

          <TextField name='telefono' 
          onChange={handleChange} 
          className='input-telefono' 
          id="standard-basic" 
          label="Telefono" 
          variant="standard"
          helperText={errors.telefono} 
          error= {errors.telefono ? true : false}

          />

          </div>
          <div className='input-password'>
          <TextField name='contraseña' 
          onChange={handleChange} 
          className='input-name' 
          id="standard-basic" 
          label="Contraseña" variant="standard" 
          type='password'
          helperText={errors.password} 
          error= {errors.password ? true : false}

          />

          <TextField name='repetirContraseña' 
          onChange={handleChange} 
          className='input-name' 
          id="standard-basic" 
          label="Repetir contraseña" variant="standard" 
          type='password'
          helperText={errors.repetirContraseña} 
          error= {errors.repetirContraseña ? true : false}

          />

          </div>
          <div className='iputs-form'>
          </div>
          <button type='submit' className='buton-crearCuenta'>Crear cuenta</button>
          <div className='container-link'>
          <h1 style={{color:"black"}}>¿Ya tenes una cuenta? inicia sesion<Link to={"/modalIniciarSesion"} style={{textDecoration:"none", paddingLeft:"5px"}}>acá</Link></h1>  
          </div>
          </form>
          </div>


          </Box>
        </Fade>
      </Modal>
    </div>
  );
}