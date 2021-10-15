import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      color: ${({ theme }) => theme.gray300};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;
      transition: 0.5s;
      

      &:hover {
        color: ${({ theme }) => theme.text};
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.gray300};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.text};
        }
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.9rem;
      }

      > section {
        gap: 0.5rem;
        
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;