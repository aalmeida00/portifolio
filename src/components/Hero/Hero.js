import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome
        <br />
        my name is Andre Almeida
      </SectionTitle>
      <SectionText>Frontend Specialist</SectionText>
      <Button
        onClick={() => (window.location = "mailto:andre.silva78@hotmail.com")}
      >
        Get in touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
