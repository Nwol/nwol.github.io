import type { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

const PageHeader = ({ eyebrow, title, description, actions }: PageHeaderProps) => (
  <Stack
    direction={{ xs: 'column', md: 'row' }}
    spacing={3}
    sx={{ alignItems: { md: 'flex-end' }, justifyContent: 'space-between' }}
  >
    <Box sx={{ maxWidth: 940 }}>
      <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
        {eyebrow}
      </Typography>
      <Typography component="h1" variant="h2" sx={{ fontSize: { xs: '2.25rem', md: '3.25rem' }, lineHeight: 1.08 }}>
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 840, fontSize: { md: '1.08rem' }, lineHeight: 1.7 }}>
          {description}
        </Typography>
      )}
    </Box>
    {actions && <Box sx={{ flexShrink: 0 }}>{actions}</Box>}
  </Stack>
);

export default PageHeader;
