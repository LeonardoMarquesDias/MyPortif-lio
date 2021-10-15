import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 3rem;
`;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > button {
    border: none;
    padding: 0.7rem 2rem;
    color: ${({ theme }) => theme.background};
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => darken(0.25, theme.gold)};
    transition: 0.5s;
    width: fit-content;

    &:hover {
      color: ${({ theme }) => theme.text};
    }

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.gold};
    }
  }

  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: ${({ theme }) => theme.gray300};
  }

  &::placeholder {
    color: ${({ theme }) => theme.border};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1 / 3;

  &:focus {
    border-color: ${({ theme }) => theme.gray300};
  }

  &::placeholder {
    color: ${({ theme }) => theme.border};
  }

  @media (max-width: 700px) {
    grid-column: 1;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;