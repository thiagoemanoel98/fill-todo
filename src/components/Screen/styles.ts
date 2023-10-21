import themeStyle from '@styles/themeStyle';
import styled from 'styled-components/native';

export const KeyboardAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${themeStyle.colors.$blue_lightest};
`;

export const LogoArea = styled.View`
  padding-top: 12px;
  margin-bottom: 12px;
`;

export const Logo = styled.Image`
  width: 140px;
  height: 40px;
`;
