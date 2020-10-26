import React, {useContext} from 'react';
import styled from 'styled-components';

import {DashboardContext} from '../../contexts/DashboardContext';

import {customerData} from '../../features/customers/seeds';

import PageTitle from '../../components/PageTitle';

import Jumbotron from './components/Jumbotron';
import CustomerList from './components/CustomerList';

import imgBubbleTea from '../../assets/images/bubble-tea.png';

const Container = styled.div`
  @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
    width: 75rem;
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
      <CustomerList customers={customerData} />
    </Container>
  );
};

export default LoyalCustomers;
