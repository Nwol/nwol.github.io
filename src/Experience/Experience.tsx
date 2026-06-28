import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
          Experience
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 } }}>
          Production engineering with measurable business and developer impact.
        </Typography>
      </Box>

      {experiences.map((experience) => (
        <Card key={`${experience.company}-${experience.period}`}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
              sx={{ justifyContent: 'space-between' }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {experience.title}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 800 }}>
                  {experience.company}
                </Typography>
              </Box>
              <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                <Typography color="text.secondary">{experience.period}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {experience.location}
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
              {experience.bullets.map((bullet) => (
                <Typography component="li" key={bullet} color="text.secondary" sx={{ mb: 1.25 }}>
                  {bullet}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default Experience;
