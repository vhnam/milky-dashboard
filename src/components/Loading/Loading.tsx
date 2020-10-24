import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Waviy = styled.div`
  position: relative;
`;

const Item = styled.span<{index: number}>`
  position: relative;
  display: inline-block;
  font-size: 2.5rem;
  color: ${({theme}) => theme.textColor};
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(0.1s * ${(props) => props.index});

  @keyframes waviy {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-1.25rem);
    }
  }
`;

const Loading = () => (
  <Container>
    <Waviy>
      {'Loading'.split('').map((character, index) => (
        <Item key={index} index={index + 1}>
          {character}
        </Item>
      ))}
    </Waviy>
  </Container>
);

export default Loading;
