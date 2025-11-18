import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7c3aed',
    },
    background: {
      default: '#111827',
    },
  },
  typography: {
    fontFamily: ['var(--font-inter)', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'var(--font-calsans)', 
    },
    h2: {
      fontFamily: 'var(--font-calsans)',
    },
    h3: {
      fontFamily: 'var(--font-calsans)',
    },
    h4: {
      fontFamily: 'var(--font-calsans)',
    },
    h5: {
      fontFamily: 'var(--font-calsans)',
    },
    h6: {
      fontFamily: 'var(--font-calsans)',
    },
  },
});

export default theme;
