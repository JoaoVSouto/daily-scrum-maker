import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type themeOptions = 'light' | 'dark';

export interface ThemeContext {
  theme: themeOptions;
  changeTheme(theme: themeOptions): void;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<themeOptions>('dark');

  const changeTheme = (newTheme: themeOptions): void => {
    setTheme(newTheme);
  };

  return (
    <StyledThemeProvider theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider value={{ changeTheme, theme }}>
        <HelmetProvider>
          <Helmet>
            <meta
              name="theme-color"
              content={theme === 'light' ? light.primary : dark.primary}
            />
          </Helmet>
          {children}
        </HelmetProvider>
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
