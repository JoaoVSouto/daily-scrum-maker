import React, { Fragment, useState, useRef, useCallback } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import copy from 'copy-to-clipboard';
import { nanoid } from 'nanoid';
import { FiEdit2, FiEdit3 } from 'react-icons/fi';

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
}

interface Topic {
  id: string;
  label?: string;
  subtopics: Subtopic[];
}

const FormWithTopics: React.FC = () => {
  const unformRef = useRef<FormHandles>(null);
  const [activated, setActivated] = useState(false);

  const [didLastExpedientTopics, setDidLastExpedientTopics] = useState<Topic[]>(
    [
      {
        id: nanoid(),
        label: 'O que fiz no último expediente?',
        subtopics: [],
      },
    ]
  );

  const handleSubmit: SubmitHandler<FormData> = async data => {
    const { didLastExpedient, difficulties, doingToday, howAmI } = data;

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
  };

  const handleAddNewDidLastExpedientTopic = useCallback(() => {
    const newTopic: Topic = {
      id: nanoid(),
      subtopics: [],
    };

    setDidLastExpedientTopics(topics => [...topics, newTopic]);
  }, []);

  const handleAddNewDidLastExpedientSubtopic = useCallback(
    (id: string) => {
      const newSubtopic: Subtopic = {
        id: nanoid(),
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

  const deleteDidLastExpedientTopic = useCallback((fieldName: string) => {
    const [, topicId] = fieldName.split('didLastExpedient-');

    setDidLastExpedientTopics(topics =>
      topics.filter(topic => topic.id !== topicId)
    );
  }, []);

  return (
    <Container>
      <Unform ref={unformRef} onSubmit={handleSubmit}>
        {didLastExpedientTopics.map((didLastExpedientTopic, index) => (
          <Fragment key={didLastExpedientTopic.id}>
            <Textarea
              label={didLastExpedientTopic.label}
              name={`didLastExpedient-${didLastExpedientTopic.id}`}
              placeholder={`Título do tópico ${index + 1}`}
              onDeleteTopic={index !== 0 && deleteDidLastExpedientTopic}
            />
            {didLastExpedientTopic.subtopics.map((subtopic, idx) => (
              <Textarea
                key={subtopic.id}
                name={`didLastExpedient-${didLastExpedientTopic.id}-subtopic-${subtopic.id}`}
                placeholder={`Subtópico ${idx + 1}`}
                onDeleteTopic={deleteDidLastExpedientTopic}
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
              <FiEdit3 size={16} />
            </AddSubtopicButton>
          </Fragment>
        ))}
        <AddTopicButton
          type="button"
          onClick={handleAddNewDidLastExpedientTopic}
        >
          Novo tópico
          <FiEdit2 size={16} />
        </AddTopicButton>

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

export default FormWithTopics;
