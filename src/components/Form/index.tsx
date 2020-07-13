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
        ['Como estou?', howAmI],
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

  return (
    <Container>
      <Unform ref={unformRef} onSubmit={handleSubmit}>
        <Textarea
          name="didLastExpedient"
          label="O que fiz no último expediente?"
        />
        <Textarea name="difficulties" label="Dificuldades?" />
        <Textarea name="doingToday" label="O que pretendo fazer hoje?" />
        <Textarea name="howAmI" label="Como estou fisicamente e mentalmente?" />

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
