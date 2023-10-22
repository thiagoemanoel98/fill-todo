import themeStyle from '@styles/themeStyle';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { verticalScale } from '@utils';

export const KeyboardAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  margin-bottom: 12px;

  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 140px;
  height: 40px;
`;

export const GoBackIcon = styled(Entypo)`
  font-size: ${verticalScale(22)}px;
  color: ${themeStyle.colors.$blue_dark};
`;

export const HeaderLeft = styled.TouchableOpacity`
  flex: 1;
  padding-left: 14px;
`;

export const HeaderCenter = styled.View`
  flex: 2;
  align-items: center;
`;

export const HeaderRight = styled.View`
  flex: 1;
`;
