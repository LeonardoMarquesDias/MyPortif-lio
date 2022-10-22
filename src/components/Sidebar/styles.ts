import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.aside`
  background: ${props => props.theme.gradient};
  border-radius: 8px;
  overflow: hidden;
  

  img {
    width: 100%;
    height: 14rem;
    object-fit: cover;
  }

  .AvatarBorder {
    border: 4px solid ${props => props.theme.gold};
  }

  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20rem;
    margin-top: -6rem;

    .avatarBorder {
      border: 5px solid ${props => props.theme.gold}; 
      border-radius: 50%;
      background: ${props => props.theme.background};

      img {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        border: 4px solid ${props => props.theme.background}; 
        margin-top: 2.5px;
        margin-left: 2.5px;
        margin-right: 2.5px;
      }
    }

    strong {
      margin-top: 2rem;
      color: var(--yellow-500);
      line-height: 1.6rem;
    }

    span {
      font-size: 0.875rem;
      color: var(--yellow-500);
      line-height: 1.6rem;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 3.1rem;
    background: ${props => props.theme.gold};

    button:hover {
      background: ${({ theme }) => darken(0.25, theme.gold)};
    }
    
    button {
      background: transparent;
      color: ${props => props.theme.gray700};
      border: none;
      height: 100%;
      width: 100%;
      padding: 0 1.5rem;
      font-weight: bold;
      display: block;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 1rem;
      transition: 0.5s;

      svg {
        width: 30px;
        height: 30px;
      }

      span {
        font-size: 1.6rem;
        letter-spacing: 0.2rem;
      }
    }
  }
`