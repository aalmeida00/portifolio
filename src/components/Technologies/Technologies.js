import React from 'react';
import { DiWordpress, DiReact, DiTrello } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Trabalhei com diversas tecnologias no mundo do desenvolvimento web.
      Conheça algumas
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia com <br />
            React.js, Vue, SASS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia com <br />
            PHP, Node e MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTrello size="3rem" />
        <ListContainer>
          <ListTitle>Gestão</ListTitle>
          <ListParagraph>
            Experiencia com <br />
            Gestão de times agéis
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
