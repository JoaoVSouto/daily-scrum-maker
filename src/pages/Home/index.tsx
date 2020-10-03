import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Form from '../../components/Form';
import FormWithTopics from '../../components/FormWithTopics';

import AppProvider from '../../contexts/AppProvider';

import GlobalStyles from '../../styles/global';

const Home: React.FC = () => {
  const [isTopicsMode] = useState(true);

  useEffect(() => {
    document.querySelector('html')?.classList.remove('no-transition');
  }, []);

  return (
    <>
      <AppProvider>
        <Container>
          <Sidebar />
          {isTopicsMode ? <FormWithTopics /> : <Form />}
        </Container>

        <GlobalStyles />
      </AppProvider>
    </>
  );
};

export default Home;
