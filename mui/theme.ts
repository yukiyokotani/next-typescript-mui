import { createTheme, Theme, ThemeOptions } from '@mui/material';

import palettes from './palettes';
import typography from './typography';

const baseThemeOption: ThemeOptions = {
  direction: 'ltr',
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 672,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
};

const theme = (mode: 'light' | 'dark'): Theme => {
  const palette = palettes.find((palette) => palette?.mode === mode);

  return createTheme({ ...baseThemeOption, palette });
};

export default theme;
