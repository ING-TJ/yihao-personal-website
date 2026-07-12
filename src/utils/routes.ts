import type { Lang, Section } from '@/data/site';

export const trimBase = (base: string) => base === '/' ? '' : `/${base.replace(/^\/+|\/+$/g, '')}`;

export const routeFor = (lang: Lang, section?: Section, base = import.meta.env.BASE_URL) => {
  const prefix = trimBase(base);
  return `${prefix}/${lang}/${section ? `${section}/` : ''}`;
};

export const assetFor = (path: string, base = import.meta.env.BASE_URL) => {
  const prefix = trimBase(base);
  return `${prefix}/${path.replace(/^\//, '')}`;
};
