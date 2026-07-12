import { VENTURE_IDS } from './site';

export const ventures = VENTURE_IDS.map((id) => ({
  id,
  problem: '',
  solution: '',
  role: '',
  progress: '',
  impact: '',
  gallery: [] as string[],
  externalUrl: '',
}));
