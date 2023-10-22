import React from 'react';

import { Svg, Path } from 'react-native-svg';
import { IconBase } from '@components';

export function CaretLeftIcon({ size = 40, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path d="M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z" />
    </Svg>
  );
}
