import { FaGithub } from 'react-icons/fa';
import { Container } from './styles';

export default function Header() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <Container>
      <header>
        <div className="headerContent">
          <nav>
            <a className="active">Home</a>
            <a>Repositories</a>
          </nav>

          <a onClick={() => handleRedirect('https://github.com/LeonardoMarquesDias')}>
            <button>
              <FaGithub color="#eba417" />
                Leonardo Dias
            </button>
          </a>
        </div>
      </header>
    </Container>
  );
}