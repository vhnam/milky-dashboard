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
  width: 100vw;
  padding: 2rem 1rem 3rem 1rem;

  @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
    left: 13.625rem;
  }
`;

const Main: FC<MainProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default Main;
