import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const HederContent = styled.header` 
  width: 100%; 
  height: 5rem;
  border-bottom: 1px solid ${props => props.theme.border};

  .container-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

    h3 {
      font-size: 2.5rem;
      text-align: justify;
      letter-spacing: 0.05rem;
    }
  }

  //Home | Projects
  ul {
    height: 5rem;  
    display: flex;
    position: relative;
    padding: 0 0.5rem;
    line-height: 5rem;
    color: ${props => props.theme.gray300};
  }

  //GithubButton
  button {
    height: 2.7rem;
    border-radius: 3rem;
    color: ${props => props.theme.text};
    border: none;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.border};         
    font-weight: normal;

    svg {
      width: 20px;
      height: 20px;
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
  } 

  @media (max-width: 700px) {
    
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`

  & + li {
    padding: 0 1rem 0;
  }

  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.gold : props.theme.gray700};
    transition: 0.5s; 
    
    :hover {
      color: ${props => props.theme.text};
    }

    &.isActive::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: var(--yellow-500);
    }
  }
`;
