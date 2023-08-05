import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../AcordionCategorias/acordionCategorias.css';
import { Link } from 'react-router-dom';

export default function AcordionCategorias() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='container-acordion'>
      <Accordion expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fd611a" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Categorias</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className='lista-accordion'>
            <Link
              className="linkCategorias"
              to={"/categoria/notebook"}
              onClick={handleAccordionChange}
            >
              <li>Equipos y Notebooks</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/procesadores"}
              onClick={handleAccordionChange}
            >
              <li>procesadores</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/mothers"}
              onClick={handleAccordionChange}
            >
              <li>mothers</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/placaVideo"}
              onClick={handleAccordionChange}
            >
              <li>placas de video</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/memoriaRam"}
              onClick={handleAccordionChange}
            >
              <li>memorias ram</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/almacenamiento"}
              onClick={handleAccordionChange}
            >
              <li>almacenamiento</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/regrigeracion"}
              onClick={handleAccordionChange}
            >
              <li>regrigeracion</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/gabinetes"}
              onClick={handleAccordionChange}
            >
              <li>gabinetes</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/fuentes"}
              onClick={handleAccordionChange}
            >
              <li>fuentes</li>
            </Link>
            <Link
              className="linkCategorias"
              to={"/categoria/monitores"}
              onClick={handleAccordionChange}
            >
              <li>monitores</li>
            </Link>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
