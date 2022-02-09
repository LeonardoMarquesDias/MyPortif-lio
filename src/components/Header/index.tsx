import NavLink from './NavLink';
import { FaGithub } from 'react-icons/fa';
import { HederContent } from './styles'

export default function Header() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (  
    <HederContent>
      <div className="container-content">
        <div>
          <h3>Portf00lio</h3>
        </div>

        <div>
          <ul>
            <NavLink title="Home" path="/" />
            <NavLink title="Projects" path="/globalProjects" includes />
          </ul>
        </div>
        
        <div>     
          <button onClick={() => handleRedirect('https://github.com/LeonardoMarquesDias')}>
            <FaGithub color="#eba417" />
              Leonardo Dias
          </button>
        </div>
      </div>
    </HederContent>
  );
}