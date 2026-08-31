export interface HeadingItem {
  level: number;
  title: string;
  id: string;
}

export interface NavDocRef {
  title: string;
  docSlug: string;
  chapterNumber: string;
}

export interface DocMetadata {
  id: string;
  order: number;
  chapterNumber: string;
  title: string;
  docSlug: string;
  moduleSlug: string;
  moduleId: number;
  moduleTitle: string;
  moduleShortTitle: string;
  moduleColor: string;
  moduleBadgeColor: string;
  moduleAccentColor: string;
  wordCount: number;
  readingTime: string;
  readingTimeMinutes: number;
  summary: string;
  takeaways: string[];
  headings: HeadingItem[];
  prev: NavDocRef | null;
  next: NavDocRef | null;
}

export interface ModuleItem {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  color: string;
  badgeColor: string;
  textColor: string;
  accentColor: string;
  icon: string;
  slug: string;
  folderName: string;
  totalDocs: number;
  totalWords: number;
  docs: DocMetadata[];
}

export interface SearchIndexItem {
  id: string;
  docSlug: string;
  moduleSlug: string;
  chapterNumber: string;
  title: string;
  sectionTitle: string;
  sectionId: string;
  moduleTitle: string;
  moduleColor: string;
  type: 'chapter' | 'heading';
  contentSnippet: string;
  keywords: string;
}

export interface PlaybooksOverview {
  totalModules: number;
  totalChapters: number;
  totalWords: number;
  totalReadingTimeHours: string;
  lastUpdated: string;
  modules: ModuleItem[];
  allDocs: DocMetadata[];
}

export type FontSizePreference = 'normal' | 'large' | 'xlarge';
export type FontFamilyPreference = 'sans' | 'serif' | 'mono';
