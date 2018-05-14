import * as React from 'react';
import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
}

export const theme: IThemeInterface = {
  primaryColor: '#e9e9eb'
};

export { css, injectGlobal, keyframes, ThemeProvider, styled };
