import styled, { css } from 'styled-components/native';
import { CardProps } from './types';
import themeStyle from '@styles/themeStyle';

const statusTodo = css`
  background-color: ${themeStyle.colors.$white};
`;

const statusDone = css`
  background-color: ${themeStyle.colors.$blue_light};
`;

const statusExpired = css`
  background-color: ${themeStyle.colors.$white};
`;

export const Container = styled.View<CardProps>`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;

  ${({ status }) => status === 'done' && statusDone};
  ${({ status }) => status === 'expired' && statusExpired};
  ${({ status }) => status === 'todo' && statusTodo};
`;

export const SideLeft = styled.View<CardProps>`
  width: ${({ status }) => (status === 'done' ? 90 : 80)}%;
`;

export const SideRight = styled.View`
  align-self: flex-end;
  flex-grow: 1;
  justify-content: flex-end;
  flex-direction: row;
  align-items: right;
`;
