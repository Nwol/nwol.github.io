import { alpha, createTheme, type PaletteMode } from '@mui/material/styles';

export const pageGradient = (mode: PaletteMode) =>
  mode === 'dark'
    ? 'linear-gradient(145deg, #050c0a 0%, #0a1914 36%, #0d2b20 72%, #123a2a 100%)'
    : 'linear-gradient(145deg, #f7fcf8 0%, #e8f7ed 42%, #ccebd8 74%, #a8ddbf 100%)';

export const glassBackground = (mode: PaletteMode) =>
  mode === 'dark' ? alpha('#07110e', 0.76) : alpha('#ffffff', 0.72);

export const glassBorder = (mode: PaletteMode) =>
  `1px solid ${mode === 'dark' ? alpha('#ffffff', 0.18) : alpha('#ffffff', 0.7)}`;

export const buildTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#74e3ad' : '#087443',
      },
      secondary: {
        main: mode === 'dark' ? '#d9f99d' : '#2f8f55',
      },
      background: {
        default: mode === 'dark' ? '#050c0a' : '#f2faf5',
        paper: mode === 'dark' ? alpha('#0a1713', 0.72) : alpha('#ffffff', 0.76),
      },
      text: {
        primary: mode === 'dark' ? '#f5fbf8' : '#10231b',
        secondary: mode === 'dark' ? alpha('#f5fbf8', 0.72) : alpha('#10231b', 0.7),
      },
    },
    typography: {
      fontFamily:
        '"Ubuntu", Arial, sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: 0,
      },
      h2: {
        fontWeight: 800,
        letterSpacing: 0,
      },
      h3: {
        fontWeight: 750,
        letterSpacing: 0,
      },
      h4: {
        fontWeight: 750,
        letterSpacing: 0,
      },
      button: {
        fontWeight: 700,
        textTransform: 'none',
      },
      body1: {
        fontWeight: 500,
        letterSpacing: 0.1,
      },
      body2: {
        fontWeight: 500,
        letterSpacing: 0.1,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            minWidth: 320,
          },
          '::selection': {
            backgroundColor: mode === 'dark' ? alpha('#74e3ad', 0.32) : alpha('#087443', 0.2),
          },
          a: {
            color: 'inherit',
          },
          ':focus-visible': {
            outline: `3px solid ${alpha(mode === 'dark' ? '#74e3ad' : '#087443', 0.62)}`,
            outlineOffset: 3,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: mode === 'dark' ? '0 18px 60px rgba(0, 0, 0, 0.28)' : '0 18px 50px rgba(25, 91, 57, 0.14)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            minHeight: 42,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${mode === 'dark' ? alpha('#ffffff', 0.14) : alpha('#ffffff', 0.72)}`,
            backdropFilter: 'blur(26px) saturate(150%)',
            WebkitBackdropFilter: 'blur(26px) saturate(150%)',
            backgroundImage: 'none',
            boxShadow:
              mode === 'dark'
                ? '0 18px 54px rgba(0, 0, 0, 0.24)'
                : '0 18px 48px rgba(20, 88, 58, 0.12)',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? alpha('#05110f', 0.34) : alpha('#ffffff', 0.42),
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 700,
          },
        },
      },
    },
  });
