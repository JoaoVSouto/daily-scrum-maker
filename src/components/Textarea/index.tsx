import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Label, Textarea as TextareaElement, Error } from './styles';

interface Props {
  name: string;
  label?: string;
  changeHandler?(fieldName: string): void;
  subtopic?: boolean;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  changeHandler,
  subtopic,
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
    <Container className={subtopic ? '--subtopic' : ''}>
      {label && <Label htmlFor={fieldName}>{label}</Label>}

      <TextareaElement
        id={fieldName}
        ref={textareaRef as any}
        defaultValue={defaultValue}
        onChange={() => changeHandler && changeHandler(fieldName)}
        className={subtopic ? '--subtopic' : ''}
        {...rest}
      />

      <Error activated={!!error}>{error || lastError}</Error>
    </Container>
  );
};

export default Textarea;
