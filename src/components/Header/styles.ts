import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const HederContent = styled.header` 
  width: 100%; 
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.border};

  .container-content {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;

    h3 {
      font-size: 2rem;
      text-align: justify;
      letter-spacing: 0.05rem;
    }
  }

  //Home | Projects
  ul { 
    display: flex;
    gap: 1rem;
    color: ${props => props.theme.gray300};
  }

  @media (max-width: 700px) {
    .container-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .portfolio {
      display: none;
    }
  } 
`;

export const NavLinkContainer = styled.li<NavLinkProps>`

  a {
    padding: 2rem 0;
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
