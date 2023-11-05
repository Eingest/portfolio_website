import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const data = [
  { number: 2023, text: "Meta: Front-End Developer" },
  { number: 2023, text: "Codecademy: Full-Stack Engineer" },
  { number: 2022, text: "Codecademy: iOS Developer" },
  { number: 2021, text: "AlgoExpert: Completion" },
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} >
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Accomplishments;
