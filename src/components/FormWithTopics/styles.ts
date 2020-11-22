import styled from 'styled-components';

const BaseTopicButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  border: 0;
  background-color: transparent;
  color: #fff;
  border: 2px solid transparent;
  padding: 6px;
  margin-top: 8px;
  border-radius: 4px;
  transition: all 0.3s;

  display: flex;
  align-items: center;

  font-size: 16px;

  &:hover,
  &:focus {
    border-color: #fff;

    svg {
      transform: rotate(45deg);
    }
  }

  svg {
    margin-left: 6px;
    transition: transform 0.3s;
  }
`;

export const AddTopicButton = styled(BaseTopicButton)`
  + div {
    margin-top: 16px;
  }
`;
