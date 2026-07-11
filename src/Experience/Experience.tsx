import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import PageHeader from '../components/PageHeader';
import { experiences } from '../data/portfolio';

const Experience = () => (
  <Stack spacing={{ xs: 5, md: 7 }}>
    <PageHeader
      eyebrow="Experience"
      title="Production engineering with measurable business and developer impact."
      description="My work spans customer-facing products, internal platforms, automated quality systems, cloud delivery, and the shared components that help engineering teams move faster."
    />

    <Stack component="section" spacing={2.5}>
      {experiences.map((experience, index) => (
        <Box
          key={`${experience.company}-${experience.period}`}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '220px minmax(0, 1fr)' },
            gap: { xs: 1.5, lg: 3 },
          }}
        >
          <Box sx={{ pt: { lg: 2.5 } }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 900 }}>0{index + 1}</Typography>
            <Typography color="text.secondary" sx={{ fontWeight: 700 }}>{experience.period}</Typography>
            <Typography variant="body2" color="text.secondary">{experience.location}</Typography>
          </Box>

          <Card>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.65rem', md: '2.15rem' } }}>{experience.title}</Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 800, mt: 0.5 }}>{experience.company}</Typography>
              <Box component="ul" sx={{ pl: 2.5, mb: 0, mt: 2.5, columns: { xs: 1, xl: experience.bullets.length > 5 ? 2 : 1 }, columnGap: 5 }}>
                {experience.bullets.map((bullet) => (
                  <Typography
                    component="li"
                    key={bullet}
                    color="text.secondary"
                    sx={{ mb: 1.35, pr: 1, lineHeight: 1.6, breakInside: 'avoid' }}
                  >
                    {bullet}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Stack>
  </Stack>
);

export default Experience;
