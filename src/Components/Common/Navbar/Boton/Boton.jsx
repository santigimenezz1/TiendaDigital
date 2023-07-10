import '../Boton/boton.css'
const Boton = ({text, callback})=>{
    return (
        <button  onClick={callback} className= {text === "Comprar ahora" ?'container-button' : 'container-button sumarCarrito' }>
          {text}
        </button>
    )
}
export default Boton