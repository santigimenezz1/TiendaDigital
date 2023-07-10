import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../AcordionCategorias/acordionCategorias.css'

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
            
 <Accordion >
        <AccordionSummary 
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Equipos y Notebooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Procesadores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Mothers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Placas de video</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Memorias ram</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Almacenamiento</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Refrigeracion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Gabinetes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
        aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fuentes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#fd611a"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Monitoes y televisores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
 
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}