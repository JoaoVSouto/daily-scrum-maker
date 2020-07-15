import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'simplebar/dist/simplebar.min.css';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Form from '../../components/Form';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import GlobalStyles from '../../styles/global';

const Home: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
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
