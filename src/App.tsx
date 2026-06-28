import { type MouseEvent, useMemo, useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  GlobalStyles,
  Menu,
  MenuItem,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  alpha,
} from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { MdDarkMode, MdDownload, MdKeyboardArrowDown, MdLightMode } from 'react-icons/md';
import { buildTheme, glassBackground, glassBorder, pageGradient } from './theme';
import { navItems, profile, publicAsset, resume } from './data/portfolio';

const brandFont = '"Ubuntu", Arial, sans-serif';

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const [resumeMenuAnchor, setResumeMenuAnchor] = useState<HTMLElement | null>(null);
  const theme = useMemo(() => buildTheme(mode), [mode]);
  const isResumeMenuOpen = Boolean(resumeMenuAnchor);

  const openResumeMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setResumeMenuAnchor(event.currentTarget);
  };

  const closeResumeMenu = () => {
    setResumeMenuAnchor(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '#root': {
            minHeight: '100vh',
          },
        }}
      />
      <Box
        sx={{
          minHeight: '100vh',
          background: pageGradient(mode),
          backgroundAttachment: 'fixed',
          color: 'text.primary',
          overflowX: 'hidden',
          py: { xs: 2, md: 3 },
        }}
      >
        <Container maxWidth="xl">
          <AppBar
            position="sticky"
            elevation={0}
            sx={{
              top: 16,
              mx: 'auto',
              border: glassBorder(mode),
              borderRadius: 2,
              backgroundColor: glassBackground(mode),
              color: 'text.primary',
              backdropFilter: 'blur(28px) saturate(160%)',
              WebkitBackdropFilter: 'blur(28px) saturate(160%)',
            }}
          >
            <Toolbar
              sx={{
                minHeight: { xs: 84, md: 88 },
                gap: { xs: 1.5, md: 2.5 },
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                py: 1.25,
              }}
            >
              <Stack
                component={NavLink}
                to="/"
                aria-label="Go to home page"
                direction="row"
                spacing={1.25}
                sx={{
                  alignItems: 'center',
                  color: 'inherit',
                  textDecoration: 'none',
                  borderRadius: 2,
                  px: 0.75,
                  py: 0.5,
                  '&:hover': {
                    backgroundColor: mode === 'dark' ? alpha('#ffffff', 0.1) : alpha('#ffffff', 0.5),
                  },
                }}
              >
                <Box
                  component="img"
                  src={publicAsset('favicon.svg')}
                  alt="Nahom Woldeab initials"
                  sx={{
                    width: { xs: 42, md: 48 },
                    height: { xs: 42, md: 48 },
                    filter: mode === 'dark' ? 'drop-shadow(0 8px 18px rgba(0, 0, 0, 0.28))' : 'none',
                  }}
                />
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'text.primary',
                      fontFamily: brandFont,
                      fontSize: { xs: '1.16rem', md: '1.42rem' },
                      fontWeight: 700,
                      letterSpacing: 0,
                      lineHeight: 1.05,
                    }}
                  >
                    {profile.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      display: 'block',
                      fontFamily: brandFont,
                      fontSize: { xs: '0.78rem', md: '0.9rem' },
                      fontWeight: 500,
                      letterSpacing: 0,
                      lineHeight: 1.1,
                      mt: 0.35,
                    }}
                  >
                    {profile.role}
                  </Typography>
                </Box>
              </Stack>

              <Box component="nav">
                <Stack
                  direction="row"
                  spacing={0.75}
                  useFlexGap
                  sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      component={NavLink}
                      to={item.path}
                      size="medium"
                      sx={{
                        color: 'text.primary',
                        fontSize: { xs: '0.88rem', md: '0.98rem' },
                        minHeight: 42,
                        px: { xs: 1.4, md: 2 },
                        py: 0.9,
                        '&.active': {
                          backgroundColor:
                            mode === 'dark' ? alpha('#ffffff', 0.16) : alpha('#ffffff', 0.62),
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>
              </Box>

              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Button
                  aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
                  onClick={() => setMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark'))}
                  sx={{
                    border: glassBorder(mode),
                    color: 'text.primary',
                    minHeight: 42,
                    minWidth: 86,
                    px: 0.75,
                    backgroundColor: mode === 'dark' ? alpha('#ffffff', 0.1) : alpha('#ffffff', 0.48),
                    '&:hover': {
                      backgroundColor: mode === 'dark' ? alpha('#ffffff', 0.16) : alpha('#ffffff', 0.68),
                    },
                  }}
                >
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                    <Box
                      sx={{
                        display: 'grid',
                        placeItems: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: 999,
                        color: mode === 'light' ? '#7a5500' : 'text.secondary',
                        backgroundColor: mode === 'light' ? alpha('#fff3bf', 0.95) : 'transparent',
                      }}
                    >
                      <MdLightMode size={18} />
                    </Box>
                    <Box
                      sx={{
                        display: 'grid',
                        placeItems: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: 999,
                        color: mode === 'dark' ? '#d9f99d' : 'text.secondary',
                        backgroundColor: mode === 'dark' ? alpha('#10231b', 0.8) : 'transparent',
                      }}
                    >
                      <MdDarkMode size={18} />
                    </Box>
                  </Stack>
                </Button>

                <Stack
                  direction="row"
                  spacing={0.25}
                  sx={{
                    borderRadius: 999,
                    overflow: 'hidden',
                    backgroundColor: isResumeMenuOpen
                      ? mode === 'dark'
                        ? alpha('#ffffff', 0.12)
                        : alpha('#ffffff', 0.54)
                      : 'transparent',
                  }}
                >
                  <Button
                    component={NavLink}
                    to="/resume"
                    size="medium"
                    sx={{
                      color: 'text.primary',
                      fontSize: { xs: '0.88rem', md: '0.98rem' },
                      minHeight: 42,
                      px: { xs: 1.4, md: 2 },
                      py: 0.9,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      '&.active': {
                        backgroundColor:
                          mode === 'dark' ? alpha('#ffffff', 0.16) : alpha('#ffffff', 0.62),
                      },
                    }}
                  >
                    Resume
                  </Button>
                  <Button
                    aria-controls={isResumeMenuOpen ? 'resume-download-menu' : undefined}
                    aria-expanded={isResumeMenuOpen ? 'true' : undefined}
                    aria-haspopup="menu"
                    aria-label="Resume download options"
                    onClick={openResumeMenu}
                    size="medium"
                    sx={{
                      color: 'text.primary',
                      minHeight: 42,
                      minWidth: 42,
                      px: 0.75,
                      py: 0.9,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    <MdKeyboardArrowDown size={22} />
                  </Button>
                </Stack>
                <Menu
                  id="resume-download-menu"
                  anchorEl={resumeMenuAnchor}
                  open={isResumeMenuOpen}
                  onClose={closeResumeMenu}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={closeResumeMenu}>
                    <Box
                      component="a"
                      href={resume.file}
                      download={resume.downloadName}
                      sx={{
                        alignItems: 'center',
                        color: 'inherit',
                        display: 'flex',
                        gap: 1,
                        textDecoration: 'none',
                        width: '100%',
                      }}
                    >
                      <MdDownload size={20} />
                      Download PDF
                    </Box>
                  </MenuItem>
                </Menu>
              </Stack>
            </Toolbar>
          </AppBar>
        </Container>

        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
