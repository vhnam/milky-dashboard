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
