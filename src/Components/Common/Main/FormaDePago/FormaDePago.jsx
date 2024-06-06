import '../FormaDePago/formaDePago.css'
import TarjetaFormaPago from './TarjetaFormaPago/TarjetaFormaPago'

const FormaDePago = () => {
  return (
    <div className='container-general-formaPago'>
    <div className='container-formaPago'>
    <TarjetaFormaPago text={"Tarjeta de credito"} promociones={"Ver promociones bancarias"} img={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717660805/E-COMERCE%20CODER/tarjeta-de-debito_nipid5.png"}/>
    <TarjetaFormaPago text={"Tarjeta de debito"} promociones={"Ver promociones bancarias"} img={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717660805/E-COMERCE%20CODER/pago-con-tarjeta-de-credito_bkuyfm.png"}/>
    <TarjetaFormaPago  text={"Efectivo"} promociones={"Pago en efectivo 15% descuento"} img={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717660805/E-COMERCE%20CODER/dinero-en-efectivo_yahbwc.png"}/>
    <div className='displayFormaPago'>
    <TarjetaFormaPago text={"cuotas sin interes"} promociones={"Hasta 12 cuotas sin interes"} img={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1717660805/E-COMERCE%20CODER/calendario_zxuvkb.png"} />
    </div>
    </div>
    </div>
  )
}

export default FormaDePago