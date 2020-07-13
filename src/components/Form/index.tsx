import React, { useState } from 'react';
import { SubmitHandler } from '@unform/core';
import copy from 'copy-to-clipboard';

import Textarea from '../Textarea';

import { Container, Form as Unform, Button } from './styles';

interface FormData {
  didLastExpedient: string;
  difficulties: string;
  doingToday: string;
  howAmI: string;
}

const Form: React.FC = () => {
  const [activated, setActivated] = useState(false);

  const handleSubmit: SubmitHandler<FormData> = data => {
    const { didLastExpedient, difficulties, doingToday, howAmI } = data;

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
  };

  return (
    <Container>
      <Unform onSubmit={handleSubmit}>
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
          onClick={() => setActivated(true)}
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
