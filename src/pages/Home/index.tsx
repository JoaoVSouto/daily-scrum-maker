import React, { useCallback, useEffect } from 'react';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import Form from '../../components/Form';
import FormWithTopics from '../../components/FormWithTopics';

import AppProvider from '../../contexts/AppProvider';

import usePersistedState from '../../hooks/usePersistedState';

import GlobalStyles from '../../styles/global';

type TopicsState = 'on' | 'off';

const Home: React.FC = () => {
  const [isTopicsMode, setIsTopicsMode] = usePersistedState<TopicsState>(
    '@ds/topic',
    'off'
  );

  useEffect(() => {
    document.querySelector('html')?.classList.remove('no-transition');
  }, []);

  const handleChangeTopic = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsTopicsMode(e.target.checked ? 'on' : 'off');
    },
    [setIsTopicsMode]
  );

  return (
    <>
      <AppProvider>
        <Container>
          <Sidebar topic={isTopicsMode} onChangeTopic={handleChangeTopic} />
          {isTopicsMode === 'on' ? <FormWithTopics /> : <Form />}
        </Container>

        <GlobalStyles />
      </AppProvider>
    </>
  );
};

export default Home;
