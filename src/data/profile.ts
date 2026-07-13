import { SITE } from './site';

export const profile = {
  names: { en: SITE.name, zh: SITE.nameZh },
  affiliation: SITE.affiliation,
  company: SITE.organization,
  portrait: SITE.portraitPath,
  portraitObjectPosition: '50% 24%',
  confirmedRoles: ['doctoral-candidate', 'researcher', 'founder'] as const,
} as const;
