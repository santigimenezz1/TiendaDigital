import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AcordionAyuda({ titulo, subtitulo, text }) {
  return (
    <div>
      <Accordion className="container-acordionAyuda">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 style={{ color: "#fd611a", fontSize: "18px", margin: "4px" }}>
            {subtitulo}
          </h2>
          {text}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
