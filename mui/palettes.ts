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
    divider: grey[200],
    background: {
      paper: '#fff',
      default: grey[50]
    }
  }
];

export default palettes;
