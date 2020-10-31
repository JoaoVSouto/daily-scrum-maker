import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;

    primaryDark: string;
    primary: string;
    primaryLight: string;

    tertiary: string;

    inputBackground: string;
    placeholder: string;
    tooltipBackground: string;

    cloud: string;
    clouds: string;
  }
}
