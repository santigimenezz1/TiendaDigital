import '../FormaDePago/formaDePago.css'
import TarjetaFormaPago from './TarjetaFormaPago/TarjetaFormaPago'

const FormaDePago = () => {
  return (
    <div className='container-general-formaPago'>
    <div className='container-formaPago'>
    <TarjetaFormaPago />
    <TarjetaFormaPago />
    <TarjetaFormaPago />
    <div className='displayFormaPago'>
    <TarjetaFormaPago />
    </div>
    </div>
    </div>
  )
}

export default FormaDePago