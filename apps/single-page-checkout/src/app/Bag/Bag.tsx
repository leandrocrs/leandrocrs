import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

/* eslint-disable-next-line */
export interface BagProps {
  expanded: boolean;
  onChange: () => void;
}

export function Bag({ expanded, onChange }: BagProps) {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>Bag</Typography>
        <Typography sx={{ color: 'text.secondary' }}>5 items</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Bag</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Bag;
