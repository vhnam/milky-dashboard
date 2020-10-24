import React from 'react';
import styled from 'styled-components';

import useToggle from '../../hooks/useToggle';

import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import PageTitle from '../../components/PageTitle';

const Container = styled.div<{show: boolean}>`
  position: relative;
  transform: ${(props) =>
    props.show ? 'translateX(0)' : 'translateX(-11.75rem)'};
  transition: all 0.25s;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    transform: translateX(0);
  }
`;

const Dashboard = () => {
  const toggleShowSidebar = useToggle();

  return (
    <Container show={toggleShowSidebar.active}>
      <Sidebar onCloseSidebar={toggleShowSidebar.setInActive} />
      <Main>
        <PageTitle
          primary="Welcome back"
          secondary="Hi MilkTea guys,"
          onOpenSidebar={toggleShowSidebar.setActive}
        />
      </Main>
    </Container>
  );
};

export default Dashboard;
