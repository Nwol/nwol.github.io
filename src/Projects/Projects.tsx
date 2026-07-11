import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import PageHeader from '../components/PageHeader';
import TechBadge from '../components/TechBadge';
import { projects } from '../data/portfolio';

const Projects = () => (
  <Stack spacing={{ xs: 5, md: 7 }}>
    <PageHeader
      eyebrow="Projects"
      title="Product-minded apps across web, cloud, backend, and mobile."
      description="These projects reflect the same strengths as my professional work: practical workflows, backend APIs, cloud persistence, containerized services, and responsive frontend delivery."
    />

    <Box component="section" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
      {projects.map((project, index) => (
        <Card
          key={project.name}
          sx={{
            height: '100%',
            transition: 'transform 180ms ease, border-color 180ms ease',
            '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 3.5 }, height: '100%' }}>
            <Stack spacing={2.25} sx={{ height: '100%' }}>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 900 }}>0{index + 1}</Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }}>{project.name}</Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>{project.description}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ flex: 1, lineHeight: 1.6 }}>{project.detail}</Typography>
              <Divider />
              <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: 'wrap' }}>
                {project.tags.map((tag) => <TechBadge key={tag} name={tag} size="small" />)}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Stack>
);

export default Projects;
