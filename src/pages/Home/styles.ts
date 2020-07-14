import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: ${props => rgba(props.theme.primaryDark, 0.6)};
  border-radius: 16px;
  padding: 24px;
  margin: 0 16px;

  max-width: 900px;
  height: 70vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: auto;
  }
`;
