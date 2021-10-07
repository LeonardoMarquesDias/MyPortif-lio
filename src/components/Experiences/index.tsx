import SectionTitle from '../SectionTitle';
import ExperiencesItem from './ExperiencesItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle  title="01 Year" description="Experience" />

      <section>
        <ExperiencesItem
          school="Rocketseat"
          year="2022"
          title="ReactJS"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
          certification="Certification..."
        />
        <ExperiencesItem
          school="Rocketseat"
          year="2021"
          title="Javascript"
          description="Lorem ipsum sss dolor sit amet, consectetur adipiscing elit. Aliquam"
          certification="Certification..."
        />
        <ExperiencesItem
          school="Rocketseat"
          year="2021"
          title="Git"
          description="Lorem idsadas psum dolor sit amet, consectetur adipiscing elit. Aliquam"
          certification="Certification..."
        />
        <ExperiencesItem
          school="Rocketseat"
          year="2020"
          title="CSS3 - HTML5"
          description="Lorem ipsumdsada  dolor sit amet, consectetur adipiscing elit. Aliquam"
          certification="Certification..."
        />
      </section>
    </Container>
  );
}

export default Experiences;