import { PaletteOptions } from '@mui/material';
import { grey } from '@mui/material/colors';

const palettes: PaletteOptions[] = [
  {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff'
    },
    text: {
      primary: grey[700],
      secondary: grey[500],
      disabled: grey[400]
    },
    action: {
      disabled: grey[300]
    },
    background: {
      paper: grey[50],
      default: grey[200]
    }
  },
  {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff'
    },
    text: {
      primary: grey[50],
      secondary: grey[400],
      disabled: grey[500]
    },
    action: {
      disabled: grey[600]
    },
    background: {
      paper: grey[900],
      default: grey[800]
    }
  }
];

export default palettes;
