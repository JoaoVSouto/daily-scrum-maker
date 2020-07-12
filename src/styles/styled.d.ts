import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryDark: string;
    primary: string;
    primaryLight: string;

    secondary: string;
    secondaryLight: string;

    tertiary: string;
  }
}
