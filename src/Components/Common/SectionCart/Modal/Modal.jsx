import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Modal/modal.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius:"4px",
  p: 4,

  
};

export default function TransitionsModal({clearCart, cart}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  const verdadero = ()=>{
    clearCart ()
    handleClose()
  }
  



  return (
    <div>
    <div className='container-modalLeft'>
    <Link to={"/categoria"}>
    <KeyboardBackspaceIcon  fontSize='large' style={{color:"#fd611a", position:'relative', right:"20px" , cursor:"pointer"}}/>
    </Link>
    {

     cart.length > 1 &&<Button style={{color:"black"}} onClick={handleOpen}>Borrar carrito</Button> 
    }
    </div>
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
            <Typography style={{color:"black",display:"flex", justifyContent:"center"}} id="transition-modal-title" variant="h6" component="h2">
            Borrar carrito
            </Typography>
            <Typography style={{ display:"flex", justifyContent:"center"}} id="transition-modal-description" sx={{ mt: 2 }}>
           Seguro que quieres elimiar los productos del carrito?
            </Typography>
            <div style={{ marginTop:"20px", display:"flex", justifyContent:"center", gap:"30px"}}>
            <button onClick={verdadero} style={{border:"none",cursor:"pointer",width:"170px", height:"40px", backgroundColor:"#fd611a", borderRadius:"4px", color:"white"}}>ACEPTAR</button>
            <button onClick={handleClose}  style={{border:"2px solid #fd611a",cursor:"pointer", width:"170px", height:"40px",borderRadius:"4px", color:"#fd611a"}}>CANCELAR</button>            
            </div>
          </Box>
          
        </Fade>
      </Modal>
    </div>
  );
}