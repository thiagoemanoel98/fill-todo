import React from 'react';

import * as S from './styles';
import { Text } from '../Text';
import { ButtonStatusType } from './styles';

interface Props {
  onClick: () => void;
  type?: ButtonStatusType;
  isDisabled?: boolean;
}

export function Button({
  onClick,
  type = 'default',
  isDisabled = false
}: Props) {
  return (
    <S.Container onPress={onClick} disabled={isDisabled} type={type}>
      <Text
        variant="Button"
        color={type === 'default' ? '$blue_dark' : '$white'}
      >
        index
      </Text>
    </S.Container>
  );
}
