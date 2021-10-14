import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import StackItem from './StackItem';
import { Container } from './styles';

function MyStack() {
  return (
    <Container>
      <SectionTitle title="MyStack" />
      <section>
        <StackItem title="HTML" icon={<AiFillHtml5 />} />
        <StackItem title="CSS" icon={<FaCss3Alt />} />
        <StackItem title="Javascript" icon={<IoLogoJavascript />} />
        <StackItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
};

export default MyStack;
