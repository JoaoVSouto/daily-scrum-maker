import React, {
  Fragment,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import copy from 'copy-to-clipboard';
import { nanoid } from 'nanoid';
import { FiEdit2 } from 'react-icons/fi';

import Textarea from '../Textarea';

import { Container, Form as Unform, Button } from '../Form/styles';
import { AddTopicButton } from './styles';

interface FormData {
  didLastExpedient: string;
  difficulties: string;
  doingToday: string;
  howAmI: string;
}

interface Topic {
  id: string;
  label?: string;
}

const FormWithTopics: React.FC = () => {
  const unformRef = useRef<FormHandles>(null);
  const [activated, setActivated] = useState(false);

  const [didLastExpedientTopics, setDidLastExpedientTopics] = useState<Topic[]>(
    [
      {
        id: nanoid(),
        label: 'O que fiz no último expediente?',
      },
    ]
  );

  useEffect(() => {
    const lastTopic = didLastExpedientTopics[didLastExpedientTopics.length - 1];

    unformRef.current?.getFieldRef(`didLastExpedient-${lastTopic.id}`).focus();
  }, [didLastExpedientTopics]);

  const handleSubmit: SubmitHandler<FormData> = async data => {
    const didLastExpedientData = Object.entries(data).filter(([fieldName]) =>
      fieldName.startsWith('didLastExpedient')
    );

    const didLastExpedient = didLastExpedientData
      .map(([, text]) => text)
      .join('\n\n');

    const { difficulties, doingToday, howAmI } = data;

    setActivated(true);

    const titlesAndContents = [
      ['O que fiz no último expediente?', didLastExpedient],
      ['Dificuldades?', difficulties],
      ['O que pretendo fazer hoje?', doingToday],
      ['Como estou fisicamente e mentalmente?', howAmI],
    ];

    const titlesAndContentsStringified = titlesAndContents
      .map(([title, content]) => `*${title}*\n${content}`)
      .join('\n\n');

    const dailyScrum = `*Daily Scrum*\n\n${titlesAndContentsStringified}`;
    copy(dailyScrum);
  };

  const handleAddNewDidLastExpedientTopic = useCallback(() => {
    const newTopic: Topic = { id: nanoid() };

    setDidLastExpedientTopics(topics => [...topics, newTopic]);
  }, []);

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
              placeholder={`Tópico ${index + 1}`}
              onDeleteTopic={index !== 0 && deleteDidLastExpedientTopic}
              isSubsequentTopic={index > 0}
            />
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
