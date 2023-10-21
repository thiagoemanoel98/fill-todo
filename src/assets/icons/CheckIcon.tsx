import React from 'react';

import { Svg, Path, G } from 'react-native-svg';
import { IconBase } from '@components';

export function CheckIcon({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G id="icon/check">
        <Path
          id="Vector"
          d="M20 6L9 17L4 12"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
