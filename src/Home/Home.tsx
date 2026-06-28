import { Link as RouterLink } from 'react-router';
import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import TechBadge from '../components/TechBadge';
import { highlights, impactMetrics, orderedSkills, profile, projects } from '../data/portfolio';

const Home = () => {
  const featuredSkills = orderedSkills.slice(0, 14);

  return (
    <Stack spacing={{ xs: 4, md: 7 }}>
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Stack spacing={4} direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: 'center' }}>
            <Stack spacing={3} sx={{ flex: 1 }}>
              <Box>
                <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
                  {profile.location}
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: 42, md: 68 }, lineHeight: 1.02 }}>
                  {profile.name}
                </Typography>
                <Typography variant="h4" color="text.secondary" sx={{ mt: 1 }}>
                  {profile.role} | React, TypeScript, Java & Cloud Systems
                </Typography>
              </Box>

              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 760 }}>
                {profile.summary}
              </Typography>

              <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
                <Button component={RouterLink} to="/projects" variant="contained" size="large">
                  View projects
                </Button>
                <Button component={RouterLink} to="/contact" variant="outlined" size="large">
                  Contact me
                </Button>
              </Stack>
            </Stack>

            <Box sx={{ width: { xs: '100%', md: 340 } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 800 }}>
                Portfolio Snapshot
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 1.5,
                  mb: 3,
                }}
              >
                {impactMetrics.map((metric) => (
                  <Box
                    key={metric.label}
                    sx={{
                      p: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      backgroundColor: 'background.paper',
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                      {metric.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {metric.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
              {highlights.map((highlight) => (
                <Typography key={highlight} variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {highlight}
                </Typography>
              ))}
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
            Selected work
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: 28, md: 38 } }}>
            Featured Projects
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            Selected projects that show product thinking, cloud-backed architecture, and hands-on
            delivery across web, backend, and mobile clients.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          {projects.map((project) => (
            <Card key={project.name} sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3, height: '100%' }}>
                <Stack spacing={2} sx={{ height: '100%' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    {project.name}
                  </Typography>
                  <Typography color="text.secondary">{project.description}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                    {project.detail}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} size="small" />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack spacing={2.5}>
            <Box>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
                Core Toolkit
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
              {featuredSkills.map((skill) => (
                <TechBadge key={skill} name={skill} />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Home;
