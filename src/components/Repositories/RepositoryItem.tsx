import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { RepositoryContainer } from './styles';

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function RepositoryItem({ title, type, slug, img }: ProjetoProps) {
  return (
    <RepositoryContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <p>- {type}</p>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a href="">
            See more <FaGithub color="#eba417" />
          </a>
        </Link>
      </button>
    </RepositoryContainer>
  )
}