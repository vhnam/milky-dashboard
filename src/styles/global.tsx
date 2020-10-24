import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    color: ${({theme}) => theme.textColor};
    transition: all 0.25s linear;
  }
`;
