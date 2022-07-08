import { Container } from './styles';

interface BannerProjectProps {
  imgUrl: string;
}

export default function BannerProject({ imgUrl }: BannerProjectProps) {
  return (
    <Container imgUrl={imgUrl} />
  );
}
