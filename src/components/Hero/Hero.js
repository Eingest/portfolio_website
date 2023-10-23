import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ButtonContainer } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </SectionText>

        <ButtonContainer>
          <SectionText>CV:</SectionText>
          <Button onClick={() => window.open("https://google.com", "_blank")}>
            English
          </Button>
          <Button onClick={() => window.open("https://google.com", "_blank")}>
            German
          </Button>
        </ButtonContainer>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
