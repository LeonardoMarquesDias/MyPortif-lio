import { Container, SpinnerContainer } from './styles';

export default function LoadingScreen() {
  return (
    <Container>
      <SpinnerContainer>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </SpinnerContainer>
    </Container>
  );
}

