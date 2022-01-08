import { darken } from 'polished';
import styled from 'styled-components';

interface RepositoryProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }

  > button {
    background: ${({ theme }) => theme.gold};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    font-weight: normal;
    border: none;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => darken(0.25, theme.gold)};
    }

    a {
      text-transform: uppercase; 
      font-size: 1.1rem;
      color: ${({ theme }) => theme.gray700};
    }

    @media (max-width: 500px) {
      padding: 1.1rem;

      a {
        font-size: 1rem;
      }
    }
  }
`;

export const RepositoryContainer = styled.div<RepositoryProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -15rem;
      }

      > div.overlay {
        opacity: 0.4;
      }
    }
    
    > button a {
      color: ${({ theme }) => theme.gray300};
      transition: color 0.5s;

      &:hover {
        color: ${({ theme }) => theme.text};
      }
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;

    a {
      color: ${({ theme }) => theme.gray300};
      font-size: 1.9rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.75;
      transition: 0.5s;
    }

    > div.text {
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: 0.5s;
      width: fit-content;

      h1 {
        color: ${({ theme }) => theme.gold};
        font-size: 2.5rem;
      }

      p {
        color: ${({ theme }) => theme.gray300};
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 0 5rem 3rem 0rem;
    }

    > section > div.text {
      text-align: left;
      right: 0;
      left: -10rem;

      h1 {
        text-shadow: none;
      }
    }
    
    &:hover {
      > section > div.text {
        left: -15rem;
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }
  
  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 450px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }

    > section > div.text {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
`;




