/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, ViewStyle } from 'react-native';

import * as S from './styles';
import { useAppSafeArea } from 'src/hooks/useAppSafeArea';
import LogoImage from '../../assets/images/Logo.png';

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
            paddingHorizontal: 20,
            paddingTop: hasPaddingTop ? top : 0,
            paddingBottom: hasPaddingBottom ? bottom : 0
          },
          viewStyle
        ]}
      >
        <S.LogoArea>
          <S.Logo source={LogoImage} />
        </S.LogoArea>
        {children}
      </S.Container>
    </S.KeyboardAvoidView>
  );
}
