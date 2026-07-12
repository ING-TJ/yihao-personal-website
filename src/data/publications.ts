export type PublicationStatus = 'published' | 'under-review' | 'in-preparation';

export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  url: string;
  status: PublicationStatus;
  featured: boolean;
  language: string;
}

// Intentionally empty until a verified publication list is supplied.
export const publications: Publication[] = [];
