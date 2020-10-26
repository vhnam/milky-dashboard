import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

interface JumbotronProps {
  heading: string;
  description: string;
  image: ReactNode;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 2rem;
  color: ${({theme}) => theme.colorWhite};
  background-color: ${({theme}) => theme.primaryColor};
  border-radius: 0.25rem;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Illustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IllustrationBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5rem;
  width: 12.5rem;
  background-color: ${({theme}) => theme.colorWhite};
  border-radius: 50%;
`;

const Heading = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: calc(32 / 24);
  text-align: center;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    text-align: left;
  }

  @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
    font-size: 2.5rem;
    line-height: calc(56 / 40);
  }
`;

const Description = styled.p`
  margin: 0;
  font-family: Oxygen, sans-serif;
  font-size: 0.875rem;
  line-height: calc(24 / 14);
  text-align: center;
  opacity: 0.7;

  @media (min-width: ${({theme}) => theme.breakpoints.md}) {
    flex-direction: row-reverse;
    text-align: left;
  }
`;

const Jumbotron: FC<JumbotronProps> = ({heading, description, image}) => (
  <Container>
    <Illustration>
      <IllustrationBackground>{image}</IllustrationBackground>
    </Illustration>
    <div>
      <Heading>{heading}</Heading>
      <Description dangerouslySetInnerHTML={{__html: description}} />
    </div>
  </Container>
);

export default Jumbotron;
