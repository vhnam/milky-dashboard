import React, {FC, useCallback} from 'react';
import styled from 'styled-components';

import config from '../../../../config';

import {ICustomer} from '../../../../features/customers/model';

import {format} from '../../../../helpers/format';

import Tag, {TagType} from '../../../../components/Tag';

interface CustomerProps {
  data: ICustomer;
}

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

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  background-color: #fcfcfc;
  border: 1px solid #e6e6e6;
  border-radius: 0.25rem;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    margin-right: 1.5rem;
  }
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
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

const Customer: FC<CustomerProps> = ({data}) => {
  const getRank = useCallback((points) => {
    return points > 3000
      ? TagType.Gold
      : points > 1500
      ? TagType.Silver
      : points > 500
      ? TagType.Bronze
      : TagType.Default;
  }, []);

  return (
    <tr>
      <ColumnProfile>
        <ProfileWrapper>
          <Frame>
            <Avatar
              src={`${config.static.images}/${data.avatar}`}
              alt={data.name}
            />
          </Frame>
          <Profile>
            <Name>{data.name}</Name>
            <Title>{data.title}</Title>
          </Profile>
        </ProfileWrapper>
      </ColumnProfile>
      <ColumnRank>
        <Tag variant={getRank(data.points)} />
      </ColumnRank>
      <ColumnPoints>
        <Point>{format(data.points)}</Point>
      </ColumnPoints>
    </tr>
  );
};

export default Customer;
