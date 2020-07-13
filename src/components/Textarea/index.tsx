import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Label, Textarea as TextareaElement, Error } from './styles';

interface Props {
  name: string;
  label?: string;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: textareaRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <Label htmlFor={fieldName}>{label}</Label>}

      <TextareaElement
        id={fieldName}
        ref={textareaRef as any}
        defaultValue={defaultValue}
        {...rest}
      />

      <Error activated={!!error}>{error}</Error>
    </Container>
  );
};

export default Textarea;
