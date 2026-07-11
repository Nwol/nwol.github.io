import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Box, Button, Card, CardContent, Link, Stack, TextField, Typography, alpha } from '@mui/material';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdSend } from 'react-icons/md';
import PageHeader from '../components/PageHeader';
import { profile } from '../data/portfolio';

const contactOptions = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: MdEmail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replaceAll(/[^\d+]/g, '')}`, icon: FaPhoneAlt },
  { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedIn, icon: FaLinkedin },
  { label: 'GitHub', value: 'View my profile', href: profile.github, icon: FaGithub },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const updateField = (field: keyof typeof form) => (event: ChangeEvent<HTMLInputElement>) => {
    setForm((currentForm) => ({ ...currentForm, [field]: event.target.value }));
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = form.subject.trim() || 'Portfolio inquiry';
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, '', 'Message:', form.message].join('\n');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Stack spacing={{ xs: 5, md: 7 }}>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about useful software and the teams that build it."
        description="I’m open to software engineering conversations across frontend, backend, cloud, platform, and product-focused work."
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '0.8fr 1.2fr' },
          gap: 2,
          alignItems: 'stretch',
        }}
      >
        <Card component="section">
          <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
            <Stack spacing={3} sx={{ height: '100%' }}>
              <Box>
                <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.15rem' } }}>Contact details</Typography>
                <Stack direction="row" spacing={0.75} sx={{ alignItems: 'center', mt: 1 }}>
                  <MdLocationOn size={20} />
                  <Typography color="text.secondary">{profile.location}</Typography>
                </Stack>
              </Box>

              <Stack divider={<Box sx={{ height: '1px', bgcolor: 'divider' }} />}>
                {contactOptions.map((option) => {
                  const Icon = option.icon;
                  const isExternal = option.href.startsWith('http');

                  return (
                    <Link
                      key={option.label}
                      href={option.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      underline="none"
                      sx={{ py: 2, borderRadius: 1, '&:hover': { color: 'primary.main' } }}
                    >
                      <Stack direction="row" spacing={1.75} sx={{ alignItems: 'center' }}>
                        <Box
                          sx={{
                            display: 'grid',
                            placeItems: 'center',
                            width: 42,
                            height: 42,
                            borderRadius: 2,
                            color: 'primary.main',
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.12),
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={20} />
                        </Box>
                        <Box sx={{ minWidth: 0 }}>
                          <Typography variant="caption" color="text.secondary">{option.label}</Typography>
                          <Typography sx={{ fontWeight: 800, overflowWrap: 'anywhere' }}>{option.value}</Typography>
                        </Box>
                      </Stack>
                    </Link>
                  );
                })}
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card component="section">
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box component="form" onSubmit={sendMessage}>
              <Stack spacing={2.25}>
                <Box>
                  <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.15rem' } }}>Send a message</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    Your email app will open with the completed message addressed to me.
                  </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                  <TextField label="Name" value={form.name} onChange={updateField('name')} required fullWidth />
                  <TextField label="Email" type="email" value={form.email} onChange={updateField('email')} required fullWidth />
                </Box>
                <TextField label="Subject" value={form.subject} onChange={updateField('subject')} required fullWidth />
                <TextField label="Message" value={form.message} onChange={updateField('message')} required multiline minRows={7} fullWidth />
                <Button type="submit" variant="contained" size="large" endIcon={<MdSend />} sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' }, px: 3 }}>
                  Open email draft
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
};

export default Contact;
