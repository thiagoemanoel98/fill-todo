import React from 'react';

import { Svg, Path, G } from 'react-native-svg';
import { IconBase } from '@components';

export function CancelIconBold({ size = 16, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <G id="icon/cancel">
        <Path
          id="Vector"
          d="M12 4L4 12"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_2"
          d="M4 4L12 12"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
