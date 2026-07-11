import { Link as RouterLink } from 'react-router';
import { Box, Button, Card, CardContent, Divider, Link, Stack, Typography, alpha } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdArrowForward, MdDownload, MdLocationOn } from 'react-icons/md';
import TechBadge from '../components/TechBadge';
import {
  experiences,
  highlights,
  impactMetrics,
  orderedSkills,
  profile,
  projects,
} from '../data/portfolio';

const Home = () => {
  const featuredSkills = orderedSkills.slice(0, 12);
  const featuredMetrics = [impactMetrics[0], impactMetrics[1], impactMetrics[3], impactMetrics[4]];

  return (
    <Stack spacing={{ xs: 8, md: 12 }}>
      <Box
        component="section"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.25fr) minmax(320px, 0.75fr)' },
          gap: { xs: 5, lg: 8 },
          alignItems: 'center',
          minHeight: { md: 560 },
          py: { xs: 2, md: 4 },
        }}
      >
        <Stack spacing={3.25} sx={{ maxWidth: 860 }}>
          <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
            <MdLocationOn size={18} />
            <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 800 }}>
              {profile.location} · Software Engineer
            </Typography>
          </Stack>

          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '3rem', sm: '4rem', md: '5.25rem' },
                fontWeight: 850,
                lineHeight: 0.98,
                maxWidth: 820,
              }}
            >
              {profile.name}
            </Typography>
            <Typography
              component="p"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1.45rem', sm: '1.8rem', md: '2.15rem' },
                fontWeight: 650,
                lineHeight: 1.2,
                mt: 2,
                maxWidth: 800,
              }}
            >
              I build dependable products and the engineering systems that help teams ship them.
            </Typography>
          </Box>

          <Typography color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.12rem' }, lineHeight: 1.75, maxWidth: 780 }}>
            {profile.summary}
          </Typography>

          <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap' }}>
            <Button component={RouterLink} to="/projects" variant="contained" size="large" endIcon={<MdArrowForward />}>
              Explore my work
            </Button>
            <Button component={RouterLink} to="/resume" variant="outlined" size="large" startIcon={<MdDownload />}>
              View resume
            </Button>
            <Button component={RouterLink} to="/contact" color="inherit" size="large">
              Get in touch
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <Link href={profile.github} target="_blank" rel="noreferrer" underline="hover" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontWeight: 700 }}>
              <FaGithub /> GitHub
            </Link>
            <Link href={profile.linkedIn} target="_blank" rel="noreferrer" underline="hover" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontWeight: 700 }}>
              <FaLinkedin /> LinkedIn
            </Link>
          </Stack>
        </Stack>

        <Box
          sx={{
            borderLeft: { lg: '1px solid' },
            borderTop: { xs: '1px solid', lg: 0 },
            borderColor: 'divider',
            pl: { lg: 6 },
            pt: { xs: 4, lg: 0 },
          }}
        >
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
            Measured impact
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 1,
              mt: 1.5,
            }}
          >
            {featuredMetrics.map((metric) => (
              <Box
                key={metric.label}
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  minHeight: 126,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.56),
                  backdropFilter: 'blur(18px)',
                }}
              >
                <Typography sx={{ fontSize: { xs: '1.75rem', md: '2.15rem' }, fontWeight: 900, color: 'primary.main' }}>
                  {metric.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.35 }}>
                  {metric.label}
                </Typography>
              </Box>
            ))}
          </Box>
          <Stack spacing={1.25} sx={{ mt: 3 }}>
            {highlights.map((highlight) => (
              <Stack key={highlight} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
                <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'primary.main', mt: 0.9, flexShrink: 0 }} />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
                  {highlight}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box component="section">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: { sm: 'flex-end' }, justifyContent: 'space-between', mb: 3 }}
        >
          <Box>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
              Selected work
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
              Projects built across the stack
            </Typography>
          </Box>
          <Button component={RouterLink} to="/projects" endIcon={<MdArrowForward />} sx={{ alignSelf: { xs: 'flex-start', sm: 'auto' } }}>
            View all projects
          </Button>
        </Stack>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
          {projects.map((project, index) => (
            <Card
              key={project.name}
              sx={{
                height: '100%',
                transition: 'transform 180ms ease, border-color 180ms ease',
                '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
              }}
            >
              <CardContent sx={{ p: { xs: 2.75, md: 3.25 }, height: '100%' }}>
                <Stack spacing={2.25} sx={{ height: '100%' }}>
                  <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 900 }}>
                      0{index + 1}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">Case project</Typography>
                  </Stack>
                  <Typography variant="h4">{project.name}</Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flex: 1, lineHeight: 1.6 }}>
                    {project.detail}
                  </Typography>
                  <Divider />
                  <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => <TechBadge key={tag} name={tag} size="small" />)}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box component="section">
        <Box sx={{ mb: 3 }}>
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
            Career snapshot
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
            Production experience, not just prototypes
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
          {experiences.map((experience) => (
            <Box key={experience.company} sx={{ p: { xs: 2.5, md: 3.5 }, borderTop: '3px solid', borderColor: 'primary.main' }}>
              <Typography variant="h4">{experience.title}</Typography>
              <Typography color="primary" sx={{ fontWeight: 800, mt: 0.5 }}>{experience.company}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{experience.period}</Typography>
              <Box component="ul" sx={{ pl: 2.25, mb: 0, mt: 2 }}>
                {experience.bullets.slice(0, 3).map((bullet) => (
                  <Typography component="li" key={bullet} color="text.secondary" sx={{ mb: 1, lineHeight: 1.55 }}>
                    {bullet}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Button component={RouterLink} to="/experience" endIcon={<MdArrowForward />} sx={{ mt: 2 }}>
          See full experience
        </Button>
      </Box>

      <Box component="section" sx={{ borderTop: '1px solid', borderColor: 'divider', pt: { xs: 5, md: 6 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ maxWidth: 460 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.25rem' } }}>Core toolkit</Typography>
            <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
              The technologies I reach for most often across frontend, backend, testing, and delivery.
            </Typography>
          </Box>
          <Stack direction="row" spacing={0.9} useFlexGap sx={{ flexWrap: 'wrap', maxWidth: 760, alignContent: 'flex-start' }}>
            {featuredSkills.map((skill) => <TechBadge key={skill} name={skill} />)}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Home;
