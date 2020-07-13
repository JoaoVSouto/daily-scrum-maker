import React, { useState } from 'react';

import Textarea from '../Textarea';

import { Container, Form as Unform, Button } from './styles';

const Form: React.FC = () => {
  const [activated, setActivated] = useState(false);

  const handleSubmit = () => {};

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

        <Button activated={activated} onClick={() => setActivated(!activated)}>
          <span>Copiar</span>
          <div className="wave" />
        </Button>
      </Unform>
    </Container>
  );
};

export default Form;
