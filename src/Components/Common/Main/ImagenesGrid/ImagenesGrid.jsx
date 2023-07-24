import React from 'react'
import '../ImagenesGrid/imagenesGrid.css'
import ImagenPrincipal from './ImagenPrincipal/ImagenPrincipal'
import ImagenSecundaria from './ImagenSecundaria/ImagenSecundaria'

const ImagenesGrid = () => {
  return (
    <div className='contain-imagenGrid'>
    <div className='container-tarjetaGrid'>
   <ImagenPrincipal />
   <div className='container-imagenSecundaria'>
   <ImagenSecundaria />
   <ImagenSecundaria />
   <ImagenSecundaria />
   <ImagenSecundaria />
   <ImagenSecundaria />
   <ImagenSecundaria />
   <ImagenSecundaria />
   <ImagenSecundaria />


   
   </div>
</div>
    </div>
  )
}

export default ImagenesGrid