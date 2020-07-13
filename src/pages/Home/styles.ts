import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
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
