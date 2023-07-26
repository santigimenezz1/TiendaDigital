import FormaDePago from "../Components/Common/Main/FormaDePago/FormaDePago";
import ModalCrearCuenta from "../Components/Common/Main/ModalCrearCuenta/ModalCrearCuenta";
import ModalInicioSesion from "../Components/Common/Main/ModalInicioSesion/ModalInicioSesion";
import SectionHome from "../Components/Common/Main/SectionHome/SectionHome";
import TarjetaDetalle from "../Components/Common/Main/Tarjetas/TarjetaDetalle/TarjetaDetalle";
import DetalleProductos from "../Components/Common/SectionDetalles/DetalleProductos/DetalleProductos";
import Ayuda from "../Components/Page/Ayuda/Ayuda";
import Cart from "../Components/Page/Cart/Cart";
import Categoria from "../Components/Page/Categorias/Categoria";
import Checkout from "../Components/Page/CheckOut/CheckOut";

export let routes = [
 
    {  
       id:"TarjetaProductosFlex", 
       path:'/',
       Element: SectionHome 
    },
    {  
        id:"DetalleProductos", 
        path:'/Detalle/:id',
        Element: DetalleProductos
     },
     {  
      id:"carruselLogos", 
      path:'/tarjetaPago',
      Element: FormaDePago
   },
     {  
        id:"Categoria",  //ACA DEBERIA PONER EL COMPONENTE PARA RENDERIZAR TODA LA PAGE DE CATEGORIA. Y EN BASE LA CATEGORIA QUE LE LLEGA ES COMO SE VA A FILTRAR LA TARJETA PRODUCTO
        path:'/categoria/:categoria',
        Element: Categoria 
     },
     {  
      id:"Categoria",  //ACA DEBERIA PONER EL COMPONENTE PARA RENDERIZAR TODA LA PAGE DE CATEGORIA. Y EN BASE LA CATEGORIA QUE LE LLEGA ES COMO SE VA A FILTRAR LA TARJETA PRODUCTO
      path:'/categoria',
      Element: Categoria 
   },
     {  
        id:"TarjetaDetalle", 
        path:'/TarjetaDetalle',
        Element: TarjetaDetalle
     },

   {  
      id:"spline", 
      path:'/modalInicioSesion',
      Element: ModalInicioSesion
   },
   {  
      id:"spline", 
      path:'/modalCrearCuenta',
      Element: ModalCrearCuenta
   },

     {
        id:"cart",
        path:"Cart",
        Element: Cart
     },
     { 
      id:"CheckOut",
      path:"/CheckOut",
      Element: Checkout 
   },
   
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   

   //----INICIO RUTA CATEGORIAS------------------
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   },
   { 
      id:"Ayuda",
      path:"/Ayuda",
      Element: Ayuda 
   }
   //--------FIN CATEGORIAS------------------



  


]