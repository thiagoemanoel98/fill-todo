import React from 'react';

import { Button, InputCard, Screen, Spacer, Text } from '@components';
import { AppScreenProps } from '@routes';

import * as S from './styles';
import { useShowTaskData } from './hooks/useShowTaskData';

export function ShowTask({ route }: AppScreenProps<'ShowTask'>) {
  const { task } = route.params;

  const { handleMarkDone, handleUnmarkDone, handleRemoveTask } =
    useShowTaskData();

  return (
    <Screen hasPaddingBottom={true} hasGoBackIcon={true}>
      <Text variant="Label" marginTop="large" marginBottom="sm" fontSize={12}>
        Task
      </Text>
      <S.Content>
        <InputCard value={task.text} editable={false} />
        <Spacer height="large" />
        <Text variant="Label" marginBottom="sm" fontSize={12}>
          Date
        </Text>
        <InputCard value={task.todoDate} editable={false} />

        <Spacer height="large" />
        <Text variant="Label" marginBottom="sm" fontSize={12}>
          Time
        </Text>
        <InputCard value={task.todoTime} editable={false} />
      </S.Content>
      <S.ButtonArea>
        <Button
          title="Delete"
          type="danger"
          leftIcon="CancelIconBold"
          onClick={() => handleRemoveTask(task)}
        />
        {task.done ? (
          <Button
            title="Unmark as done"
            leftIcon="CancelIconBold"
            onClick={() => handleUnmarkDone(task)}
          />
        ) : (
          <Button
            title="Mark as done"
            leftIcon="CheckBoldIcon"
            onClick={() => handleMarkDone(task)}
          />
        )}
      </S.ButtonArea>
    </Screen>
  );
}
