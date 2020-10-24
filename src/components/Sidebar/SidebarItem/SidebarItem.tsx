import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';
import {Link, LinkProps} from 'react-router-dom';

interface SidebarItemProps extends LinkProps {
  label: string;
  icon: ReactNode;
  active?: boolean;
}

const Container = styled(Link)<{active: string}>`
  display: flex;
  align-items: center;
  padding: 1.125rem 0;
  width: 100%;
  color: ${(props) =>
    'true' === props.active
      ? `${props.theme.colorWhite} !important`
      : props.theme.colorGrey};
  text-decoration: none;
  background-color: ${(props) =>
    'true' === props.active
      ? props.theme.primaryColor
      : props.theme.colorWhite};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    color: ${({theme}) => theme.primaryColor};
  }
`;

const Label = styled.div`
  padding-right: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: calc(20 / 14);
`;

const Icon = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const SidebarItem: FC<SidebarItemProps> = ({
  label,
  icon,
  active = false,
  ...others
}) => (
  <Container active={active.toString()} {...others}>
    <Icon>{icon}</Icon>
    <Label>{label}</Label>
  </Container>
);

export default SidebarItem;
