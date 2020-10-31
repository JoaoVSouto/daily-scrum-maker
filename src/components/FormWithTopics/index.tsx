import React, { Fragment, useState, useRef, useCallback } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import copy from 'copy-to-clipboard';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FiPlus } from 'react-icons/fi';

import Textarea from '../Textarea';

import { Container, Form as Unform, Button } from '../Form/styles';
import { AddTopicButton, AddSubtopicButton } from './styles';

interface FormData {
  didLastExpedient: string;
  difficulties: string;
  doingToday: string;
  howAmI: string;
}

interface Subtopic {
  id: string;
  value: string;
}

interface Topic {
  id: string;
  title: string;
  label?: string;
  subtopics: Subtopic[];
}

const schema = Yup.object().shape({
  didLastExpedient: Yup.string().required('Esse campo é obrigatório'),
  difficulties: Yup.string().required('Esse campo é obrigatório'),
  doingToday: Yup.string().required('Esse campo é obrigatório'),
  howAmI: Yup.string().required('Esse campo é obrigatório'),
});

const FormWithTopics: React.FC = () => {
  const unformRef = useRef<FormHandles>(null);
  const [activated, setActivated] = useState(false);

  const [didLastExpedientTopics, setDidLastExpedientTopics] = useState<Topic[]>(
    [
      {
        id: nanoid(),
        title: '',
        label: 'O que fiz no último expediente?',
        subtopics: [],
      },
    ]
  );

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

  const handleAddNewDidLastExpedientTopic = useCallback(() => {
    const newTopic: Topic = {
      id: nanoid(),
      title: '',
      subtopics: [],
    };

    setDidLastExpedientTopics(topics => [...topics, newTopic]);
  }, []);

  const handleAddNewDidLastExpedientSubtopic = useCallback(
    (id: string) => {
      const newSubtopic: Subtopic = {
        id: nanoid(),
        value: '',
      };

      const updatedDidLastExpedientTopics = [...didLastExpedientTopics];

      const selectedTopic = updatedDidLastExpedientTopics.find(
        didLastExpedientTopic => didLastExpedientTopic.id === id
      );

      if (!selectedTopic) {
        return;
      }

      selectedTopic.subtopics.push(newSubtopic);

      setDidLastExpedientTopics(updatedDidLastExpedientTopics);
    },
    [didLastExpedientTopics]
  );

  return (
    <Container>
      <Unform ref={unformRef} onSubmit={handleSubmit}>
        {didLastExpedientTopics.map((didLastExpedientTopic, index) => (
          <Fragment key={didLastExpedientTopic.id}>
            <Textarea
              label={didLastExpedientTopic.label}
              name={`didLastExpedient-${didLastExpedientTopic.id}`}
              placeholder={`Título do tópico ${index + 1}`}
            />
            {didLastExpedientTopic.subtopics.map((subtopic, idx) => (
              <Textarea
                key={subtopic.id}
                name={`didLastExpedient-${didLastExpedientTopic.id}-subtopic-${subtopic.id}`}
                placeholder={`Subtópico ${idx + 1}`}
                subtopic
              />
            ))}
            <AddSubtopicButton
              type="button"
              onClick={() =>
                handleAddNewDidLastExpedientSubtopic(didLastExpedientTopic.id)
              }
            >
              Novo subtópico
              <FiPlus size={24} />
            </AddSubtopicButton>
          </Fragment>
        ))}
        <AddTopicButton
          type="button"
          onClick={handleAddNewDidLastExpedientTopic}
        >
          Novo tópico
          <FiPlus size={24} />
        </AddTopicButton>

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

export default FormWithTopics;
