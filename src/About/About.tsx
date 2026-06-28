import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { education, profile } from '../data/portfolio';

const About = () => {
  return (
    <Stack spacing={3}>
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
            About
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 }, mb: 2 }}>
            Software engineer who improves product quality, delivery speed, and frontend scale.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {profile.summary}
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
            Education
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={0.5}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              {education.school}
            </Typography>
            <Typography color="text.secondary">{education.degree}</Typography>
            <Typography variant="body2" color="text.secondary">
              {education.location} | {education.period}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default About;
