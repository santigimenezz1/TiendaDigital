import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../Acordion/acordion.css"

export default function Acordion({titulo, pregunta, descripcion}) {
  return (
    <div className='container-acordion'>
      <Accordion className='container-acordion-tarjeta'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className='pregunta'>{pregunta}</h3>
            <p>{descripcion}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
 
    </div>
  );
}