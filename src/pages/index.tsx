import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { useEffect } from 'react';

import Header from "../components/Header";
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences'
import MyStack from '../components/MyStack';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';
import Repositories from '../components/Repositories';
import { HomeContainer } from '../styles/homeStyles';

import 'aos/dist/aos.css';
import Aos from 'aos';


interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  github: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProjeto[];
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  },[])

  return (
    <HomeContainer>
      <Head>
        <title>Home</title>
        <meta
          name="ReactJS Developer Portfolio"
          content="Falta por uma descrição melhor aqui"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:ReactJS Developer Portfolio"
          content="Falta por uma descrição melhor aqui"
        />
      </Head>
      
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Repositories projects={projects}/>
        <MyStack />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
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