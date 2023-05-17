import { useState } from "react";
import "../styles/MUIAccordion.scss";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    // borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  // borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

const MUIAccordion = () => {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(panel);
  };

  return (
    <div className="MUIAccordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={
          expanded === "panel1"
            ? "AccordionRow ActiveAccordionRow"
            : "AccordionRow"
        }
      >
        <AccordionSummary
          sx={
            expanded === "panel1"
              ? { background: "#209e2e", color: "white" }
              : {}
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>
            What makes us better than other lawncare companies?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Obligations of business will frequently occur sed that pleasures
            have to be repudiateds and our annoyances matters to this principle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className={
          expanded === "panel2"
            ? "AccordionRow ActiveAccordionRow"
            : "AccordionRow"
        }
      >
        <AccordionSummary
          sx={
            expanded === "panel2"
              ? { background: "#209e2e", color: "white" }
              : {}
          }
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>What colors of much do you use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Obligations of business will frequently occur sed that pleasures
            have to be repudiateds and our annoyances matters to this principle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className={
          expanded === "panel3"
            ? "AccordionRow ActiveAccordionRow"
            : "AccordionRow"
        }
      >
        <AccordionSummary
          sx={
            expanded === "panel3"
              ? { background: "#209e2e", color: "white" }
              : {}
          }
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>When is the best time of the year to prune?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Obligations of business will frequently occur sed that pleasures
            have to be repudiateds and our annoyances matters to this principle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className={
          expanded === "panel4"
            ? "AccordionRow ActiveAccordionRow"
            : "AccordionRow"
        }
      >
        <AccordionSummary
          sx={
            expanded === "panel4"
              ? { background: "#209e2e", color: "white" }
              : {}
          }
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography>Why does my lawn look red?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Obligations of business will frequently occur sed that pleasures
            have to be repudiateds and our annoyances matters to this principle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className={
          expanded === "panel5"
            ? "AccordionRow ActiveAccordionRow"
            : "AccordionRow"
        }
      >
        <AccordionSummary
          sx={
            expanded === "panel5"
              ? { background: "#209e2e", color: "white" }
              : {}
          }
          aria-controls="panel5d-content"
          id="panel5d-header"
        >
          <Typography>What causes those green clumps in my lawn?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Obligations of business will frequently occur sed that pleasures
            have to be repudiateds and our annoyances matters to this principle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        className={
          expanded === "panel6"
            ? "AccordionRow ActiveAccordionRow"
            : "AccordionRow"
        }
      >
        <AccordionSummary
          sx={
            expanded === "panel6"
              ? { background: "#209e2e", color: "white" }
              : {}
          }
          aria-controls="panel6d-content"
          id="panel6d-header"
        >
          <Typography>How do I tell if I have grubs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Obligations of business will frequently occur sed that pleasures
            have to be repudiateds and our annoyances matters to this principle.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        className={
          expanded === "panel7"
            ? "AccordionRow ActiveAccordionRow"
            : "AccordionRow"
        }
      >
        <AccordionSummary
          sx={
            expanded === "panel7"
              ? { background: "#209e2e", color: "white" }
              : {}
          }
          aria-controls="panel7d-content"
          id="panel7d-header"
        >
          <Typography>
            How often and how much should I water my trees?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Obligations of business will frequently occur sed that pleasures
            have to be repudiateds and our annoyances matters to this principle.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MUIAccordion;
