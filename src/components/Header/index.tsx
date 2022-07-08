import NavLink from './NavLink';
import { HederContent } from './styles'

export default function Header() {


  return (  
    <HederContent>
      <div className="container-content">
        <div className="portfolio">
          <h3>Portfolio</h3>
        </div>

        <div>
          <ul>
            <NavLink title="Home" path="/" />
            <NavLink title="Projects" path="/globalProjects" includes />
          </ul>
        </div>
      </div>
    </HederContent>
  );
}