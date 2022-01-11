import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

export default function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Contact me
          </>
        }
        description={
          <>
            by E-mail
          </>
        }
      />

      <Form />
    </Container>
  );
}
