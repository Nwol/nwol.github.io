import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import PageHeader from '../components/PageHeader';
import { education, profile } from '../data/portfolio';

const strengths = [
  {
    title: 'Product-grade frontend',
    detail: 'Modern React and Angular interfaces built for maintainability, performance, accessibility, and real production workflows.',
  },
  {
    title: 'Delivery systems',
    detail: 'Testing and CI/CD improvements that shorten feedback loops, strengthen coverage, and help teams release with confidence.',
  },
  {
    title: 'Full-stack context',
    detail: 'Hands-on work across Java services, PostgreSQL, containers, cloud infrastructure, and the frontend systems that connect them.',
  },
];

const About = () => (
  <Stack spacing={{ xs: 6, md: 9 }}>
    <PageHeader
      eyebrow="About"
      title="I make complex software easier to use, maintain, and ship."
      description={profile.summary}
    />

    <Box component="section">
      <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.25rem' }, mb: 3 }}>
        What I bring to a team
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
        {strengths.map((strength, index) => (
          <Card key={strength.title} sx={{ height: '100%' }}>
            <CardContent sx={{ p: { xs: 2.75, md: 3.25 } }}>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 900 }}>0{index + 1}</Typography>
              <Typography variant="h4" sx={{ mt: 1 }}>{strength.title}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>{strength.detail}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>

    <Box component="section" sx={{ borderTop: '1px solid', borderColor: 'divider', pt: { xs: 4, md: 5 } }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.38fr 0.62fr' }, gap: 3 }}>
        <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>Education</Typography>
        <Box>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.7rem', md: '2.15rem' } }}>{education.school}</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>{education.degree}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {education.location} · {education.period}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Stack>
);

export default About;
