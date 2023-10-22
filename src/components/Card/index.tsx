import React from 'react';

import * as S from './styles';

import { Text } from '../Text';
import { Icon } from '../Icon';
import { TaskStatus } from '@models';

interface Props {
  status: TaskStatus;
  createdAt: Date;
  text: string;
}

export function Card({ text, status, createdAt }: Props) {
  console.log(status);

  return (
    <S.Container status={status}>
      <S.SideLeft status={status}>
        {status === 'done' ? (
          <Text variant="Body" color="$white" textAlign="justify">
            {text}
          </Text>
        ) : (
          <Text variant="Body" color="$blue_dark">
            {text}
          </Text>
        )}
      </S.SideLeft>

      <S.SideRight>
        {status === 'done' ? (
          <Icon name="CheckBoldIcon" color="$blue_dark" size={18} />
        ) : status === 'todo' ? (
          <Text variant="Caption">In 2 hours</Text>
        ) : (
          <Text variant="Caption" color="$danger">
            In 2 hours
          </Text>
        )}
      </S.SideRight>
    </S.Container>
  );
}
