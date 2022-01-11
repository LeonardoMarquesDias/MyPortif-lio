import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../../services/prismic';
import { GetStaticPaths, GetStaticProps } from 'next';

import { useRouter } from 'next/router';

import BannerProject from "../../../components/BannerProject";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { FaGithub } from 'react-icons/fa';
import LoadingScreen from '../../../components/LoadingScreen';
import { ProjectContainer } from '../../../styles/projectStyles';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  github: string;
  imgUrl: string;
}

interface ProjectsProps {
  project: IProject;
}

export default function Project({ project }: ProjectsProps) {
  function handleRedirect(url: string) {
    window.open(url);
  }

  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />
  }

  return (
    <ProjectContainer>
      <Header />
      <BannerProject 
        title={project.title}
        type={project.type}
        imgUrl={project.imgUrl}
      />

      <main>
        <div className="container">
          <p> {project.description} </p>
          <button onClick={() => handleRedirect(`${github}`)}>
            <FaGithub color="#eba417" />
              SEE IN REPOSITORY
          </button>
        </div>
      </main>
      
      <Footer />
    </ProjectContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const proj = await prismic.query([
    Prismic.predicates.at('document.type', 'projects')
  ]);

  const paths = proj.results.map(project => ({
    params: {
      slug: project.uid
    }
  }))

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID<any>('projects', String(slug), {});

  const project = {
    slug: response.uid,
    imgUrl: response.data.banner.url,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    github: response.data.github.url,
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};