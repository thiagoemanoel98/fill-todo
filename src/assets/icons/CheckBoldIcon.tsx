import React from 'react';

import { Svg, Path, G } from 'react-native-svg';
import { IconBase } from '@components';

export function CheckBoldIcon({ size = 12, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <G id="check 1">
        <Path
          id="Vector"
          d="M10 3L4.5 8.5L2 6"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
