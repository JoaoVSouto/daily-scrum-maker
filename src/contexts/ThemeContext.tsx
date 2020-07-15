import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type themeOptions = 'light' | 'dark';

export interface ThemeContext {
  changeTheme(theme: themeOptions): void;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<themeOptions>('light');

  const changeTheme = (newTheme: themeOptions): void => {
    setTheme(newTheme);
  };

  return (
    <StyledThemeProvider theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider value={{ changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
