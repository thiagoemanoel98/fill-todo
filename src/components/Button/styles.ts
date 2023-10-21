import styled, { css } from 'styled-components/native';
import themeStyle from '@styles/themeStyle';

export type ButtonStatusType = 'default' | 'danger';
interface ButtonStatus {
  type: ButtonStatusType;
}

const statusDefault = css`
  /* / background-color: transparent; */
  background-color: ${themeStyle.colors.$white};
`;

const statusDanger = css`
  /* / background-color: transparent; */
  background-color: ${themeStyle.colors.$danger};
`;

export const Container = styled.TouchableOpacity<ButtonStatus>`
  padding: 8px 16px;
  border-radius: 8px;

  ${({ type }) => type === 'default' && statusDefault};
  ${({ type }) => type === 'danger' && statusDanger};
`;
