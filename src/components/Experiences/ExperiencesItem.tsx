import { ItemContainer } from './styles';

interface ExperienciaProps {
  school: string;
  year: string;
  title: string;
  description: string;
  certification: string;
  url: string;
}

export default function ExperiencesItem({
  school,
  year,
  title,
  description, 
  certification,
  url
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <a href={url} target="_blank">
          <h1>{school}</h1>
          <p>{year}</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <span>{certification}</span>
        </a>
      </div>
    </ItemContainer>
  );
}