import React from 'react';

import * as S from './styles';

interface Props {
  enable: boolean;
  toggle: () => void;
}

export function Switch({ enable = false, toggle }: Props) {
  function handleSwitch() {
    toggle();
  }

  return (
    <S.Container enable={enable} onPress={handleSwitch} hitSlop={10}>
      <S.Circle enable={enable} />
    </S.Container>
  );
}
