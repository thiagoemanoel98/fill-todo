import React from 'react';

import { Svg, Path, G } from 'react-native-svg';
import { IconBase } from '@components';

export function CancelIcon({ size = 24, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G id="icon/cancel">
        <Path
          id="Vector"
          d="M18 6L6 18"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_2"
          d="M6 6L18 18"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
