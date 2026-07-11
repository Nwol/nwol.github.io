import { Box, Button, Card, CardContent, Link, Stack } from '@mui/material';
import { MdDownload, MdOpenInNew } from 'react-icons/md';
import PageHeader from '../components/PageHeader';
import { resume } from '../data/portfolio';

const Resume = () => (
  <Stack spacing={{ xs: 5, md: 7 }}>
    <PageHeader
      eyebrow="Resume"
      title={resume.label}
      description="Review my experience, measurable engineering impact, technical toolkit, and education in one place."
      actions={
        <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Button component={Link} href={resume.file} target="_blank" rel="noreferrer" variant="outlined" endIcon={<MdOpenInNew />}>
            Open PDF
          </Button>
          <Button component={Link} href={resume.file} download={resume.downloadName} variant="contained" endIcon={<MdDownload />}>
            Download
          </Button>
        </Stack>
      }
    />

    <Card component="section">
      <CardContent sx={{ p: { xs: 1, sm: 1.5 } }}>
        <Box
          component="iframe"
          title={resume.label}
          src={`${resume.file}#toolbar=1&navpanes=0`}
          sx={{
            display: 'block',
            width: '100%',
            height: { xs: '72vh', md: '82vh' },
            border: 0,
            borderRadius: 1,
            backgroundColor: 'background.default',
          }}
        />
      </CardContent>
    </Card>
  </Stack>
);

export default Resume;
