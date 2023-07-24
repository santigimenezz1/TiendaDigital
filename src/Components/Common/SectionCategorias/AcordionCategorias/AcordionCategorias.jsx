import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../AcordionCategorias/acordionCategorias.css'
import { Link } from 'react-router-dom';

export default function AcordionCategorias() {
  return (
    <div className='container-acordion'>
    <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
      aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Categorias</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <ul className='lista-accordion'>
       <Link className="linkCategorias" to={"/categoria/notebook"}><li>Equipos y Notebooks</li></Link> 
       <Link className="linkCategorias" to={"/categoria/procesadores"}><li>procesadores</li></Link> 
       <Link className="linkCategorias" to={"/categoria/mothers"}><li>mothers</li></Link> 
       <Link className="linkCategorias" to={"/categoria/placaVideo"}><li>placas de video</li></Link> 
       <Link className="linkCategorias" to={"/categoria/memoriaRam"}><li>memorias ram</li></Link> 
       <Link className="linkCategorias" to={"/categoria/almacenamiento"}><li>almacenamiento</li></Link> 
       <Link className="linkCategorias" to={"/categoria/regrigeracion"}><li>regrigeracion</li></Link> 
       <Link className="linkCategorias" to={"/categoria/gabinetes"}><li>gabinetes</li></Link> 
       <Link className="linkCategorias" to={"/categoria/fuentes"}><li>fuentes</li></Link> 
       <Link className="linkCategorias" to={"/categoria/monitores"}><li>monitores</li></Link> 

        </ul>


            
       
 
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}