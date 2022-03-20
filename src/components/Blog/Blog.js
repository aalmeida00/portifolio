import React from 'react';

import {
  GridContainer,
} from './BlogStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Blog = () => (
  <Section nopadding id="blog">
    <SectionDivider />
    <SectionTitle main>Blog</SectionTitle>
    <GridContainer>
     Soon this is gonna be a blog
    </GridContainer>
  </Section>
);

export default Blog;
