import { type ChangeEvent, type FormEvent, useState } from 'react';
import { Box, Button, Card, CardContent, Link, Stack, TextField, Typography } from '@mui/material';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdSend } from 'react-icons/md';
import { profile } from '../data/portfolio';

const contactOptions = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MdEmail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replaceAll(/[^\d+]/g, '')}`,
    icon: FaPhoneAlt,
  },
  {
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedIn,
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    value: 'View my projects',
    href: profile.github,
    icon: FaGithub,
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const updateField = (field: keyof typeof form) => (event: ChangeEvent<HTMLInputElement>) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: event.target.value,
    }));
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = form.subject.trim() || 'Portfolio inquiry';
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      'Message:',
      form.message,
    ].join('\n');

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Stack spacing={{ xs: 3, md: 5 }}>
      <Box>
        <Typography variant="overline" color="secondary" sx={{ fontWeight: 800 }}>
          Contact
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 48 } }}>
          Let&apos;s build something polished and useful.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.88fr 1.12fr' },
          gap: { xs: 2.5, md: 3 },
          alignItems: 'start',
        }}
      >
        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 850 }}>
                  Contact details
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  I&apos;m based in {profile.location} and open to software engineering conversations
                  across frontend, backend, cloud, and product-focused work.
                </Typography>
              </Box>

              <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
                <Box component={MdLocationOn} sx={{ color: 'primary.main', fontSize: 24 }} />
                <Typography color="text.secondary">{profile.location}</Typography>
              </Stack>

              <Stack spacing={1.5}>
                {contactOptions.map((option) => {
                  const Icon = option.icon;
                  const isExternal = option.href.startsWith('http');

                  return (
                    <Box
                      key={option.label}
                      sx={{
                        p: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        backgroundColor: 'background.paper',
                      }}
                    >
                      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                        <Box
                          sx={{
                            display: 'grid',
                            placeItems: 'center',
                            width: 44,
                            height: 44,
                            borderRadius: 2,
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            flexShrink: 0,
                          }}
                        >
                          <Box component={Icon} sx={{ fontSize: 22 }} />
                        </Box>
                        <Box sx={{ minWidth: 0 }}>
                          <Typography variant="subtitle2" color="text.secondary">
                            {option.label}
                          </Typography>
                          <Link
                            href={option.href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noreferrer' : undefined}
                            underline="hover"
                            sx={{ fontWeight: 900, overflowWrap: 'anywhere' }}
                          >
                            {option.value}
                          </Link>
                        </Box>
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ height: '100%' }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box component="form" onSubmit={sendMessage}>
              <Stack spacing={2.25}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 850 }}>
                    Send a message
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    Fill this out and your email app will open with the message addressed to me.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 2,
                  }}
                >
                  <TextField
                    label="Name"
                    value={form.name}
                    onChange={updateField('name')}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={updateField('email')}
                    required
                    fullWidth
                  />
                </Box>

                <TextField
                  label="Subject"
                  value={form.subject}
                  onChange={updateField('subject')}
                  required
                  fullWidth
                />
                <TextField
                  label="Message"
                  value={form.message}
                  onChange={updateField('message')}
                  required
                  multiline
                  minRows={7}
                  fullWidth
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<MdSend />}
                  sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' }, px: 3 }}
                >
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
