import React, {FC} from 'react';
import styled from 'styled-components';

import {Customer} from '../../../../features/customers/models';

import Button from '../../../../components/Button';
import {Plus} from '../../../../components/Icons';
import SearchBox from '../../../../components/SearchBox';
import Loading from '../../../../components/Loading';

import CustomerList from '../CustomerList';

interface CustomersProps {
  customers?: Customer[];
  isFetching: boolean;
  isLoading: boolean;
  canNext: boolean;
  canPrevious: boolean;
  onPrevious: () => void;
  onNext: () => void;
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

const ButtonAdd = styled(Button)`
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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonLoad = styled.button`
  && {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    max-width: 8rem;
    width: 100%;
    font-family: Inter, sans-serif;
    font-size: 1.3125rem;
    font-weight: 700;
    color: ${({theme}) => theme.colorWhite};
    line-height: calc(32 / 21);
    background-color: ${({theme}) => theme.primaryColor};
    outline: none;
    border: none;
    border-radius: 0.25rem;

    &:disabled {
      background-color: ${({theme}) => theme.colorGrey};
    }
  }
`;

const LoadingWrapper = styled.div`
  height: 5rem;
`;

const Customers: FC<CustomersProps> = ({
  customers = [],
  isFetching,
  isLoading,
  onPrevious,
  onNext,
  canNext,
  canPrevious,
}) => (
  <Container>
    <Navigation>
      <StyledSearchBox placeholder="Search for customers" />
      <ButtonAdd icon={<Plus />} />
    </Navigation>

    {isLoading && <Loading />}

    {!isLoading && (
      <>
        <CustomerList data={customers} />

        <LoadingWrapper>{isFetching && <Loading />}</LoadingWrapper>

        <ButtonWrapper>
          <ButtonLoad
            disabled={!canPrevious || isFetching}
            onClick={onPrevious}
          >
            Previous
          </ButtonLoad>
          <ButtonLoad disabled={!canNext || isFetching} onClick={onNext}>
            Next
          </ButtonLoad>
        </ButtonWrapper>
      </>
    )}
  </Container>
);

export default Customers;
