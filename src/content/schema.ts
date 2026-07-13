import type { GlobalId, HonorKey, ResearchId, Section, VentureId } from '@/data/site';

export interface LocaleContent {
  code: string;
  dir: 'ltr' | 'rtl';
  meta: { title: string; description: string };
  nav: Record<Section, string>;
  home: {
    subtitle: string;
    role: string;
    quickContact: string;
    downloadCv: string;
  };
  homeV2?: {
    eyebrow: string;
    roles: string[];
    statement: string;
    introLabel: string;
    introTitle: string;
    introBody: string;
    selectedResearch: string;
    selectedVentures: string;
    selectedPublications: string;
    selectedHonors: string;
    globalLabel: string;
    globalTitle: string;
    globalBody: string;
    contactLabel: string;
    contactTitle: string;
    contactBody: string;
    viewAll: string;
    roleLabel: string;
  };
  common: {
    home: string;
    back: string;
    menu: string;
    language: string;
    viewDetails: string;
    verifiedFactsOnly: string;
    close: string;
  };
  sectionMeta: Record<Section, { kicker: string; title: string; summary: string }>;
  about: Array<{ title: string; body: string }>;
  research: Record<ResearchId, { title: string; question: string; description: string }>;
  publications: { emptyTitle: string; emptyBody: string; filters: string[] };
  ventures: Record<VentureId, { title: string; descriptor: string }>;
  ventureFields: Record<'problem' | 'solution' | 'role' | 'progress' | 'impact' | 'gallery' | 'link', string>;
  honors: Record<HonorKey, string>;
  global: Record<GlobalId, { title: string; body: string }>;
  life: { title: string; body: string };
  contact: {
    copy: string;
    copied: string;
    save: string;
    fields: Record<'academicEmail' | 'companyEmail' | 'phone' | 'wechat' | 'instagram' | 'linkedin' | 'github' | 'orcid' | 'researchGate' | 'cvEnglish' | 'cvChinese' | 'institution' | 'location', string>;
  };
}

export const defineLocale = (locale: LocaleContent) => locale;
