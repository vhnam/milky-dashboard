import React, {FC} from 'react';
import styled from 'styled-components';

import {Menu} from '../Icons';

interface PageTitleProps {
  primary: string;
  secondary?: string;
  onOpenSidebar: () => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SecondaryLine = styled.div`
  font-family: Oxygen, sans-serif;
  font-size: 1.125rem;
  color: ${({theme}) => theme.textColor}
  line-height: calc(24 / 18);
`;

const PrimaryLine = styled.div`
  font-family: Oxygen, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.5%;
`;

const MenuButton = styled(Menu)`
  color: ${({theme}) => theme.colorGrey};

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    display: none;
  }
`;

const PageTitle: FC<PageTitleProps> = ({primary, secondary, onOpenSidebar}) => {
  return (
    <Container>
      <div>
        <SecondaryLine>{secondary}</SecondaryLine>
        <PrimaryLine>{primary}</PrimaryLine>
      </div>
      <MenuButton onClick={onOpenSidebar} />
    </Container>
  );
};

export default PageTitle;
