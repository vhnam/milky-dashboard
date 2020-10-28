import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {useMachine} from '@xstate/react';

import {DashboardContext} from '../../contexts/DashboardContext';

import {customersMachine} from '../../features/customers/machines';

import PageTitle from '../../components/PageTitle';

import Jumbotron from './components/Jumbotron';
import Customers from './components/Customers';

import imgBubbleTea from '../../assets/images/bubble-tea.png';

const Container = styled.div`
  @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
    max-width: 75rem;
    margin: 0 auto;
  }
`;

const LoyalCustomers = () => {
  const dashboardContext = useContext(DashboardContext);

  const [state, send] = useMachine(customersMachine, {devTools: true});

  useEffect(() => {
    send({
      type: 'GET_CUSTOMERS',
      payload: {
        page: 1,
        limit: 20,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Customers
        customers={state.context.data}
        state={state.value.toString()}
      />
    </Container>
  );
};

export default LoyalCustomers;
