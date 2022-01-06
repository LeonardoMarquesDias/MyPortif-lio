import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const HederContent = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${props => props.theme.border};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >div {

    h3 {
      font-size: 2.5rem;
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
    height: 3rem;
    border-radius: 3rem;
    color: ${props => props.theme.text};
    border: 0;
    padding: 0 1.5rem;
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
`;

export const NavLinkContainer = styled.li<NavLinkProps>`

  & + li {
    padding: 0 1rem 0;
  }

  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.text : props.theme.gold};
    transition: 0.5s;  

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
