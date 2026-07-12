import type { LocaleContent } from '../schema';
import type { Lang } from '@/data/site';
import ar from './ar';
import en from './en';
import es from './es';
import fr from './fr';
import ja from './ja';
import ko from './ko';
import ru from './ru';
import zhCN from './zh-CN';

export const locales: Record<Lang, LocaleContent> = {
  en, 'zh-CN': zhCN, ar, fr, ru, es, ja, ko,
};

export const getLocale = (lang: Lang): LocaleContent => locales[lang] ?? locales.en;
