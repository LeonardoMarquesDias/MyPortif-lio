import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Top page.
        </button>
        <section>
          <AiFillYoutube 
            onClick={() => handleRedirect('https://www.youtube.com/channel/UC0llqWHlBivBSRMxTtuHLrg')}
          />
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com/leonard57356040')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/LeonardoMarquesDias')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://www.linkedin.com/in/leolmdias/')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;