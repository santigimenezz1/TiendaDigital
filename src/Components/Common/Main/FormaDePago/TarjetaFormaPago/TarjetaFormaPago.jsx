import '../TarjetaFormaPago/tarjetaFormaPago.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
const TarjetaFormaPago = () => {
  return (
    <div className='container-tarjetaFormaPago'>
    <div className='container-icon-tarjetaFormaPago'>
    <CreditCardIcon fontSize='large' />
    </div>
     <div>
     <h2 style={{color:"black"}}>Tarjeta de credito</h2>
     <h3 style={{color:"blue", fontWeight:"200", cursor:"pointer"}}>Ver promociones bancarias</h3>
     </div>
    </div>
  )
}

export default TarjetaFormaPago