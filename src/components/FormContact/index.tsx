import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContact() {
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
};

export default FormContact;
