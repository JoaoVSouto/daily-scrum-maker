import React, { useState, useEffect } from 'react';

type ReturnState<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const usePersistedState = <T>(key: string, initialState: T): ReturnState<T> => {
  const [state, setState] = useState<T>(() => {
    const persistedState = localStorage.getItem(key);

    return persistedState ? JSON.parse(persistedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default usePersistedState;
