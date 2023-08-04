import AcordionAyuda from '../../Common/SectionAyuda/AcordionAyuda/AcordionAyuda'
import '../Ayuda/ayuda.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CajaAyuda from '../../Common/SectionAyuda/Box/Box';
import InputAyuda from '../../Common/SectionAyuda/InputAyuda/InputAyuda';
import { TextField } from '@mui/material';
import BotonDetelle from '../../Common/SectionDetalles/DetalleProductos/BotonDetalle/BotonDetelle';

const Ayuda = () => {
  return (
    <div className='container-general-ayuda'>
  
    <div className='container-ayuda'>
    <div className='container-ayuda-titulo'>
    <h1 className='titulo-ayuda'>Preguntas frecuentes</h1>
    <KeyboardBackspaceIcon fontSize='large' style={{color:"#fd611a", cursor:"pointer"}}/>
    </div>

    <div className='container-ayuda-acordiones'>
    <AcordionAyuda  titulo={"Realizar un pedido"}  subtitulo={"¿Cómo realizo un pedido?"} text={"Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, para conocer el costo del envío colocás tu código postal en el recuadro correspondiente, elegís la mensajería de tu preferencia y debajo seleccionas la forma de pago. Luego hacés clic en el botón COMPRAR y podés acceder como cliente (si ya tenés cuenta en Compra Gamer) o crear un cliente nuevo. Por último, completás los pasos brindados por el asistente, hasta confirmar la compra. Se te asignará un número de pedido y se mostrarán los datos del mismo. También enviaremos un mail a tu correo electrónico registrado con los detalles del pedido realizado."}/>
    <AcordionAyuda titulo={"Precio"}  subtitulo={"¿El precio que figura en la web es el precio final?"} text={"Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos."}/>
    <AcordionAyuda titulo={"Formas de pago"}  subtitulo={"¿Cuáles son las formas de pago?"} text={"Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de los métodos Pago Gamer (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista."}/>
    <AcordionAyuda titulo={"Depósito - Transferencia bancaria"}  subtitulo={"¿Cómo abono a través de depósito/transferencia?"} text={"Una vez se realiza el pedido, te facilitamos los datos del CBU. Debes abonar e informar el pago desde nuestra web, antes de la fecha de vencimiento de la reserva."}/>
    <AcordionAyuda titulo={"Mercadopago"}  subtitulo={"¿Cómo puedo abonar a través de MercadoPago?"} text={"Podés hacerlo de tres formas: Con tarjetas online en cuotas (no se puede acceder a cuotas sin interés); A través de RapiPago/ PagoFácil (se abona al precio de lista, pero no se pueden hacer cuotas, sólo se puede abonar en un pago); y realizando una transferencia desde tu cuenta de MercadoPago."}/>
    <AcordionAyuda titulo={"Envíos"}  subtitulo={"¿Cómo gestiono el envío de mi pedido?"} text={"En primer lugar, para conocer el costo del envío, una vez al agregues al carrito tu compra, solo debes colocar tu código postal en el recuadro correspondiente, seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio. Actualmente realizamos envíos a todo el país través de Oca y Andreani; y si te encontrás en CABA o alrededores, podrás seleccionar el servicio de Mensajería Privada que es exclusivo de Compra Gamer. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de entrega."}/>
    <AcordionAyuda titulo={"Facturación"}  subtitulo={"¿Cómo tramito la factura de mi compra?"} text={"En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu dirección de correo electrónico la factura correspondiente. Por supuesto, también podés descargarla desde la sección Mi cuenta < Mis facturas. En caso de que precises factura A, solo debes ingresar tu CUIT al cargar el pedido por la web. Tené en cuenta que la factura A puede tener percepciones."}/>
    <AcordionAyuda titulo={"Pago Gamer"}  subtitulo={"¿Qué es Pago Gamer?"} text={"Es un método exclusivo de Compra Gamer, para abonar de manera online a través de tarjetas Visa y Mastercard, con el cual podés acceder a 3 y 12 cuotas sin interés si empleas una tarjeta de crédito brindada por una entidad bancaria."}/>
    </div>
     <div>
     <CajaAyuda titulo={"Servicio postventa y garantía"} subTexto={"También podes sacar un turno para venir en forma presencial a gestionar tu garantía: "}  texto={"Para realizar consultas/reclamos relacionadas con la garantía o devolución de alguna de tus compras, debajo de esta sección contamos con el apartado Compra Gamer te ayuda. ¿Cuál es tu consulta? donde debes exponer tu caso, seleccionando el motivo de 'Postventa' que se adapte a tu requerimiento y uno de nuestros representantes te ofrecerá la información correspondiente sobre cómo proceder"} nombreBoton={"Consultar"}/>
     
   
     

    </div>
 
    </div>
    </div>
  )
}

export default Ayuda