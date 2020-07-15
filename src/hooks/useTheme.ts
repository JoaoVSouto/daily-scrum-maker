import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = (): ThemeContext => useContext(ThemeContext);

export default useTheme;
