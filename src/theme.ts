import { alpha, createTheme, type PaletteMode } from '@mui/material/styles';

export const pageGradient = (mode: PaletteMode) =>
  mode === 'dark'
    ? 'radial-gradient(circle at 15% 12%, rgba(55, 214, 157, 0.24) 0%, transparent 30%), radial-gradient(circle at 86% 16%, rgba(173, 255, 198, 0.14) 0%, transparent 28%), radial-gradient(circle at 52% 92%, rgba(10, 123, 88, 0.38) 0%, transparent 36%), linear-gradient(135deg, #061312 0%, #0b3027 46%, #112f22 100%)'
    : 'radial-gradient(circle at 14% 10%, rgba(255, 255, 255, 0.78) 0%, transparent 30%), radial-gradient(circle at 84% 12%, rgba(116, 225, 164, 0.46) 0%, transparent 28%), radial-gradient(circle at 52% 92%, rgba(231, 255, 205, 0.52) 0%, transparent 34%), linear-gradient(135deg, #eaf8f0 0%, #9be7bd 48%, #45b97a 100%)';

export const glassBackground = (mode: PaletteMode) =>
  mode === 'dark' ? alpha('#071317', 0.62) : alpha('#ffffff', 0.64);

export const glassBorder = (mode: PaletteMode) =>
  `1px solid ${mode === 'dark' ? alpha('#ffffff', 0.18) : alpha('#ffffff', 0.7)}`;

export const buildTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#7be6b8' : '#087a42',
      },
      secondary: {
        main: mode === 'dark' ? '#d9f99d' : '#2f8f55',
      },
      background: {
        default: mode === 'dark' ? '#061312' : '#edf9f1',
        paper: mode === 'dark' ? alpha('#071716', 0.74) : alpha('#ffffff', 0.78),
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
          a: {
            color: 'inherit',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.18)',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
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
                ? '0 24px 80px rgba(0, 0, 0, 0.3)'
                : '0 24px 80px rgba(20, 88, 58, 0.16)',
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
