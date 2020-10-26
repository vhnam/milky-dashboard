import React, {FC} from 'react';
import styled from 'styled-components';

import {ICustomer} from '../../../../features/customers/model';

import Button from '../../../../components/Button';
import {Plus} from '../../../../components/Icons';
import SearchBox from '../../../../components/SearchBox';

import Customers from '../Customers';

interface CustomerListProps {
  customers: ICustomer[];
}

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

const CustomerList: FC<CustomerListProps> = ({customers}) => {
  return (
    <Container>
      <Navigation>
        <StyledSearchBox placeholder="Search for customers" />
        <StyledButton icon={<Plus />} />
      </Navigation>
      <Customers data={customers} />
    </Container>
  );
};

export default CustomerList;
