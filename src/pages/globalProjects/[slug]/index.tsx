import BannerProject from "../../../components/BannerProject";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { FaGithub } from 'react-icons/fa';
import { ProjectContainer } from '../../../styles/projectStyles';

export default function Project() {

  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <ProjectContainer>
      <Header />
      <BannerProject 
        title="Project 01"
        type="Website"
        imgUrl=""
      />

      <main>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic architecto accusamus adipisci perferendis sapiente incidunt nobis odit possimus autem dolor nam, ipsum velit quasi. Distinctio placeat suscipit consequuntur. Quos corrupti fugit cumque optio possimus reiciendis eligendi tenetur ab expedita explicabo impedit illum, similique necessitatibus cupiditate blanditiis id labore nostrum. Aspernatur recusandae sed corrupti minima et dolorem voluptate dolores maiores rerum quibusdam id veniam molestias dignissimos eligendi illo nam laudantium facere enim quo, perferendis esse harum. Soluta voluptas saepe molestiae, ad necessitatibus reprehenderit neque voluptates quos ab autem enim esse excepturi itaque quis, ex, laudantium voluptate alias inventore totam illum vel reiciendis et! Excepturi corrupti natus nulla quisquam ducimus. Repellendus totam laboriosam nam odit quae nulla tempore, accusamus ea veniam?
          </p>
          <button onClick={() => handleRedirect('https://github.com/LeonardoMarquesDias')}>
            <FaGithub color="#eba417" />
              SEE IN REPOSITORY
          </button>
        </div>
      </main>
      
      <Footer />
    </ProjectContainer>
  )
}