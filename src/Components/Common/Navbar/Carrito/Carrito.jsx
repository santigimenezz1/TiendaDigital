import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

 
 const Carrito = ()=>{

    return (
      <>
      <Badge badgeContent={1} color="error" style={{color:"black", cursor:"pointer"}}>
      <ShoppingCartIcon fontSize="large" />
      </Badge>

      </>
      ); 
}
export default Carrito