import { Link } from 'react-router-dom'
import '../ImagenesGrid/imagenesGrid.css'

const ImagenesGrid = () => {
  return (
    <div className='pruebaa'>
    <div className='container-principal-imagenesGrid'>
    <div className='container-imagenPrincipal'>
      <div><img className='imagen-imagenesGrid' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690224837/E-COMERCE%20CODER/D_NQ_847140-MLA70481318202_072023-OO_1_hdrf1q.webp'></img></div>
       <div className='container-text'>
       <h2 className='subtitulo-imagenPrincipal'>Descrubri</h2>
       <h2 className='titulo-imagenPrincipal'>Auriculares Gamer</h2>
       </div>
      </div>
     <div className='container-cajasFlex'>
     <Link to={"/Detalle/h3r4rSn4tSqZbuud2dwL"} className='cajasFlex'><img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399812/E-COMERCE%20CODER/Placas%20de%20video/10/compragamer_Imganen_general_21085_Placa_de_Video_MSI_GeForce_RTX_3090_24GB_GDDR6X_VENTUS_3X_OC_8ab3b437-grn_qnumbz.jpg'></img></Link>
     <Link to={"/Detalle/NOHuHb88H09KmUbPifWx"} className='cajasFlex'><img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399739/E-COMERCE%20CODER/Mothers/4/compragamer_Imganen_general_22663_Mother_Gigabyte_B450M_DS3H_V2_DDR4_AM4_22c8d45a-grn_kx2egh.jpg'></img></Link>
     <Link to={"/Detalle/tWt3ek4BQ1QwyTc7UMrG"} className='cajasFlex'><img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399946/E-COMERCE%20CODER/Refrigeracion/8/compragamer_Imganen_general_33637_Cooler_CPU_Thermaltake_UX100_ARGB_12a77695-grn_jfd3d1.jpg'></img></Link>
     <Link to={"/Detalle/zEaptSAkVvww9UZoeRr5"} className='cajasFlex'><img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399841/E-COMERCE%20CODER/Memorias%20ram/8/compragamer_Imganen_general_22497_Memoria_Corsair_DDR4_16GB__2x8GB__3200MHz_Vengeance_RGB_PRO_TUF_Gaming_cac16eab-grn_pynvar.jpg'></img></Link>
     <Link to={"/Detalle/yQNyYdkJV1QRU8KKolOB"} className='cajasFlex'><img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690400013/E-COMERCE%20CODER/Fuentes/10/compragamer_Imganen_general_33006_Fuente_ASUS_ROG_STRIX_1000W_80_Plus_Gold_Full_Modular_1000G_8c2a799c-grn_va6mho.jpg'></img></Link>
     <Link to={"/Detalle/fsELZ6fioEs0nuMqlp4Z"} className='cajasFlex'><img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399996/E-COMERCE%20CODER/Gabinetes/2/compragamer_Imganen_general_19517_Gabinete_Deepcool_MATREXX_70_ADD-RGB_3F_aa3299c1-grn_rl0bfn.jpg'></img></Link>
     <Link to={"/Detalle/B7G913ncXa1nbDeYUTXM"} className='cajasFlex displayGrid'><img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399865/E-COMERCE%20CODER/Almacenamiento/9/compragamer_Imganen_general_36899_Disco_Solido_SSD_M.2_ADATA_256GB_Legend_710_2400MB_s_NVMe_PCIe_Gen3_x4_044357a2-grn_khcauc.jpg'></img></Link>
     <Link to={"/Detalle/RbYYKhdwUpTAChOMsrlN"} className='cajasFlex displayGrid'><img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690399653/E-COMERCE%20CODER/Procesadores/compragamer_Imganen_general_36820_Procesador_AMD_Ryzen_9_7950X3D_5.7GHz_AM5_-_No_incluye_Cooler_-_41f6074a-grn_xrenr1.jpg'></img></Link>
 
     
 
     </div>
    </div>
    </div>
  )
}

export default ImagenesGrid