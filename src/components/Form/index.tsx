import React, { useState, useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import copy from 'copy-to-clipboard';
import * as Yup from 'yup';

import Textarea from '../Textarea';

import { Container, Form as Unform, Button } from './styles';

interface FormData {
  didLastExpedient: string;
  difficulties: string;
  doingToday: string;
  howAmI: string;
}

const schema = Yup.object().shape({
  didLastExpedient: Yup.string().required('Esse campo é obrigatório'),
  difficulties: Yup.string().required('Esse campo é obrigatório'),
  doingToday: Yup.string().required('Esse campo é obrigatório'),
  howAmI: Yup.string().required('Esse campo é obrigatório'),
});

const Form: React.FC = () => {
  const unformRef = useRef<FormHandles>(null);
  const [activated, setActivated] = useState(false);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    try {
      const { didLastExpedient, difficulties, doingToday, howAmI } = data;

      await schema.validate(data, {
        abortEarly: false,
      });

      setActivated(true);

      const titlesAndContents = [
        ['O que fiz no último expediente?', didLastExpedient],
        ['Dificuldades?', difficulties],
        ['O que pretendo fazer hoje?', doingToday],
        ['Como estou fisicamente e mentalmente?', howAmI],
      ];

      const titlesAndContentsStringified = titlesAndContents
        .reduce(
          (accumulatedText, [title, content]) => `${accumulatedText}
            *${title}*
            ${content}
            `,
          ''
        )
        .split('\n')
        .map(line => line.trim())
        .join('\n');

      const dailyScrum = `*Daily Scrum*\n${titlesAndContentsStringified}`;
      copy(dailyScrum);
    } catch (err) {
      const validationErrors: {
        [error: string]: string;
      } = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        unformRef.current?.setErrors(validationErrors);
      }
    }
  };

  const handleInputChange = (inputName: keyof FormData): void => {
    const inputValue = unformRef.current?.getFieldValue(inputName) as
      | string
      | undefined;

    if (inputValue?.trim()) {
      const currentErrors = unformRef.current?.getErrors() || {};

      delete currentErrors[inputName];

      unformRef.current?.setErrors(currentErrors);
    }
  };

  return (
    <Container>
      <Unform ref={unformRef} onSubmit={handleSubmit}>
        <Textarea
          name="didLastExpedient"
          label="O que fiz no último expediente?"
          changeHandler={handleInputChange}
        />
        <Textarea
          name="difficulties"
          label="Dificuldades?"
          changeHandler={handleInputChange}
        />
        <Textarea
          name="doingToday"
          label="O que pretendo fazer hoje?"
          changeHandler={handleInputChange}
        />
        <Textarea
          name="howAmI"
          label="Como estou fisicamente e mentalmente?"
          changeHandler={handleInputChange}
        />

        <Button
          type="submit"
          activated={activated}
          onBlur={() => setActivated(false)}
        >
          <span>Copiar</span>
          <div className="wave" />
        </Button>
      </Unform>
    </Container>
  );
};

export default Form;
