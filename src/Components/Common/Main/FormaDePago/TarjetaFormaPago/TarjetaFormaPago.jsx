import '../TarjetaFormaPago/tarjetaFormaPago.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
const TarjetaFormaPago = ( {text, promociones} ) => {
  return (
    <div className='container-tarjetaFormaPago'>
    <div className='container-icon-tarjetaFormaPago'>
    <CreditCardIcon  />
    </div>
     <div className='container-texto-formaPago'>
     <h2 className='texto-tarjeta'>{text}</h2>
     <h3 className='texto-promociones'>{promociones}</h3>
     </div>
    </div>
  )
}

export default TarjetaFormaPago