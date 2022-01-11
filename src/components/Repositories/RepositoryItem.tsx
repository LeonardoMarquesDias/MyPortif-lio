import { FaGithub } from 'react-icons/fa';
import { RepositoryContainer } from './styles';

interface ProjetoProps {
  title: string;
  type: string;
  img: string;
  github: string;
}

export default function RepositoryItem({ title, type, img, github }: ProjetoProps) {
  function handleRedirect(url: string) {
    window.open(url);
  }
  
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
        <a onClick={() => handleRedirect(`${github}`)} >
          See more <FaGithub color="#eba417" />
        </a> 
      </button>
    </RepositoryContainer>
  )
}