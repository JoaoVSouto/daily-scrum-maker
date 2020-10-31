import styled from 'styled-components';

export const AddTopicButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  border: 0;
  background-color: transparent;
  color: #fff;
  border: 2px solid transparent;
  padding: 6px;
  padding-left: 10px;
  margin-top: 8px;
  border-radius: 4px;
  transition: border 0.3s;

  display: flex;
  align-items: center;

  font-size: 16px;

  &:hover,
  &:focus {
    border-color: #fff;

    svg {
      transform: rotate(90deg);
    }
  }

  svg {
    margin-left: 4px;
    transition: transform 0.3s;
  }
`;
