import './App.css'
import TarjetaProductosFlex from './Components/Common/Main/Tarjetas/TarjetaProductosFlex/TarjetaProductosFlex'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout/Layout'
import DetalleProductos from './Components/Common/SectionDetalles/DetalleProductos/DetalleProductos'
import TarjetaDetalle from './Components/Common/Main/Tarjetas/TarjetaDetalle/TarjetaDetalle'
import Cart from './Components/Page/Cart/Cart'
import Carrusel from './Components/Common/Main/Carrusel/Carrusel'

function App() {

  return (
    <BrowserRouter>
    <Routes>

    <Route element={<Layout />}>
    <Route path='/' element={<TarjetaProductosFlex />} />
    <Route path='/Detalle/:id' element={<DetalleProductos />} />
    <Route path='/categoria/:categoria' element={<TarjetaProductosFlex />} />
    <Route path='/categoria/:categoria' element={<TarjetaProductosFlex />} />
    <Route path='/categoria/:categoria' element={<TarjetaProductosFlex />} />
    <Route path='/TarjetaDetalle' element={<TarjetaDetalle />}></Route>

    <Route path='/Cart' element={<Cart />} />
    


    </Route>

    </Routes>
    </BrowserRouter>

    
    
  )
}

export default App
