import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { nanoid } from 'nanoid';

interface Topic {
  id: string;
  label?: string;
}

interface TopicFieldsArguments {
  unformRef: RefObject<FormHandles>;
  context: string;
  initialValue: Topic[];
  shouldFocusOnFirstRender?: boolean;
}

interface TopicFieldsResponse {
  topics: Topic[];
  handleAddNewTopic(): void;
  removeTopic(fieldName: string): void;
  getTopicsText(): string;
}

const useTopicFields = ({
  unformRef,
  context,
  initialValue = [],
  shouldFocusOnFirstRender = false,
}: TopicFieldsArguments): TopicFieldsResponse => {
  const [topics, setTopics] = useState<Topic[]>(initialValue);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (
      (isFirstRender.current && shouldFocusOnFirstRender) ||
      !isFirstRender.current
    ) {
      const lastTopic = topics[topics.length - 1];
      unformRef.current?.getFieldRef(`${context}-${lastTopic.id}`).focus();
    }

    isFirstRender.current = false;
  }, [topics, context, unformRef, shouldFocusOnFirstRender]);

  const getTopicsText = useCallback(() => {
    const topicsData = Object.entries(
      unformRef.current?.getData() || {}
    ).filter(([fieldName]) => fieldName.startsWith(context));

    const topicsText = topicsData.map(([, text]) => text).join('\n\n');

    return topicsText;
  }, [context, unformRef]);

  const handleAddNewTopic = useCallback(() => {
    const newTopic: Topic = { id: nanoid() };

    setTopics(state => [...state, newTopic]);
  }, []);

  const removeTopic = useCallback(
    (fieldName: string) => {
      const [, topicId] = fieldName.split(`${context}-`);

      setTopics(state => state.filter(topic => topic.id !== topicId));
    },
    [context]
  );

  return {
    topics,
    handleAddNewTopic,
    removeTopic,
    getTopicsText,
  };
};

export default useTopicFields;
