import config from './contact.config.json';

export const contact = {
  email: config.email,
  wechat: config.wechat,
  instagram: config.instagram,
  linkedin: config.linkedin,
  github: config.github,
  orcid: config.orcid,
  cvPath: config.cvPath,
  vcardPath: '/contact/yihao-bian.vcf',
} as const;
