/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, ViewStyle } from 'react-native';

import * as S from './styles';
import { useAppSafeArea } from 'src/hooks/useAppSafeArea';
import Logo from '../../assets/images/Logo.svg';

interface ScreenProps extends ViewStyle {
  children: React.ReactNode;
  hasPaddingTop?: boolean;
  hasPaddingBottom?: boolean;
}

export function Screen({
  children,
  hasPaddingTop = true,
  hasPaddingBottom = false,
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
            paddingHorizontal: 20,
            paddingTop: hasPaddingTop ? top : 0,
            paddingBottom: hasPaddingBottom ? bottom : 0
          },
          viewStyle
        ]}
      >
        <S.LogoArea>
          <Logo width={200} height={40} />
        </S.LogoArea>
        {children}
      </S.Container>
    </S.KeyboardAvoidView>
  );
}
