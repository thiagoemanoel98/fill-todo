import React from 'react';

import * as S from './styles';
import { Text } from '../Text';
import { ButtonIconType, ButtonStatusType } from './types';
import { Icon } from '../Icon';

interface Props {
  type?: ButtonStatusType;
  isDisabled?: boolean;
  leftIcon?: ButtonIconType;
  rightIcon?: ButtonIconType;
  onClick: () => void;
}

export function Button({
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
            color={type === 'default' ? '$blue_dark' : '$white'}
          />
        </S.IconLeftArea>
      )}
      <Text
        variant="Button"
        color={type === 'default' ? '$blue_dark' : '$white'}
      >
        index
      </Text>

      {rightIcon && (
        <S.IconRightArea>
          <Icon
            name={rightIcon}
            color={type === 'default' ? '$blue_dark' : '$white'}
          />
        </S.IconRightArea>
      )}
    </S.Container>
  );
}
