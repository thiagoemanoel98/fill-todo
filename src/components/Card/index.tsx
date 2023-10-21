import React from 'react';

import * as S from './styles';

import { CardStatus } from './types';
import { Text } from '../Text';
import { Icon } from '../Icon';

interface Props {
  status: CardStatus;
  createdAt: Date;
  text: string;
}

export function Card({ text, status, createdAt }: Props) {
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
        ) : (
          <Text variant="Caption">In 2 hours</Text>
        )}
      </S.SideRight>
    </S.Container>
  );
}
