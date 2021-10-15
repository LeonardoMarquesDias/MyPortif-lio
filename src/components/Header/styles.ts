import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${props => props.theme.border};

  .headerContent {
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    //Home | Repositories
    nav {
      height: 5rem;

      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 5rem;
        line-height: 5rem;
        color: ${props => props.theme.gray300};
        transition: color 0.3s;

        & + a { 
          margin-left: 2rem;
        }

        &:hover {
          color: ${props => props.theme.text};
        }

        &.active {
          color: ${props => props.theme.text};
          font-weight: bold;
        }

        &.active::after {
          content: '';
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 1px;
          left: 0;
          background: ${props => props.theme.gold};
        }
      }
    }
    
    //GithubButton
    a {
      margin-left: auto;
      
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
    }
  }
`;