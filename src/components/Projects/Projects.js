import React from 'react';

import {
  GridContainer,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Blog</SectionTitle>
    <GridContainer>
     Soon this is gonna be a blog
    </GridContainer>
  </Section>
);

export default Projects;
