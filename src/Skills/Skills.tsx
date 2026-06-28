import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import TechBadge from '../components/TechBadge';
import { orderedSkills } from '../data/portfolio';

const Skills = () => {
  return (
    <Stack spacing={{ xs: 3, md: 5 }}>
      <Box>
        <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
          Skills
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 } }}>
          Tools I use to build, test, and ship software.
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {orderedSkills.map((skill) => (
              <TechBadge key={skill} name={skill} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Skills;
