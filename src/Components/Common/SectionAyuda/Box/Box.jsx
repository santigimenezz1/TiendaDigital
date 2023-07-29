import BotonDetelle from '../../SectionDetalles/DetalleProductos/BotonDetalle/BotonDetelle'
import '../Box/box.css'


const CajaAyuda = ({titulo, texto, nombreBoton, subTexto}) => {
  return (
    <div className='container-box'>
    <h1 className='titulo-box'>{titulo}</h1>
    <span className='texto-box'>{texto}</span>
    <div className='container-ayuda-boton'>
    <h2 style={{fontSize:"18px", fontWeight:"400", color:"black"}}>{subTexto}</h2>
    <div className='container-botonBox'>
    <BotonDetelle text={nombreBoton} />
    </div>
    </div>
    </div>
  )
}

export default CajaAyuda