import React, {useContext} from 'react';
import styled from 'styled-components';

import {DashboardContext} from '../../contexts/DashboardContext';

import PageTitle from '../../components/PageTitle';

import Jumbotron from './components/Jumbotron';

import CustomersContainer from './containers/CustomersContainer';

import imgBubbleTea from '../../assets/images/bubble-tea.png';

const Container = styled.div`
  @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
    max-width: 75rem;
    margin: 0 auto;
  }
`;

const LoyalCustomers = () => {
  const dashboardContext = useContext(DashboardContext);

  return (
    <Container>
      <PageTitle
        primary="Welcome back"
        secondary="Hi MilkTea guys,"
        onOpenSidebar={dashboardContext.onCloseSidebar}
      />
      <Jumbotron
        heading="Your loyal customers"
        description="Customer satisfaction is worthless.
        <br />
        Customer loyalty is priceless"
        image={
          <img src={imgBubbleTea} alt="Bubble Tea" style={{height: '150px'}} />
        }
      />
      <CustomersContainer />
    </Container>
  );
};

export default LoyalCustomers;
