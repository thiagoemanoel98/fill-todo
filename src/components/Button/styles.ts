import styled, { css } from 'styled-components/native';
import themeStyle from '@styles/themeStyle';
import { ButtonStatus } from './types';

const statusDefault = css`
  background-color: ${themeStyle.colors.$white};
`;

const statusDanger = css`
  background-color: ${themeStyle.colors.$danger};
`;

const statusDisabled = css`
  background-color: ${themeStyle.colors.$white_highlight};
`;

export const Container = styled.TouchableOpacity<ButtonStatus>`
  align-items: center;

  flex-direction: row;
  padding: 8px 16px;
  border-radius: 8px;

  ${({ type }) => type === 'default' && statusDefault};
  ${({ type }) => type === 'danger' && statusDanger};
  ${({ type }) => type === 'disabled' && statusDisabled};
`;

export const IconLeftArea = styled.View`
  margin-right: 4px;
`;

export const IconRightArea = styled.View`
  margin-left: 4px;
`;
