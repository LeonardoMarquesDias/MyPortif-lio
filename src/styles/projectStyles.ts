import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    width: 100%;
    
    p {
      color: ${({ theme }) => theme.gray300};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
      line-height: 2rem;
    }

    button {
      background-color: ${({ theme }) => theme.gray700};
      color: ${({ theme }) => theme.gold};
      padding: 0.8rem 2rem;
      border-radius: 0.5rem;
      border: none;
      font-size: 1.1rem;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5;

      svg {
        width: 22px;
        height: 22px;
      }

      svg:first-child {
        margin-right: 1rem;
      }

      svg.closeIcon {
        margin-left: 1rem;
      }

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      a {
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }

    @media (max-width: 700px) {
      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;