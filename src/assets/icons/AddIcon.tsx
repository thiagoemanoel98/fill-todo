import React from 'react';

import { Svg, Path, G } from 'react-native-svg';
import { IconBase } from '@components';

export function AddIcon({ size = 16, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <G id="icon/add">
        <Path
          id="Vector"
          d="M8 3.33334V12.6667"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_2"
          d="M3.33325 8H12.6666"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
