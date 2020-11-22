import React from 'react';

import {
  Container,
  ToggleThemeContainer,
  ToggleThemeCheckbox,
  ToggleThemeLabel,
  ToggleTopicModeContainer,
  ToggleTopicModeLabel,
} from './styles';

import useTheme from '../../hooks/useTheme';

interface SidebarProps {
  onChangeTopic(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Sidebar: React.FC<SidebarProps> = ({ onChangeTopic }) => {
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

      <ToggleTopicModeContainer>
        <strong>Modo de tópicos?</strong>
        <input type="checkbox" id="toggle-topic" onChange={onChangeTopic} />
        <ToggleTopicModeLabel htmlFor="toggle-topic" />
      </ToggleTopicModeContainer>
    </Container>
  );
};

export default Sidebar;
