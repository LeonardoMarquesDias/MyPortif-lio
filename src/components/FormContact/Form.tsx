import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !message) {
      toast('Please, Fill in all Required Fields ', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');

      toast('Message sent successfully!', {
        style: {
          background: theme.green,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('There was an error trying to send your message. Please try again!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Message"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button type="submit" disabled={loading}>
        SUBMIT
      </button>
    </FormContainer>
  );
}