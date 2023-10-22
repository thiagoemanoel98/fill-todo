import React from 'react';

import { Button, InputCard, Screen, Spacer, Text } from '@components';
import { AppScreenProps } from '@routes';
import { formateDateToDDMMYYYY, formateHourMinute } from '@utils';

import * as S from './styles';

export function ShowTask({ route }: AppScreenProps<'ShowTask'>) {
  const { task } = route.params;

  return (
    <Screen hasPaddingBottom={true} hasGoBackIcon={true}>
      <Spacer height="large" />
      <S.Content>
        <InputCard value={task.text} editable={false} />
        <Spacer height="large" />
        <Text variant="Label" marginBottom="sm" fontSize={12}>
          Date
        </Text>
        <InputCard
          value={formateDateToDDMMYYYY(task.creationDate)}
          editable={false}
        />

        <Spacer height="large" />
        <Text variant="Label" marginBottom="sm" fontSize={12}>
          Time
        </Text>
        <InputCard
          value={formateHourMinute(task.creationTime)}
          editable={false}
        />
      </S.Content>
      <S.ButtonArea>
        <Button
          title="Delete"
          type="danger"
          leftIcon="CancelIconBold"
          onClick={() => {}}
        />
        <Button
          title="Mark as done"
          leftIcon="CheckBoldIcon"
          onClick={() => {}}
        />
      </S.ButtonArea>
    </Screen>
  );
}
