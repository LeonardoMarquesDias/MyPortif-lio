import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 2px solid ${({ theme }) => theme.gold};
    transition: 0.5s;
    overflow: hidden;

    &:hover {
      border: 2px solid ${({ theme }) => theme.gold};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;
      
      h1 {
        color: ${({ theme }) => theme.gold};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.gray700};
        font-weight: 300;
        font-size: 1rem;
      }
    }

    > div.overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 1rem;
      background-color: ${({ theme }) => theme.gradiente};
      opacity: 0.7;
      transition: 0.5s;
    }
  }
`;