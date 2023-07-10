import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import CheckIcon from '@mui/icons-material/Check';

export default function BuscadorDescuento() {
  return (
    <Paper className='container-buscadorDescuento'
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700 }}
    >
     
      <InputBase class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 container-buscadorDescuento css-1jrewif-MuiPaper-root"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Ingresar cupon de descuento"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <CheckIcon />
      </IconButton>
     
    </Paper>
  );
}