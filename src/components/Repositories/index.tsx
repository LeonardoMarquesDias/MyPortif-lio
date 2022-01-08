import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import RepositoryItem from './RepositoryItem';

import { Container } from './styles';

function Repositories() {
  return (
    <Container>
      <SectionTitle title="Main Pojects" />

      <section>
        <RepositoryItem 
          img=""
          title="Project 01"
          type="tecnology"
          slug="test"
        />
        <RepositoryItem 
          img=""
          title="Project 01"
          type="tecnology"
          slug="test"
        />
        <RepositoryItem 
          img=""
          title="Project 01"
          type="tecnology"
          slug="test"
        />
      </section>
      <button>
        <Link href="/repositories">
          <a>Global Projects</a>
        </Link>
      </button>
    </Container>
  );
};

export default Repositories;
