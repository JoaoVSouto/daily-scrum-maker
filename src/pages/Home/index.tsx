import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../../styles/themes/light';

import GlobalStyles from '../../styles/global';

const Home: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <h1>hello world</h1>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default Home;
