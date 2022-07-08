import SectionTitle from '../SectionTitle';
import ExperiencesItem from './ExperiencesItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle  title="02 Year" description="Experience" />

      <section>
        <ExperiencesItem
          school="UI Start"
          year="2022"
          title="UI Design"
          description="Basic theory and important concepts of UI Design and Figma to create interface for Mobile and Web devices"
          certification=""
          
        />
        <ExperiencesItem
          school="Rocketseat"
          year="2021"
          title="Ignite"
          description="Ignite is an acceleration program focusing on its expertise in ReactJS, building modern and reactive web interfaces using a modular and scalable library"
          certification=""
        />
        <ExperiencesItem
          school="Rocketseat"
          year="2020"
          title="Discover"
          description="Discover is program focusing on web programming fundamentals and expertise in HTML5, CSS3, javascript and anothers programming solutions"
          certification=""
        />
        <ExperiencesItem
          school="Video Course"
          year="2020"
          title="GitHub"
          description="Git and Github for Version Control on Git Flow methodology"
          certification=""
        />
      </section>
    </Container>
  );
}

export default Experiences;