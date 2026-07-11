import { Box, Stack, Typography } from '@mui/material';
import PageHeader from '../components/PageHeader';
import TechBadge from '../components/TechBadge';
import { orderedSkills } from '../data/portfolio';

const Skills = () => (
  <Stack spacing={{ xs: 5, md: 7 }}>
    <PageHeader
      eyebrow="Skills"
      title="Tools I use to build, test, and ship software."
      description="A practical toolkit spanning product development, backend services, testing, infrastructure, and delivery."
    />

    <Box
      component="section"
      sx={{
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: { xs: 4, md: 5 },
      }}
    >
      <Stack direction="row" spacing={1.1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {orderedSkills.map((skill) => <TechBadge key={skill} name={skill} />)}
      </Stack>
    </Box>

    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
      <Box>
        <Typography variant="h5">Build</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.65 }}>
          Product interfaces, reusable component systems, APIs, and distributed application workflows.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">Validate</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.65 }}>
          Unit, browser, visual, and accessibility testing that keeps releases dependable.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">Deliver</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.65 }}>
          Containers, CI/CD, cloud infrastructure, and automation that shorten feedback loops.
        </Typography>
      </Box>
    </Box>
  </Stack>
);

export default Skills;
