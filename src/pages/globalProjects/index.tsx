import Header from '../../components/Header'
import ProjectItem from '../../components/ProjectItem'
import { GlobalProjectsContainer } from '../../styles/GlobalProjectsStyles'

export default function GlobalProjects() {
  return (
    <GlobalProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="Project 01"
          type="Website"
          slug="test"
          imgUrl="Project 01"
        />
        <ProjectItem
          title="Project 01"
          type="Website"
          slug="test"
          imgUrl="Project 01"
        />
        <ProjectItem
          title="Project 01"
          type="Website"
          slug="test"
          imgUrl="Project 01"
        />
        <ProjectItem
          title="Project 01"
          type="Website"
          slug="test"
          imgUrl="Project 01"
        />
      </main>
    </GlobalProjectsContainer>
  )
}