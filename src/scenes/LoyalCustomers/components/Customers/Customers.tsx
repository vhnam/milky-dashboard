import React, {FC} from 'react';
import styled from 'styled-components';

import {ICustomer} from '../../../../features/customers/model';

import Customer from '../Customer';

interface CustomersProps {
  data: ICustomer[];
}

const Table = styled.table`
  width: 100%;
`;

const ColumnProfile = styled.th`
  padding: 2rem 1rem;
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  color: ${({theme}) => theme.colorGrey};
  line-height: calc(16 / 12);
  text-align: left;
  border-bottom: 0.0625rem solid #e6e6e6;
`;

const ColumnRank = styled.th`
  display: none;
  padding: 2rem 1rem;
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  color: ${({theme}) => theme.colorGrey};
  line-height: calc(16 / 12);
  text-align: left;
  border-bottom: 0.0625rem solid #e6e6e6;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    display: table-cell;
  }
`;

const ColumnPoints = styled.th`
  display: none;
  padding: 2rem 1rem;
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  color: ${({theme}) => theme.colorGrey};
  line-height: calc(16 / 12);
  text-align: right;
  border-bottom: 0.0625rem solid #e6e6e6;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    display: table-cell;
  }
`;

const Customers: FC<CustomersProps> = ({data}) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <ColumnProfile>Customer</ColumnProfile>
            <ColumnRank>Rank</ColumnRank>
            <ColumnPoints>Point</ColumnPoints>
          </tr>
        </thead>
        <tbody>
          {data.map((customer) => (
            <Customer key={customer.id} data={customer} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Customers;
