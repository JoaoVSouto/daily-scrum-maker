import React from 'react';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Form from '../../components/Form';

import AppProvider from '../../contexts/AppProvider';

import GlobalStyles from '../../styles/global';

const Home: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Container>
          <Sidebar />
          <Form />
        </Container>

        <GlobalStyles />
      </AppProvider>
    </>
  );
};

export default Home;
