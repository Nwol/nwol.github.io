import { type MouseEvent, useEffect, useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  GlobalStyles,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
} from '@mui/material';
import type { PaletteMode } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  MdClose,
  MdDarkMode,
  MdDownload,
  MdKeyboardArrowDown,
  MdLightMode,
  MdMenu,
} from 'react-icons/md';
import { buildTheme, glassBackground, glassBorder, pageGradient } from './theme';
import { navItems, profile, publicAsset, resume } from './data/portfolio';

const getInitialMode = (): PaletteMode => {
  if (typeof window === 'undefined') return 'dark';

  const savedMode = window.localStorage.getItem('portfolio-theme');
  if (savedMode === 'light' || savedMode === 'dark') return savedMode;

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const App = () => {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeMenuAnchor, setResumeMenuAnchor] = useState<HTMLElement | null>(null);
  const location = useLocation();
  const theme = useMemo(() => buildTheme(mode), [mode]);
  const isResumeMenuOpen = Boolean(resumeMenuAnchor);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', mode);
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const activePage = navItems.find((item) => item.path === location.pathname)?.label;
    const pageName = location.pathname === '/resume' ? 'Resume' : activePage;
    document.title = pageName && pageName !== 'Home' ? `${pageName} | ${profile.name}` : `${profile.name} | Portfolio`;
  }, [location.pathname]);

  const openResumeMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setResumeMenuAnchor(event.currentTarget);
  };

  const closeResumeMenu = () => {
    setResumeMenuAnchor(null);
  };

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '#root': { minHeight: '100vh' },
          '.skip-link': {
            position: 'fixed',
            top: -80,
            left: 16,
            zIndex: 2000,
            borderRadius: 8,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            fontWeight: 800,
            padding: '10px 16px',
            textDecoration: 'none',
            transition: 'top 160ms ease',
            '&:focus': { top: 16 },
          },
          '@keyframes page-in': {
            from: { opacity: 0, transform: 'translateY(8px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
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
          px: { xs: 1.25, sm: 2, md: 3 },
          pt: { xs: 1.25, md: 2.5 },
        }}
      >
        <Link className="skip-link" href="#main-content">
          Skip to content
        </Link>

        <Container maxWidth="xl" disableGutters>
          <AppBar
            position="sticky"
            elevation={0}
            sx={{
              top: { xs: 10, md: 16 },
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
                minHeight: { xs: 70, md: 76 },
                gap: { xs: 1, md: 2 },
                px: { xs: 1.25, sm: 2, md: 2.5 },
              }}
            >
              <Stack
                component={NavLink}
                to="/"
                aria-label="Go to home page"
                direction="row"
                spacing={1.1}
                sx={{
                  alignItems: 'center',
                  color: 'inherit',
                  textDecoration: 'none',
                  borderRadius: 2,
                  flexShrink: 0,
                  p: 0.5,
                  '&:hover': {
                    backgroundColor: mode === 'dark' ? alpha('#ffffff', 0.08) : alpha('#ffffff', 0.5),
                  },
                }}
              >
                <Box
                  component="img"
                  src={publicAsset('favicon.svg')}
                  alt=""
                  sx={{ width: { xs: 40, md: 46 }, height: { xs: 40, md: 46 } }}
                />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography sx={{ fontSize: { sm: '1.05rem', md: '1.18rem' }, fontWeight: 800, lineHeight: 1.1 }}>
                    {profile.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: '0.78rem', fontWeight: 600, mt: 0.25 }}>
                    {profile.role}
                  </Typography>
                </Box>
              </Stack>

              <Stack
                component="nav"
                aria-label="Primary navigation"
                direction="row"
                spacing={0.25}
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  flex: 1,
                  justifyContent: 'center',
                  minWidth: 0,
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={NavLink}
                    to={item.path}
                    end={item.path === '/'}
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.91rem',
                      px: 1.35,
                      '&:hover': { color: 'text.primary' },
                      '&.active': {
                        color: 'text.primary',
                        backgroundColor: mode === 'dark' ? alpha('#ffffff', 0.11) : alpha('#ffffff', 0.7),
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>

              <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center', ml: 'auto' }}>
                <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
                  <IconButton
                    onClick={toggleMode}
                    aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
                    sx={{
                      width: 42,
                      height: 42,
                      border: glassBorder(mode),
                      color: mode === 'dark' ? '#d9f99d' : '#775500',
                      backgroundColor: mode === 'dark' ? alpha('#ffffff', 0.08) : alpha('#fff8d6', 0.74),
                    }}
                  >
                    {mode === 'dark' ? <MdLightMode size={21} /> : <MdDarkMode size={20} />}
                  </IconButton>
                </Tooltip>

                <Stack
                  direction="row"
                  spacing={0}
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    border: glassBorder(mode),
                    borderRadius: 999,
                    overflow: 'hidden',
                  }}
                >
                  <Button
                    component={NavLink}
                    to="/resume"
                    size="small"
                    sx={{
                      color: 'text.primary',
                      px: 1.6,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      '&.active': { backgroundColor: alpha(theme.palette.primary.main, 0.14) },
                    }}
                  >
                    Resume
                  </Button>
                  <IconButton
                    aria-controls={isResumeMenuOpen ? 'resume-download-menu' : undefined}
                    aria-expanded={isResumeMenuOpen ? 'true' : undefined}
                    aria-haspopup="menu"
                    aria-label="Resume download options"
                    onClick={openResumeMenu}
                    size="small"
                    sx={{ color: 'text.primary', width: 38, borderRadius: 0 }}
                  >
                    <MdKeyboardArrowDown size={20} />
                  </IconButton>
                </Stack>

                <IconButton
                  aria-label="Open navigation"
                  onClick={() => setMobileMenuOpen(true)}
                  sx={{
                    display: { xs: 'inline-flex', lg: 'none' },
                    width: 42,
                    height: 42,
                    border: glassBorder(mode),
                    color: 'text.primary',
                  }}
                >
                  <MdMenu size={24} />
                </IconButton>
              </Stack>
            </Toolbar>
          </AppBar>
        </Container>

        <Menu
          id="resume-download-menu"
          anchorEl={resumeMenuAnchor}
          open={isResumeMenuOpen}
          onClose={closeResumeMenu}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem component="a" href={resume.file} download={resume.downloadName} onClick={closeResumeMenu}>
            <MdDownload size={19} style={{ marginRight: 10 }} />
            Download PDF
          </MenuItem>
        </Menu>

        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          slotProps={{
            paper: {
              sx: {
                width: 'min(88vw, 360px)',
                p: 2,
                backgroundColor: mode === 'dark' ? alpha('#07110e', 0.96) : alpha('#f7fcf8', 0.96),
                backgroundImage: 'none',
                backdropFilter: 'blur(28px)',
              },
            },
          }}
        >
          <Stack spacing={2} sx={{ height: '100%' }}>
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Box component="img" src={publicAsset('favicon.svg')} alt="" sx={{ width: 42, height: 42 }} />
                <Box>
                  <Typography sx={{ fontWeight: 800 }}>{profile.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{profile.role}</Typography>
                </Box>
              </Stack>
              <IconButton aria-label="Close navigation" onClick={() => setMobileMenuOpen(false)}>
                <MdClose size={24} />
              </IconButton>
            </Stack>

            <Divider />

            <List component="nav" aria-label="Mobile navigation" disablePadding>
              {navItems.map((item) => (
                <ListItemButton
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    '&.active': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.14),
                      color: 'primary.main',
                    },
                  }}
                >
                  <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 750 } } }} />
                </ListItemButton>
              ))}
              <ListItemButton
                component={NavLink}
                to="/resume"
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  borderRadius: 2,
                  '&.active': { backgroundColor: alpha(theme.palette.primary.main, 0.14), color: 'primary.main' },
                }}
              >
                <ListItemText primary="Resume" slotProps={{ primary: { sx: { fontWeight: 750 } } }} />
              </ListItemButton>
            </List>

            <Button component="a" href={resume.file} download={resume.downloadName} variant="contained" startIcon={<MdDownload />}>
              Download resume
            </Button>

            <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
              <IconButton component="a" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={21} />
              </IconButton>
              <IconButton component="a" href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={21} />
              </IconButton>
            </Stack>
          </Stack>
        </Drawer>

        <Container id="main-content" component="main" maxWidth="xl" disableGutters sx={{ py: { xs: 5, md: 8 } }}>
          <Box key={location.pathname} sx={{ animation: 'page-in 260ms ease both' }}>
            <Outlet />
          </Box>
        </Container>

        <Container component="footer" maxWidth="xl" disableGutters>
          <Divider />
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', py: 3.5 }}
          >
            <Box>
              <Typography sx={{ fontWeight: 800 }}>{profile.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Software engineering across product, platform, and delivery.
              </Typography>
            </Box>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
                © {new Date().getFullYear()}
              </Typography>
              <IconButton component="a" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" size="small">
                <FaGithub />
              </IconButton>
              <IconButton component="a" href={profile.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn" size="small">
                <FaLinkedin />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
