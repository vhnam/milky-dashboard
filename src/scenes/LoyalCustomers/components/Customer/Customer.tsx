import React from 'react';
import styled from 'styled-components';

import Tag, {TagType} from '../../../../components/Tag';

const ColumnProfile = styled.td`
  padding: 1rem;
`;

const ColumnRank = styled.td`
  display: none;
  padding: 1rem;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    display: table-cell;
  }
`;

const ColumnPoints = styled.td`
  display: none;
  padding: 1rem;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    display: table-cell;
  }
`;

const Profile = styled.span`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Name = styled.span`
  margin-bottom: 0.5rem;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme}) => theme.textColor};
  line-height: calc(20 / 16);
`;

const Title = styled.span`
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #666;
  line-height: calc(16 / 12);
`;

const Point = styled.span`
  display: block;
  width: 100%;
  color: ${({theme}) => theme.primaryColor};
  text-align: right;
`;

const Customer = () => {
  return (
    <tr>
      <ColumnProfile>
        <Profile>
          <Name>Clair Humbert</Name>
          <Title>Senior Factors Representative</Title>
        </Profile>
      </ColumnProfile>
      <ColumnRank>
        <Tag variant={TagType.Silver} />
      </ColumnRank>
      <ColumnPoints>
        <Point>1,733</Point>
      </ColumnPoints>
    </tr>
  );
};

export default Customer;
