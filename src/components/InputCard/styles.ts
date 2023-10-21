import themeStyle from '@styles/themeStyle';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;

  background-color: ${themeStyle.colors.$white};
`;

export const ContainerInput = styled.TextInput`
  width: 100%;
  padding: 16px;
  color: ${themeStyle.colors.$blue_dark};
  font-family: ${themeStyle.textVariants.Body.fontFamily};
`;
