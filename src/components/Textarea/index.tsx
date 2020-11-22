import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FiX } from 'react-icons/fi';

import {
  Container,
  Label,
  Textarea as TextareaElement,
  Error,
  TextareaContainer,
  DeleteTopicButton,
} from './styles';

interface Props {
  name: string;
  label?: string;
  changeHandler?(fieldName: string): void;
  onDeleteTopic?: ((fieldName: string) => void) | false;
  isSubsequentTopic?: boolean;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  changeHandler,
  onDeleteTopic,
  isSubsequentTopic,
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [lastError, setLastError] = useState('');

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: textareaRef.current,
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (error) {
      setLastError(error);
    }
  }, [error]);

  return (
    <Container className={isSubsequentTopic ? '--subsequent' : ''}>
      {label && <Label htmlFor={fieldName}>{label}</Label>}

      <TextareaContainer>
        <TextareaElement
          id={fieldName}
          ref={textareaRef as any}
          defaultValue={defaultValue}
          onChange={() => changeHandler && changeHandler(fieldName)}
          {...rest}
        />
        {onDeleteTopic && (
          <DeleteTopicButton
            type="button"
            onClick={() => onDeleteTopic(fieldName)}
          >
            <FiX size={24} />
          </DeleteTopicButton>
        )}
      </TextareaContainer>

      <Error activated={!!error}>{error || lastError}</Error>
    </Container>
  );
};

export default Textarea;
