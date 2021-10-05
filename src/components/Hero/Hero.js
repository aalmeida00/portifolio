import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem vindo ao<br />
        meu portifólio
      </SectionTitle>
      <SectionText>
        Especialista em front end e Javascript.
      </SectionText>
    <Button onClick={() => window.location = 'mailto:andre@aalmeida.tech'}>Entre em contato</Button>
    </LeftSection>

  </Section>
);

export default Hero;