import config from './contact.config.json';
import type { Lang } from './site';

const clean = (value: string) => value.trim();

export const contact = {
  academicEmail: clean(config.academicEmail),
  companyEmail: clean(config.companyEmail),
  phone: clean(config.phone),
  wechat: clean(config.wechat),
  instagram: clean(config.instagram),
  linkedin: clean(config.linkedin),
  github: clean(config.github),
  orcid: clean(config.orcid),
  researchGate: clean(config.researchGate),
  cvEnglish: clean(config.cvEnglish),
  cvChinese: clean(config.cvChinese),
  institution: clean(config.institution),
  location: clean(config.location),
  vcardPath: '/contact/yihao-bian.vcf',
} as const;

export const primaryContactEmail = contact.academicEmail || contact.companyEmail;

export const contactSameAs = [
  contact.instagram,
  contact.linkedin,
  contact.github,
  contact.orcid,
  contact.researchGate,
].filter((value) => /^https?:\/\//i.test(value));

export const cvForLanguage = (lang: Lang) => lang === 'zh-CN' ? contact.cvChinese : contact.cvEnglish;
