import styled from 'styled-components';

export const Container = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  padding-right: 16px;
  margin-right: 16px;

  > h1 {
    color: #fff;
    font-size: 2.8rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    border-right: 0;
    padding-right: 0;
    margin-right: 0;

    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;
