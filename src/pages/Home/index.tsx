import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Form from '../../components/Form';

import light from '../../styles/themes/light';

import GlobalStyles from '../../styles/global';

const Home: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <Container>
          <Sidebar />
          <Form />
        </Container>

        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default Home;
