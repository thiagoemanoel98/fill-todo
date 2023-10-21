import React from 'react';

import * as S from './styles';
import themeStyle from '@styles/themeStyle';

import { TextInputProps as RNTextInputProps } from 'react-native';
import { Text } from '../Text';

export interface InputCardProps extends RNTextInputProps {
  errorMessage?: string;
}

export function InputCard({
  errorMessage,
  ...rnTextInputProps
}: InputCardProps) {
  return (
    <S.Container>
      <S.ContainerInput
        placeholder="Pay credit card bill..."
        placeholderTextColor={themeStyle.colors.$gray}
        {...rnTextInputProps}
      />
      {errorMessage && <Text variant="Label">{errorMessage}</Text>}
    </S.Container>
  );
}
