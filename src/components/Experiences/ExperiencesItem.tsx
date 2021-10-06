import { ItemContainer } from './styles';

interface ExperienciaProps {
  school: string;
  year: string;
  title: string;
  description: string;
  certification: string;
}

export default function ExperiencesItem({
  school,
  year,
  title,
  description, 
  certification
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{school}</h1>
        <p>{year}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{certification}</span>
      </div>
    </ItemContainer>
  );
}