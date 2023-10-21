import styled, { css } from 'styled-components/native';
import themeStyle from '@styles/themeStyle';

interface Props {
  enable: boolean;
}

const enableStyle = css`
  /* / background-color: transparent; */
  justify-content: flex-end;
`;

const disableStyle = css`
  /* / background-color: transparent; */
  justify-content: flex-start;
`;

export const Container = styled.TouchableOpacity<Props>`
  width: 40px;
  align-items: center;
  border-radius: 18px;
  border-radius: 8px;
  background-color: ${themeStyle.colors.$white};

  flex-direction: row;
  padding: 2px;

  ${({ enable }) => (enable ? enableStyle : disableStyle)};
`;

export const Circle = styled.View<Props>`
  width: 16px;
  height: 16px;
  border-radius: 16px;

  background-color: ${({ enable }) =>
    enable ? themeStyle.colors.$blue_dark : themeStyle.colors.$blue_light};
`;
