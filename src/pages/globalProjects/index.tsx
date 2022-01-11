import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import { GetStaticProps } from 'next';

import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { GlobalProjectsContainer } from '../../styles/globalProjectsStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProjeto[];
}

export default function GlobalProjects({ projects }: ProjectsProps) {
  return (
    <GlobalProjectsContainer>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </GlobalProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query<any>(
    [Prismic.Predicates.at('document.type', 'projects')],
    { orderings: '[document.first_publication_date desc]' }
  )

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    github: project.data.github.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
}