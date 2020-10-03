import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  &:focus-within {
    label {
      transform: translateX(8px);
    }
  }

  & + & {
    margin-top: 24px;
  }

  &:not(.--subtopic) + &.--subtopic {
    margin-top: 16px;
  }

  &.--subtopic + &.--subtopic {
    margin-top: 12px;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  transition: all 0.3s;
`;

export const Textarea = styled(TextareaAutosize)`
  resize: none;
  margin-top: 8px;
  padding: 8px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  background-color: ${props => props.theme.inputBackground};
  font-size: 1.1rem;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.1s;

  &.--subtopic {
    margin-top: 0;
    margin-left: 16px;
  }

  &:focus {
    box-shadow: 0 0 2px 2px ${props => props.theme.inputBackground};
  }

  &::placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

interface Error {
  activated: boolean;
}

export const Error = styled.span<Error>`
  color: ${props => props.theme.tertiary};
  opacity: 0;
  max-height: 0;
  transition: all 0.3s;

  ${props =>
    props.activated &&
    css`
      opacity: 1;
      max-height: unset;
      margin-top: 8px;
    `}
`;
