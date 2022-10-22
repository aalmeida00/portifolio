import React from "react";
import { DiWordpress, DiReact, DiTrello } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Stack</SectionTitle>
    <SectionText>Work with the following technologies:</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Javascript, React, Marionnett.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP, Node e MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTrello size="3rem" />
        <ListContainer>
          <ListTitle>Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            Scrum, Kanban, Agile
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
