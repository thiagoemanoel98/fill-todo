import React from 'react';

import LottieView from 'lottie-react-native';

import * as S from './styles';
import { verticalScale } from '@utils';
import { Spacer } from '@components';

export function ListEmpty() {
  return (
    <S.Container>
      <Spacer height="xlarge" />
      <Spacer height="xlarge" />
      <LottieView
        source={require('../../../../assets/animations/empty.json')}
        resizeMode="cover"
        style={{ width: verticalScale(200), height: verticalScale(350) }}
        autoPlay
        loop
      />
    </S.Container>
  );
}
