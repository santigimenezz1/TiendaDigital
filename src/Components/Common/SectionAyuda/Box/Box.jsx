import BotonDetelle from '../../SectionDetalles/DetalleProductos/BotonDetalle/BotonDetelle'
import '../Box/box.css'


const CajaAyuda = () => {
  return (
    <div className='container-box'>
    <h1 className='titulo-box'>Servicios post venta y garantia</h1>
    <span className='texto-box'>Para realizar consultas/reclamos relacionadas con la garantía o devolución de alguna de tus compras, debajo de esta sección contamos con el apartado "Compra Gamer te ayuda. ¿Cuál es tu consulta?" donde debes exponer tu caso, seleccionando el motivo de "Postventa" que se adapte a tu requerimiento y uno de nuestros representantes te ofrecerá la información correspondiente sobre cómo proceder.</span>
    <div className='container-ayuda-boton'>
    <h2 style={{fontSize:"18px", fontWeight:"400", color:"black"}}>También podes sacar un turno para venir en forma presencial a gestionar tu garantía:</h2>
    <div className='container-botonBox'>
    <BotonDetelle text={"CONSULTA"} />
    </div>
    </div>
    </div>
  )
}

export default CajaAyuda