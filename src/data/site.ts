export const SITE = {
  name: 'Yihao Bian',
  nameZh: '卞逸豪',
  concept: 'YIHAO NEXUS',
  canonicalUrl: 'https://yihao.shjingshuiji.cn',
  portraitPath: '/assets/profile/yihao-portrait.webp',
  organization: {
    name: 'Shanghai Jingshuiji Environmental Technology Co., Ltd.',
    nameZh: '上海晶水济环保科技有限公司',
  },
  affiliation: {
    name: 'College of Environmental Science and Engineering, Tongji University',
    nameZh: '同济大学环境科学与工程学院',
  },
} as const;

export const LANGUAGES = ['en', 'zh-CN', 'ar', 'fr', 'ru', 'es', 'ja', 'ko'] as const;
export type Lang = (typeof LANGUAGES)[number];

export const SECTIONS = [
  'about',
  'research',
  'publications',
  'ventures',
  'honors',
  'global',
  'life',
  'contact',
] as const;
export type Section = (typeof SECTIONS)[number];

export const LANGUAGE_NAMES: Record<Lang, string> = {
  en: 'English',
  'zh-CN': '简体中文',
  ar: 'العربية',
  fr: 'Français',
  ru: 'Русский',
  es: 'Español',
  ja: '日本語',
  ko: '한국어',
};

export const RESEARCH_IDS = [
  'drinking-water',
  'biofilms',
  'heavy-metals',
  'disinfection',
  'nanofiltration',
  'microplastics',
] as const;
export type ResearchId = (typeof RESEARCH_IDS)[number];

export const VENTURE_IDS = ['jingshuiji', 'silent-aid', 'ing-products'] as const;
export type VentureId = (typeof VENTURE_IDS)[number];

export const HONORS = [
  { year: 2025, key: 'nationalScholarship' },
  { year: 2024, key: 'beijingGraduate' },
  { year: 2024, key: 'masterThesis' },
  { year: 2025, key: 'academicTalent' },
  { year: 2025, key: 'marineForum' },
  { year: 2025, key: 'tongjiInnovation' },
  { year: 2025, key: 'ecoCompetition' },
  { year: 2025, key: 'innovationSilver' },
] as const;
export type HonorKey = (typeof HONORS)[number]['key'];

export const GLOBAL_IDS = ['regionalExchange', 'gist', 'summerSchool', 'collaboration', 'future'] as const;
export type GlobalId = (typeof GLOBAL_IDS)[number];

export const CONTACT = {
  email: '',
  wechat: '',
  instagram: '',
  linkedin: '',
  github: '',
  orcid: '',
  cvPath: '',
  vcardPath: '/contact/yihao-bian.vcf',
} as const;
