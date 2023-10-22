/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from 'react-native';

import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

export function ScrollViewContainer({ children }: Props) {
  return (
    <S.Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {children}
      </ScrollView>
    </S.Container>
  );
}

export function ViewContainer({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
