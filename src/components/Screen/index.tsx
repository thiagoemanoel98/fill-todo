/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, View, ViewStyle } from 'react-native';

import * as S from './styles';
import { useAppSafeArea } from 'src/hooks/useAppSafeArea';
import Logo from '../../assets/images/Logo.svg';
import { useNavigation } from '@react-navigation/native';
import { AppStackNavigatorRoutesProps } from '@routes';
import {
  ScrollViewContainer,
  ViewContainer
} from './components/ScreenContainer';
import { Icon } from '../Icon';
import { verticalScale } from '@utils';

interface ScreenProps extends ViewStyle {
  children: React.ReactNode;
  hasPaddingTop?: boolean;
  hasPaddingBottom?: boolean;
  hasGoBackIcon?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  hasGoBackIcon = false,
  hasPaddingTop = true,
  hasPaddingBottom = false,
  scrollable = false,
  ...viewStyle
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { goBack } = useNavigation<AppStackNavigatorRoutesProps>();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <S.KeyboardAvoidView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <View
          style={[
            {
              flexGrow: 1,
              paddingHorizontal: 20,
              paddingTop: hasPaddingTop ? top : 0,
              paddingBottom: hasPaddingBottom ? bottom : 0
            },
            viewStyle
          ]}
        >
          <S.Header>
            {hasGoBackIcon && (
              <S.HeaderLeft onPress={goBack} hitSlop={10}>
                <Icon
                  name="CaretLeftIcon"
                  color="$blue_dark"
                  size={verticalScale(32)}
                />
              </S.HeaderLeft>
            )}
            <S.HeaderCenter>
              <Logo width={200} height={40} />
            </S.HeaderCenter>
            {hasGoBackIcon && <S.HeaderRight />}
          </S.Header>
          {children}
        </View>
      </Container>
    </S.KeyboardAvoidView>
  );
}
