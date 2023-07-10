import React, { useEffect, useState } from 'react'
import "../Carrusel/carrusel.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carrusel = () => {
    const images = ["https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688993136/E-COMERCE%20CODER/carusel/DC_20230530164608_rjFXSHmL_bzunao.png","https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688993137/E-COMERCE%20CODER/carusel/pruebacroma1_yo0jdy_dstxvt.png","https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688993136/E-COMERCE%20CODER/carusel/DC_20230622145209_sFLACg11_larpjl_vgtob7.png", "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688993136/E-COMERCE%20CODER/carusel/DC_20230609171854_rNOKqu5y_izr5ce_gsrkz9.png","https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688993136/E-COMERCE%20CODER/carusel/DC_20230425101626_bcuYpbtc_qfae4n_sutfly.png","https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688993135/E-COMERCE%20CODER/carusel/CARRUSEL_1_x1uwgt.png","https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688993135/E-COMERCE%20CODER/carusel/carrusel5_lyi8nd_nsmr0z.png"]
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(images[0])
 const selectedNewImage = (index, images, next=true)=>{
     const condicion = next ? index < images.length -1  : index > 0 //si es true la condicion es ? sino la condicion es :
     const nextIndex = next? condicion? index + 1 : 0 
      : condicion? index - 1: images.length-1 
      setImage(images[nextIndex])
      setIndex(nextIndex)
    }
    const previus = () => {
       selectedNewImage(index, images, false)
    }   
    const next = ()=>{
      selectedNewImage(index, images)
    }

    useEffect(()=>{
      const intervalo = setInterval (()=>{
        next()
      },6000)
      return ()=> clearInterval(intervalo)
    })
  return (
    <>
    <div className='container-carrusel'>
    <img className='carrusel-image' src={image}></img>
    <p className='button-carrusel1' onClick={next}><ArrowBackIosIcon className='icon-carrusel' fontSize='large' /></p>
    <h1 className='button-carrusel2' onClick={previus}><ArrowForwardIosIcon className='icon-carrusel'fontSize='large'/></h1>
    </div>
    </>
   )
}
export default Carrusel
