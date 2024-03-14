import '../FormaDePago/formaDePago.css'
import TarjetaFormaPago from './TarjetaFormaPago/TarjetaFormaPago'

const FormaDePago = () => {
  return (
    <div className='container-general-formaPago'>
    <div className='container-formaPago'>
    <TarjetaFormaPago text={"Tarjeta de credito"} promociones={"Ver promociones bancarias"}/>
    <TarjetaFormaPago text={"Tarjeta de debito"} promociones={"Ver promociones bancarias"}/>
    <TarjetaFormaPago  text={"Efectivo"} promociones={"Pago en efectivo 15% descuento"}/>
    <div className='displayFormaPago'>
    <TarjetaFormaPago text={"cuotas sin interes"} promociones={"Hasta 12 cuotas sin interes"} />
    </div>
    </div>
    </div>
  )
}

export default FormaDePago