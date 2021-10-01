import { FaGithub } from 'react-icons/fa';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <header>
        <div className="headerContent">
          <nav>
            <a className="active">Home</a>
            <a>Repositories</a>
          </nav>

          <a href="https://github.com/LeonardoMarquesDias">
            <button>
              <FaGithub color="#eba417" />
              Leonardo Dias
            </button>
          </a>
        </div>
      </header>
    </Container>
  );
};

export default Header;
