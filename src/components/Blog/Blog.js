import React from "react";

import { GridContainer } from "./BlogStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Blog = ({ posts }) => (
  <Section nopadding id="blog">
    <SectionDivider />
    <SectionTitle main>Blog</SectionTitle>
    <GridContainer>
      {posts.map((post, idx) => {
        return (
          <div key={idx}>
            <h1>{post.data.title}</h1>
            <p>{post.data.excerpt}</p>
          </div>
        );
      })}
    </GridContainer>
  </Section>
);

export default Blog;
