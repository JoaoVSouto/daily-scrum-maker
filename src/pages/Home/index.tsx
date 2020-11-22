import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Form from '../../components/Form';
import FormWithTopics from '../../components/FormWithTopics';

import AppProvider from '../../contexts/AppProvider';

import GlobalStyles from '../../styles/global';

const Home: React.FC = () => {
  const [isTopicsMode, setIsTopicsMode] = useState(false);

  useEffect(() => {
    document.querySelector('html')?.classList.remove('no-transition');
  }, []);

  const handleChangeTopic = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsTopicsMode(e.target.checked);
    },
    []
  );

  return (
    <>
      <AppProvider>
        <Container>
          <Sidebar onChangeTopic={handleChangeTopic} />
          {isTopicsMode ? <FormWithTopics /> : <Form />}
        </Container>

        <GlobalStyles />
      </AppProvider>
    </>
  );
};

export default Home;
