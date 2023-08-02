import '../Enlaces/enlaces.css';
import { Link } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Box } from "@mui/material";
import { useState } from 'react';
import '../../Query/Query.css'


const Enlaces = () => {
  const [estado, setEstado] = useState(false);

  return (
    <>
      <Box>
        <ul className="container-enlaces">
          <Link className="enlaces" to={"/categoria"}>PRODUCTOS</Link>
          <Link className="enlaces" to={"/categoria/notebook"}>NOTOBOOK</Link>
          <Link className="enlaces" to={"/categoria/placaVideo"}>PLACAS DE VIDEO</Link>
          <Link className="enlaces" to={"/Ayuda"}>AYUDA</Link>
        </ul>
      </Box>

      <Box>
        <ul className={estado ? "query900px" : "query900px display"}>
          <div onClick={() => { setEstado(!estado) }}>
            <DehazeIcon className='icono-burguer'  />
          </div>
          <Link onClick={()=>setEstado(!estado)} className="enlaces" to={"/categoria"}>PRODUCTOS</Link>
          <Link onClick={()=>setEstado(!estado)} className="enlaces" to={"/categoria/notebook"}>NOTOBOOK</Link>
          <Link onClick={()=>setEstado(!estado)} className="enlaces" to={"/categoria/placaVideo"}>PLACAS DE VIDEO</Link>
          <Link onClick={()=>setEstado(!estado)} className="enlaces" to={"/Ayuda"}>AYUDA</Link>
        </ul>
      </Box>
    </>
  )
}

export default Enlaces;
