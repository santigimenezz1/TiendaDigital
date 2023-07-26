import { useEffect, useState } from 'react'
import '../SectionHome/sectionHome.css'
import TarjetaProductos from '../Tarjetas/TarjetaProductos/TarjetaProductos'
import Carrusel from '../Carrusel/Carrusel'
import TarjetaOfertas from '../Tarjetas/TarjetaOfertas/TarjetaOfertas'
import ImagenesGrid from '../ImagenesGrid/ImagenesGrid'
import MiniSectionFlex from '../MiniSectionFlex/MiniSectionFlex'
import { productsHome } from '../../../../ProductsMoksHome'
import FormaDePago from '../FormaDePago/FormaDePago'

const SectionHome = () => {
    const [producto,setProducto] = useState([])
    useEffect(()=>{
        const promesa = new Promise((res)=>{
           res(productsHome)
        })
        promesa.then((res)=>setProducto(res))
    },[])
      const todosProductos = producto
      const mitad = todosProductos.length / 2
      const arrPrimerosProductos = todosProductos.slice(0,mitad)
      const arrSegundosProductos = todosProductos.slice(mitad)
  return (
    <div>
    <Carrusel />
    <FormaDePago />
    <div className='container-primerosProductos'>
    <h1 className='tituloTarjetaProductos'>Relacionado con Notebooks</h1>
    <div className='tarjetaProductosFlex'>
    {arrPrimerosProductos.map((product)=>(<TarjetaProductos key={product.id} product={product}/>)) }
    </div>
    </div>
    <div className='container-primerosProductos'>
    <h1 className='tituloTarjetaProductos'>Relacionado con Monitores</h1>
    <div className='tarjetaProductosFlex'>
    {arrSegundosProductos.map((product)=>(<TarjetaProductos key={product.id} product={product}/>)) }
    </div>
    </div>
    <div className='tarjetaOfertaFlex'>
    <TarjetaOfertas dcto={20} producto={"Cafetera express"} image={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1689894449/E-COMERCE%20CODER/compragamer_Imganen_general_36913_Memoria_Adata_DDR4_16GB__2x8GB__4133MHz_XPG_Spectrix_D60G_RGB_73bb84d3-grn_k2j8lg.jpg"} />
    <TarjetaOfertas dcto={20} producto={"Cafetera express"} image={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1689894064/E-COMERCE%20CODER/compragamer_Imganen_general_37106_Monitor_Gamer_Samsung_24__G50_Curvo_144Hz_Full_HD_VA_FreeSync_f473d83a-grn_dhm9e7.jpg"} />
    </div>
    <ImagenesGrid />
    <MiniSectionFlex section={"ASD"} />
    <div className='container-primerosProductos'>
    <h1 className='tituloTarjetaProductos'>Relacionado con Placas de video</h1>
    <div className='tarjetaProductosFlex'>
    {arrPrimerosProductos.map((product)=>(<TarjetaProductos key={product.id} product={product}/>)) }
    </div>
    </div>
    <div className='container-primerosProductos'>
    <h1 className='tituloTarjetaProductos'>Relacionado con Auricuales</h1>
    <div className='tarjetaProductosFlex'>
    {arrSegundosProductos.map((product)=>(<TarjetaProductos key={product.id} product={product}/>)) }
    </div>
    </div>
    <div className='tarjetaOfertaFlex'>
    <TarjetaOfertas dcto={20} producto={"Cafetera express"} image={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1689894449/E-COMERCE%20CODER/compragamer_Imganen_general_36913_Memoria_Adata_DDR4_16GB__2x8GB__4133MHz_XPG_Spectrix_D60G_RGB_73bb84d3-grn_k2j8lg.jpg"} />
    <TarjetaOfertas dcto={20} producto={"Cafetera express"} image={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1689894064/E-COMERCE%20CODER/compragamer_Imganen_general_37106_Monitor_Gamer_Samsung_24__G50_Curvo_144Hz_Full_HD_VA_FreeSync_f473d83a-grn_dhm9e7.jpg"} />
    </div>
    <div className='container-primerosProductos'>
    <h1 className='tituloTarjetaProductos'>Relacionado con Auricuales</h1>
    <div className='tarjetaProductosFlex'>
    {arrSegundosProductos.map((product)=>(<TarjetaProductos key={product.id} product={product}/>)) }
    </div>
    </div>
    </div>
  )
}

export default SectionHome