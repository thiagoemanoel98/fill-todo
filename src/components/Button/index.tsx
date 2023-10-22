import React from 'react';

import * as S from './styles';
import { Text } from '../Text';
import { ButtonIconType, ButtonStatusType } from './types';
import { Icon } from '../Icon';

interface Props {
  title: string;
  type?: ButtonStatusType;
  isDisabled?: boolean;
  leftIcon?: ButtonIconType;
  rightIcon?: ButtonIconType;
  onClick: () => void;
}

export function Button({
  title,
  type = 'default',
  isDisabled = false,
  leftIcon,
  rightIcon,
  onClick
}: Props) {
  return (
    <S.Container onPress={onClick} disabled={isDisabled} type={type}>
      {leftIcon && (
        <S.IconLeftArea>
          <Icon
            name={leftIcon}
            size={22}
            color={type === 'danger' ? '$white' : '$blue_dark'}
          />
        </S.IconLeftArea>
      )}
      <Text
        variant="Button"
        color={type === 'danger' ? '$white' : '$blue_dark'}
      >
        {title}
      </Text>

      {rightIcon && (
        <S.IconRightArea>
          <Icon
            name={rightIcon}
            color={type === 'danger' ? '$white' : '$blue_dark'}
          />
        </S.IconRightArea>
      )}
    </S.Container>
  );
}
