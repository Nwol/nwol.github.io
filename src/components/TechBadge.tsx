import { Box, Chip, type ChipProps } from '@mui/material';
import type { IconType } from 'react-icons';
import { FaDatabase, FaJava } from 'react-icons/fa';
import { TbBrowserCheck } from 'react-icons/tb';
import {
  SiAngular,
  SiAnsible,
  SiApachegroovy,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiFlydotio,
  SiGit,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiGooglemaps,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiLinux,
  SiOpenstack,
  SiPercy,
  SiPostgresql,
  SiReact,
  SiSelenium,
  SiSpringboot,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

type TechBadgeProps = {
  name: string;
  size?: ChipProps['size'];
};

const iconMap: Record<string, IconType> = {
  Angular: SiAngular,
  Ansible: SiAnsible,
  Bash: SiGnubash,
  BrowserStack: TbBrowserCheck,
  Docker: SiDocker,
  'Express.js': SiExpress,
  Firebase: SiFirebase,
  Firestore: SiFirebase,
  Flutter: SiFlutter,
  'Fly.io': SiFlydotio,
  Git: SiGit,
  Go: SiGo,
  'Google Cloud': SiGooglecloud,
  'Google Maps API': SiGooglemaps,
  Groovy: SiApachegroovy,
  Java: FaJava,
  JavaScript: SiJavascript,
  Jenkins: SiJenkins,
  Jest: SiJest,
  Linux: SiLinux,
  NoSQL: FaDatabase,
  OpenStack: SiOpenstack,
  Percy: SiPercy,
  PostgreSQL: SiPostgresql,
  React: SiReact,
  Selenium: SiSelenium,
  'Spring Boot': SiSpringboot,
  Svelte: SiSvelte,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
};

const TechBadge = ({ name, size = 'medium' }: TechBadgeProps) => {
  const Icon = iconMap[name] ?? FaDatabase;

  return (
    <Chip
      size={size}
      icon={
        <Box
          component={Icon}
          sx={{
            color: 'primary.main',
            fontSize: size === 'small' ? 16 : 18,
            ml: size === 'small' ? 0.5 : 0.75,
          }}
        />
      }
      label={name}
      sx={{
        '& .MuiChip-icon': {
          color: 'primary.main',
        },
      }}
    />
  );
};

export default TechBadge;
