/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, ViewStyle } from 'react-native';

import * as S from './styles';
import { useAppSafeArea } from 'src/hooks/useAppSafeArea';

interface ScreenProps extends ViewStyle {
  children: React.ReactNode;
  hasPaddingTop?: boolean;
  hasPaddingBottom?: boolean;
}

export function Screen({
  children,
  hasPaddingTop = true,
  hasPaddingBottom = true,
  ...viewStyle
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();

  return (
    <S.KeyboardAvoidView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <S.Container
        style={[
          {
            paddingTop: hasPaddingTop ? top : 0,
            paddingBottom: hasPaddingBottom ? bottom : 0
          },
          viewStyle
        ]}
      >
        {children}
      </S.Container>
    </S.KeyboardAvoidView>
  );
}
