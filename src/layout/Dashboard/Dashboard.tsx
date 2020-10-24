import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

import {DashboardContext} from '../../contexts/DashboardContext';

import useToggle from '../../hooks/useToggle';

import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';

interface DashboardProps {
  children: ReactNode;
}

const Container = styled.div<{show: boolean}>`
  position: relative;
  transform: ${(props) =>
    props.show ? 'translateX(0)' : 'translateX(-11.75rem)'};
  transition: all 0.25s;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    transform: translateX(0);
  }
`;

const Dashboard: FC<DashboardProps> = ({children}) => {
  const toggleShowSidebar = useToggle();

  return (
    <DashboardContext.Provider
      value={{
        onOpenSidebar: toggleShowSidebar.setActive,
        onCloseSidebar: toggleShowSidebar.setInActive,
      }}
    >
      <Container show={toggleShowSidebar.active}>
        <Sidebar onCloseSidebar={toggleShowSidebar.setInActive} />
        <Main>{children}</Main>
      </Container>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
