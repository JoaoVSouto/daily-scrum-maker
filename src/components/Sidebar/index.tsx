import React from 'react';

import {
  Container,
  ToggleThemeContainer,
  ToggleThemeCheckbox,
  ToggleThemeLabel,
} from './styles';

import useTheme from '../../hooks/useTheme';

const Sidebar: React.FC = () => {
  const { changeTheme, theme } = useTheme();

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const isChecked = e.target.checked;

    if (!isChecked) {
      changeTheme('dark');
      return;
    }

    changeTheme('light');
  };

  return (
    <Container>
      <h1>Daily Scrum Maker</h1>

      <ToggleThemeContainer>
        <ToggleThemeCheckbox
          id="toggle-theme"
          checked={theme === 'light'}
          onChange={handleCheckboxChange}
        />
        <ToggleThemeLabel htmlFor="toggle-theme">
          <span />
        </ToggleThemeLabel>
      </ToggleThemeContainer>
    </Container>
  );
};

export default Sidebar;
