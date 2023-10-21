/* eslint-disable react-native/no-inline-styles */
import { SpacingType, spacing } from '@styles/themeStyle';
import { verticalScale } from '@utils';
import React from 'react';
import { View } from 'react-native';

interface Props {
  height?: SpacingType;
  width?: SpacingType;
}

export function Spacer({ height, width }: Props) {
  return (
    <View
      style={{
        height: height ? verticalScale(spacing[height]) : 0,
        width: width ? verticalScale(spacing[width]) : 0
      }}
    />
  );
}
