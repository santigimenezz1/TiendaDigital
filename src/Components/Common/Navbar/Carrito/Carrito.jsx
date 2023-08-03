import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../../../Context/CartContext';
 
 
 const Carrito = ()=>{
  const {calcularTotalProductos, ocultarBotonContador} = useContext(CartContext)
  let totalProductos = calcularTotalProductos()

    return (
      <>
      <div>
      <Badge  badgeContent={totalProductos} color="error" style={{color:"black", cursor:"pointer"}}>
      <ShoppingCartIcon fontSize="large" />
      </Badge>
      </div>

      </>
      ); 
}
export default Carrito