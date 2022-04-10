import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { base } from './base';
import { darkTheme } from './dark';

export const theme = {
  ...base,
  ...darkTheme,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
