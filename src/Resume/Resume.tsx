import { Box, Button, Card, CardContent, Link, Stack, Typography } from '@mui/material';
import { MdDownload, MdOpenInNew } from 'react-icons/md';
import { resume } from '../data/portfolio';

const Resume = () => {
  return (
    <Stack spacing={{ xs: 3, md: 5 }}>
      <Card>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{ alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between' }}
          >
            <Box>
              <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
                Resume
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 } }}>
                {resume.label}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
                View the PDF in the browser or download a copy for later.
              </Typography>
            </Box>

            <Stack direction="row" spacing={1.25} useFlexGap sx={{ flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href={resume.file}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                size="large"
                endIcon={<MdOpenInNew />}
              >
                Open PDF
              </Button>
              <Button
                component={Link}
                href={resume.file}
                download={resume.downloadName}
                variant="contained"
                size="large"
                endIcon={<MdDownload />}
              >
                Download
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
          <Box
            component="iframe"
            title={resume.label}
            src={`${resume.file}#toolbar=1&navpanes=0`}
            sx={{
              display: 'block',
              width: '100%',
              height: { xs: '70vh', md: '82vh' },
              border: 0,
              borderRadius: 1,
              backgroundColor: 'background.default',
            }}
          />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Resume;
