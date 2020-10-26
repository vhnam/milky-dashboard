import React from 'react';
import styled from 'styled-components';

import Button from '../../../../components/Button';
import {Plus} from '../../../../components/Icons';
import SearchBox from '../../../../components/SearchBox';

import Customers from '../Customers';

const Container = styled.div`
  padding: 1.5rem 1rem;
  background: ${({theme}) => theme.colorWhite};
  box-shadow: ${({theme}) => theme.boxShadow};
  border-radius: 0.25rem;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    padding: 1.5rem;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
    padding: 2rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  && {
    padding: 0.625rem;
    width: 3rem;
    height: 3rem;
  }
`;

const StyledSearchBox = styled(SearchBox)`
  && {
    width: 100%;
    margin-right: 1rem;

    @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
      margin-right: 2rem;
    }
  }
`;

const CustomerList = () => {
  return (
    <Container>
      <Navigation>
        <StyledSearchBox placeholder="Search for customers" />
        <StyledButton icon={<Plus />} />
      </Navigation>
      <Customers />
    </Container>
  );
};

export default CustomerList;
