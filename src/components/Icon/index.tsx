import React from 'react';

import { TypeColors } from '@styles/colors';
import { Pressable } from 'react-native';
import { AddIcon } from 'src/assets/icons/AddIcon';
import { CancelIcon } from 'src/assets/icons/CancelIcon';
import { CheckIcon } from 'src/assets/icons/CheckIcon';
import themeStyle from '@styles/themeStyle';
import { ESCIcon } from 'src/assets/icons/ESCIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconNames;
  color?: TypeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({ name, color = '$black', size, onPress }: IconProps) {
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon color={themeStyle.colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={themeStyle.colors[color]} size={size} />;
}

const iconRegistry = {
  AddIcon: AddIcon,
  CheckIcon: CheckIcon,
  CancelIcon: CancelIcon,
  ESCIcon: ESCIcon
};

type IconType = typeof iconRegistry;
export type IconNames = keyof IconType;
