import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
let globalTheme = createTheme({
  spacing: 0,
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontSize: 14,
    fontFamily: ['Inter', 'system-ui', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
    },
    h6: {
      fontWeight: 800,
    },
  },
  palette: {
    primary: {
      main: 'hsl(215, 75%, 60%)',
    },
    secondary: {
      main: 'hsl(177, 100%, 30%)',
    },
    error: {
      main: 'hsl(0, 60%, 50%)',
    },
    warning: {
      main: 'hsl(36, 90%, 50%)',
    },
    success: {
      main: 'hsl(177, 100%, 30%)',
    },
    info: {
      main: 'hsl(215, 75%, 60%)',
    },
  },
  components: {
    MuiChip: {
      defaultProps: { color: 'primary', variant: 'outlined' },
    },
  },
});

// a function that will return the palette based on the mode
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          text: {
            primary: 'hsl(210, 25%, 20%)',
            secondary: 'hsl(210, 25%, 30%)',
          },
          action: {
            active: 'hsla(210, 50%, 17%, 0.85)',
            hover: 'hsla(210, 50%, 80%, 0.2)',
          },
          background: {
            default: 'hsl(210, 15%, 97%)',
            paper: 'hsl(210, 25%, 100%)',
          },
          divider: 'hsla(210, 25%, 50%, 0.15)',
        }
      : {
          // palette values for dark mode
          text: {
            primary: 'hsl(215, 25%, 95%)',
            secondary: 'hsl(210, 25%, 80%)',
            disabled: 'hsl(210, 25%, 30%)',
          },
          action: {
            active: 'hsl(210, 50%, 90%)',
            hover: 'hsla(210, 50%, 80%, 0.05)',
            disabled: 'hsla(210, 50%, 80%, 0.10)',
            disabledBackground: 'hsl(210, 35%, 10%)',
          },
          background: {
            default: 'hsl(210, 25%, 8%)',
            paper: 'hsl(210, 35%, 10%)',
          },
          divider: 'hsla(210, 50%, 80%, 0.10)',
        }),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          [globalTheme.breakpoints.down('md')]: {
            padding: '0',
            //backgroundColor: globalTheme.palette.secondary.main,
          },
        },
      },
    },
  },
});

globalTheme = responsiveFontSizes(globalTheme);

export default globalTheme;
