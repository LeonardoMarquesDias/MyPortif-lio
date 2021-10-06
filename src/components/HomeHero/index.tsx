import Image from 'next/image'
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hello...</h1>
          <h2>Welcome</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">Leonardo,</span>
            </div>
            <div>
              Surname: <span className="blue">Dias,</span>
            </div>
            <div>
              Location: <span className="blue">Liverpool UK</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Job</span> {'\u007B'}
            <div>
              Developer: <span className="blue">Front-end,</span>
            </div>
            <div>
              Technology: <span className="blue">ReactJS</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
