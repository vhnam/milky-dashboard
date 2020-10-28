import React from 'react';
import styled from 'styled-components';

import Loading from '../../components/Loading';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const LoadingPage = () => (
  <Container>
    <Loading />
  </Container>
);

export default LoadingPage;
