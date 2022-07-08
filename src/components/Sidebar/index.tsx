import { FaGithub } from 'react-icons/fa';
import { Container } from './styles'

export function Sidebar() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <Container>
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="image" 
      />

      <div>
        <img src="https://github.com/LeonardoMarquesDias.png"/>
        
        <strong>Web Developer</strong>
        <span>UI Design</span>
      </div>

      <footer>
        <button onClick={() => handleRedirect('https://github.com/LeonardoMarquesDias')}>
          <FaGithub />
            <span>GitHub</span>
        </button>
      </footer>
    </Container>
  );
}