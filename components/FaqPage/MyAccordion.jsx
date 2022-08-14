import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <img src="./expanded.svg" alt="" className="expandIconWrapper" />
      <img src="./expand.svg" alt="" className="collapsIconWrapper" />
    </Box>
  );
};

export default function MyAccordion({ title, text }) {
  return (
    <div>
      <Accordion
        sx={{
          "& .MuiAccordionSummary-expandIconWrapper": {
            transition: "0s !important",
          },
          boxShadow: "none",
          "& .MuiTypography-root": {
            fontWeight: 600,
            fontSize: "24px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>{title}</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className="accordion-text">{text}</p>
        </AccordionDetails>
      </Accordion>
      <hr />
    </div>
  );
}
