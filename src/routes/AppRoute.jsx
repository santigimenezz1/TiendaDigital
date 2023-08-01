import { Link, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Layout from '../Components/Layout/Layout/Layout'
import Boton from '../Components/Common/Navbar/Boton/Boton';

const AppRoute = () => {
    return (
        <Routes>
    
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={ <Element />} />
            ))}
          </Route>
    
          <Route path="*" element={ 
            <div style={{backgroundColor:"white",display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", border:"1px solid red", height:"100vh"}}>  
            <img style={{width:"40%"}} src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690756763/website-page-not-found-error-404-robot-character-broken-chatbot-mascot-disabled-site-on-technical-work-web-design-template-cartoon-online-bot-crash-accident-robotic-assistance-failure-eps-vector_eepy6c.jpg'></img>
           <div>
           <Link style={{textDecoration:"noneoo"}} to={"/"}><Boton text={"Ir a la pagina principal"} /></Link>
           </div>
            </div>
          } 
            />
        </Routes>
      );
    };

export default AppRoute