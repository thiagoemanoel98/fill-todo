import React, { PropsWithChildren, ReactNode } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

import { SpacingType, spacing } from '@styles/themeStyle';
import { verticalScale } from '@utils';
import { Colors, TypeColors } from '@styles/colors';
import { IStyleTopography, typography } from '@styles/typography';

type IStylesProps = TextStyle & TextProps & PropsWithChildren;

interface Props extends IStylesProps {
  children: ReactNode;
  variant: IStyleTopography;
  color?: TypeColors;
  padding?: SpacingType;
  paddingTop?: SpacingType;
  paddingRight?: SpacingType;
  paddingBottom?: SpacingType;
  paddingLeft?: SpacingType;
  paddingHorizontal?: SpacingType;
  marginLeft?: SpacingType;
  marginTop?: SpacingType;
  marginRight?: SpacingType;
  marginBottom?: SpacingType;
}

export function Text({
  children,
  variant,
  color,
  fontSize,
  textTransform,
  textAlign,
  textDecorationLine,
  padding = 'none',
  paddingTop = 'none',
  paddingRight = 'none',
  paddingBottom = 'none',
  paddingLeft = 'none',
  marginLeft = 'none',
  marginTop = 'none',
  marginRight = 'none',
  marginBottom = 'none',
  paddingHorizontal = 'none',
  fontWeight,
  style,
  ...rest
}: Props) {
  return (
    <RNText
      {...rest}
      maxFontSizeMultiplier={1.1}
      style={[
        {
          fontSize: fontSize
            ? verticalScale(fontSize)
            : verticalScale(typography[variant].fontSize),
          fontFamily: typography[variant].fontFamily,
          color: color ? Colors[color] : typography[variant].color,
          textTransform,
          textAlign,
          textDecorationLine,
          padding: spacing[padding],
          paddingTop: spacing[paddingTop],
          paddingRight: spacing[paddingRight],
          paddingBottom: spacing[paddingBottom],
          paddingLeft: spacing[paddingLeft],
          marginLeft: spacing[marginLeft],
          marginTop: spacing[marginTop],
          marginRight: spacing[marginRight],
          marginBottom: spacing[marginBottom],
          paddingHorizontal: spacing[paddingHorizontal],
          fontWeight
        },
        style && style
      ]}
    >
      {children}
    </RNText>
  );
}
