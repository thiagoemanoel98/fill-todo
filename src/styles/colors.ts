export const Colors = {
  $white: '#FFF',
  $black: '#000',
  $white_highlight: '#F3FAFF',
  $blue_dark: '#3D4D78',
  $blue_light: '#D0E8F9',
  $blue_lightest: '#DAEEFC',
  $danger: '#EA638C',
  $danger_highlight: '#ED9CB5',
  $gray: '#9E9FBE'
};

export type ThemeColors = typeof Colors;
export type TypeColors = keyof ThemeColors;
