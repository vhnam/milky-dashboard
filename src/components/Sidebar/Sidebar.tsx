import React, {FC} from 'react';
import styled from 'styled-components';

import {Close, Customers, Employees, Reports, Revenue} from '../Icons';

import SidebarItem from './SidebarItem';

import imgFavicon from '../../assets/images/favicon.png';

interface SidebarProps {
  onCloseSidebar: () => void;
}

const Container = styled.div`
  background-color: ${({theme}) => theme.secondaryColor};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 11.75rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: white;
  box-shadow: inset -1px 0 0 #e4e4e4;

  @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
    width: 13.625rem;
  }
`;

const Favicon = styled.img`
  height: 4rem;
`;

const CloseIcon = styled.div`
  margin-right: 1rem;
  color: ${({theme}) => theme.colorGrey};

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    display: none;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Sidebar: FC<SidebarProps> = ({onCloseSidebar}) => (
  <Container>
    <SidebarHeader>
      <CloseIcon onClick={onCloseSidebar}>
        <Close />
      </CloseIcon>
      <Favicon src={imgFavicon} alt="MilkTea" />
    </SidebarHeader>
    <SidebarItem label="Employees" icon={<Employees />} to="#" />
    <SidebarItem label="Loyal customers" icon={<Customers />} active to="#" />
    <SidebarItem label="Reports" icon={<Reports />} to="" />
    <SidebarItem label="Revenue" icon={<Revenue />} to="#" />
  </Container>
);

export default Sidebar;
