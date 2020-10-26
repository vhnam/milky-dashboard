import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

interface MainProps {
  children: ReactNode;
}

const Container = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 11.75rem;
  padding: 2rem 1rem 3rem 1rem;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    width: calc(100vw - 11.75rem);
  }

  @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
    left: 13.625rem;
    width: calc(100vw - 13.625rem);
  }
`;

const Main: FC<MainProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default Main;
