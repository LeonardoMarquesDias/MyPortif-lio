import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import RepositoryItem from './RepositoryItem';

import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  github: string;
  thumbnail: string;
}

interface RepositoriesProps {
  projects: IProjeto[];
}

function Repositories({ projects }: RepositoriesProps) {
  return (
    <Container>
      <SectionTitle title="Last Pojects" />
      <section>
        {projects.slice(0, 3).map(project => (
          <RepositoryItem 
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            github={project.github}
          />
        ))}
      </section>
      <button>
        <Link href="/globalProjects">
          <a>Global Projects</a>
        </Link>
      </button>
    </Container>
  );
};

export default Repositories;
