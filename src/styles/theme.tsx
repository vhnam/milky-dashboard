import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  interface BreakPoints {
    md: string;
    lg: string;
    xl: string;
  }

  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    colorGrey: string;
    colorWhite: string;
    textColor: string;
    active?: boolean;
    breakpoints: BreakPoints;
    boxShadow: string;
  }
}

const globalTheme = {
  colorGrey: '#939393',
  colorWhite: '#fff',
  breakpoints: {
    md: '48em',
    lg: '62em',
    xl: '75em',
  },
  boxShadow:
    '0 0 .0625rem rgba(48, 49, 51, 0.05), 0 1rem 2rem rgba(48, 49, 51, 0.1)',
};

export const lightTheme: DefaultTheme = {
  primaryColor: '#1E90FF',
  secondaryColor: '#F8F8F8',
  textColor: '#212121',
  ...globalTheme,
};

export const darkTheme: DefaultTheme = {
  primaryColor: '#302C40',
  secondaryColor: '#2C2839',
  textColor: '#fff',
  ...globalTheme,
};
