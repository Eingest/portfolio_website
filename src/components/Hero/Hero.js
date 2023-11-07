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
          As a Front-End Developer, my portfolio highlights my commitment to
          creating clean, user-friendly, and responsive designs. Explore my work
          and see how I bring ideas to the digital forefront.
        </SectionText>

        <ButtonContainer>
          <SectionText>CV:</SectionText>
          <Button onClick={() => window.open("https://google.com", "_blank")}>
            English
          </Button>
          <Button
            onClick={() => window.open("/cv_ger.pdf", "_blank")}
          >
            German
          </Button>
        </ButtonContainer>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
