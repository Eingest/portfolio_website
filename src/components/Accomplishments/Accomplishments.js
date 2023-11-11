import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const data = [
  {
    date: "08 / 2021",
    text: "AlgoExpert: Completion",
    url: "https://certificate.algoexpert.io/AE-e8b27b23f1",
  },
  {
    date: "09 / 2022",
    text: "Codecademy: iOS Developer",
    url: "https://www.codecademy.com/profiles/Eingest/certificates/61f8af7dd831aa000f1e63b6",
  },
  {
    date: "04 / 2023",
    text: "Codecademy: Full-Stack Engineer",
    url: "https://www.codecademy.com/profiles/Eingest/certificates/ffd0f42cce1a44e9a0108b365047a0a6",
  },
  {
    date: "08 / 2023",
    text: "Meta: Front-End Developer",
    url: "https://coursera.org/share/226eb4038c6bbadaefcd02b667a8d8c0",
  },
];

const Accomplishments = () => (
  <Section id="certificates">
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <a
          href={card.url}
          key={index}
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Box key={index}>
            <BoxNum>{`${card.date}`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        </a>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Accomplishments;
