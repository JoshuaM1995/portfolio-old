import _ from 'lodash';
import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { baseTheme } from './base';
import { darkTheme } from './dark';

export const theme = _.merge(baseTheme, darkTheme);

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
