import styled from 'styled-components';

export const Container = styled.div`
  header { 
    height: 5rem;
    border-bottom: 1px solid var(--gray-800);

    .headerContent {
      max-width: 1120px;
      height: 5rem;
      margin: 0 auto;
      padding: 0 2rem;

      display: flex;
      align-items: center;

      nav {
        height: 5rem;

        a {
          display: inline-block;
          position: relative;
          padding: 0 0.5rem;
          height: 5rem;
          line-height: 5rem;
          color: var(--gray-300);

          transition: color 0.2s;

          & + a { 
            margin-left: 2rem;
          }

          &:hover {
            color: var(--white);
          }

          &.active {
            color: var(--white);
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
            background: var(--yellow);
          }
        }
      }
      
      a {
        margin-left: auto;
        
          button {
          height: 3rem;
          border-radius: 3rem;
          background: var(--gray-850);
          border: 0;
          padding: 0 1.5rem;

          display: flex;
          align-items: center;
          justify-content: center;

          color: var(--white);
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
  }
`;
