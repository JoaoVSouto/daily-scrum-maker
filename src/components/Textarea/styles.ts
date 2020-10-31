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

export const TextareaContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 8px;

  &.--subtopic {
    margin-top: 0;
    margin-left: 16px;
  }
`;

export const Textarea = styled(TextareaAutosize)`
  flex: 1;
  resize: none;
  padding: 8px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  background-color: ${props => props.theme.inputBackground};
  font-size: 1.1rem;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.1s;

  &:focus {
    box-shadow: 0 0 2px 2px ${props => props.theme.inputBackground};
  }

  &::placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

export const DeleteTopicButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  color: #fff;
  margin-left: 4px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &.--subtopic::before {
    content: 'Remover subtópico';
    left: -126px;
  }

  &:hover,
  &:focus {
    &::before,
    &::after {
      opacity: 1;
    }
  }

  &::before,
  &::after {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &::before {
    content: 'Remover tópico';
    font-size: 12px;

    position: absolute;
    top: 50%;
    left: -106px;
    transform: translateY(-50%);

    background-color: ${props => props.theme.tooltipBackground};
    color: ${props => props.theme.primary};
    padding: 8px;
    border-radius: 4px;
  }

  &::after {
    content: '';

    position: absolute;
    left: -5px;

    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid ${props => props.theme.tooltipBackground};
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
