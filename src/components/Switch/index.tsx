import React, { useState } from 'react';

import * as S from './styles';

interface Props {
  enable: boolean;
}

export function Switch({ enable = false }: Props) {
  const [switchEnable, setSwitchEnable] = useState(enable);

  function handleSwitch() {
    setSwitchEnable((prev) => !prev);
  }

  return (
    <S.Container enable={switchEnable} onPress={handleSwitch}>
      <S.Circle enable={switchEnable} />
    </S.Container>
  );
}
