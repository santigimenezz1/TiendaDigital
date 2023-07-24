import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Layout from '../Components/Layout/Layout/Layout'

const AppRoute = () => {
    return (
        <Routes>
    
          <Route element={<Layout />}>
            {routes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={ <Element />} />
            ))}
          </Route>
    
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      );
    };

export default AppRoute