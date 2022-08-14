import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import MyAccordion from "./MyAccordion";

export default function FaqPage() {
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
        <div className="expandIconWrapper">-</div>
        <div className="collapsIconWrapper">+</div>
      </Box>
    );
  };
  return (
    <div className="container">
      <div className="faq-page">
        <div className="faq-page__text">
          <h3 className="title">Ready to Get started?</h3>
          <p className="faq-page__p">
            When pattern is mentioned in interior design, it is easy to asso-
            ciate it with a geometric patterned wallpaper or colourful prints on
            interior fabrics.
          </p>
          <a className="btn btn--faq" href="">
            Contact us
          </a>
        </div>
        <div className="faq-page__accordion">
          <MyAccordion
            title={"What can I do to protect our planet?"}
            text={
              "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"
            }
          />
          <MyAccordion
            title={"How to save nature ecology?"}
            text={
              "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"
            }
          />
          <MyAccordion
            title={"What is nature conservation?"}
            text={
              "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"
            }
          />
        </div>
      </div>
    </div>
  );
}
