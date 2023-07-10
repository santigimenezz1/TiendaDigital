import React from 'react'
import TarjetaCart from '../../Common/SectionCart/TarjetaCart/TarjetaCart'
import TarjetaDescuento from '../../Common/SectionCart/TarjetaCupon/TarjetaCupon'
import SelectorPago from '../../Common/SectionCart/SelectorPago/SelectorPago'
import Boton from '../../Common/Navbar/Boton/Boton'

const Cart = () => {
  return (
    <div style={{ padding:"30px", backgroundColor:"#eee"}}>
    <TarjetaCart precioProducto={"250.000"}  stock={5} nombreProducto={"Notebook Gamer Asus TUF FX506L 15.6 Core I5 10300H 16GB 512GB SSD NVMe "} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688943355/E-COMERCE%20CODER/compragamer_Imganen_general_36805_Notebook_Gamer_Asus_TUF_FX506L_15.6__Core_I5_10300H_16GB_512GB_SSD_NVMe_GTX_1650_W11_Home_144Hz_63a3df9f-med_fn0axh.jpg"} />
    <TarjetaCart precioProducto={"250.000"}  stock={5} nombreProducto={"Notebook Gamer Asus TUF FX506L 15.6 Core I5 10300H 16GB 512GB SSD NVMe"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688943354/E-COMERCE%20CODER/compragamer_Imganen_general_32188_Notebook_Lenovo_ThinkPad_E14_FHD_14__Ryzen_7_5700U_8GB_256GB_SSD_NVMe_Freedos_ad39b701-med_jldfc6.jpg"} />
    <TarjetaCart precioProducto={"250.000"}  stock={5} nombreProducto={"Notebook Gamer Asus TUF FX506L 15.6 Core I5 10300H 16GB 512GB SSD NVMe"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688943354/E-COMERCE%20CODER/compragamer_Imganen_general_32191_Notebook_Lenovo_ThinkPad_E14_Gen2_FHD_14__Core_I5_1135G7_8GB_256GB_SSD_NVMe_Freedos_8b72af04-med_bsbu8y.jpg"} />
    <TarjetaCart precioProducto={"250.000"}  stock={5} nombreProducto={"Notebook Gamer Asus TUF FX506L 15.6 Core I5 10300H 16GB 512GB SSD NVMe"} imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1688942284/E-COMERCE%20CODER/compragamer_Imganen_general_30569_Notebook_Gamer_Asus_ROG_Zephyrus_G14_QHD_14__Ryzen_7_4800HS_16GB__2x8GB__512GB_SSD_NVMe_GTX_1650_W10_120Hz_7030dae4-grn_okdxwz.jpg"} />
    <TarjetaDescuento />
    <SelectorPago />
    <div style={{display:"flex", justifyContent:"end", alignItems:"center", marginRight:"70px"}}>
    <Boton text={"Comprar"}/>
    </div>


    </div>
  )
}

export default Cart