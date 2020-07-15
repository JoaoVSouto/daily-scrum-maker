import React from 'react';

import {
  Container,
  ToggleThemeContainer,
  ToggleThemeCheckbox,
  ToggleThemeLabel,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <h1>Daily Scrum Maker</h1>

      <ToggleThemeContainer>
        <ToggleThemeCheckbox id="toggle-theme" defaultChecked />
        <ToggleThemeLabel htmlFor="toggle-theme">
          <span />
        </ToggleThemeLabel>
      </ToggleThemeContainer>
    </Container>
  );
};

export default Sidebar;
