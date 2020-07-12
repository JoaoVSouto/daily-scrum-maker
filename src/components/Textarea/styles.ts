import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 24px;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Textarea = styled(TextareaAutosize)`
  resize: none;
  margin-top: 8px;
  padding: 8px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  transition: box-shadow 0.1s;

  &:focus {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`;