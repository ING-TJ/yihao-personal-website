import { RESEARCH_IDS } from './site';

export const researchAreas = RESEARCH_IDS.map((id, index) => ({
  id,
  image: '',
  relatedPublications: [] as string[],
  order: index + 1,
}));
