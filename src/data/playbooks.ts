// Auto-generated Bilingual Playbooks dataset
import bilingualData from './bilingual-playbooks.json';
import type { Language } from './translations';

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

// Raw datasets
const rawBilingual = (bilingualData as unknown) as {
  totalModules: number;
  totalChapters: number;
  totalWords: number;
  totalReadingTimeHours: string;
  lastUpdated: string;
  en: {
    modules: ModuleItem[];
    allDocs: DocMetadata[];
    content: Record<string, string>;
    searchIndex: SearchIndexItem[];
  };
  id: {
    modules: ModuleItem[];
    allDocs: DocMetadata[];
    content: Record<string, string>;
    searchIndex: SearchIndexItem[];
  };
};

export const playbooks = {
  totalModules: rawBilingual.totalModules,
  totalChapters: rawBilingual.totalChapters,
  totalWords: rawBilingual.totalWords,
  totalReadingTimeHours: rawBilingual.totalReadingTimeHours,
  lastUpdated: rawBilingual.lastUpdated,
  modules: rawBilingual.en.modules,
  allDocs: rawBilingual.en.allDocs,
};

export const allDocs = rawBilingual.en.allDocs;
export const modules = rawBilingual.en.modules;
export const contentBySlug = rawBilingual.en.content;
export const searchIndex = rawBilingual.en.searchIndex;

export function getPlaybooksData(lang: Language = 'en') {
  const langKey = lang === 'id' ? 'id' : 'en';
  const data = rawBilingual[langKey] || rawBilingual.en;
  return {
    totalModules: rawBilingual.totalModules,
    totalChapters: rawBilingual.totalChapters,
    totalWords: rawBilingual.totalWords,
    totalReadingTimeHours: rawBilingual.totalReadingTimeHours,
    lastUpdated: rawBilingual.lastUpdated,
    modules: data.modules,
    allDocs: data.allDocs,
    content: data.content,
    searchIndex: data.searchIndex,
  };
}

export function getDocBySlug(
  slug: string,
  lang: Language = 'en'
): { meta: DocMetadata; content: string } | null {
  if (!slug) return null;
  const langKey = lang === 'id' ? 'id' : 'en';
  const dataset = rawBilingual[langKey] || rawBilingual.en;

  const cleanSlug = slug.toLowerCase().trim();
  const normalizedSlug = cleanSlug.replace(/(\d+)\.(\d+)/g, '$1-$2');
  const numberMatch = cleanSlug.match(/^(\d+)[-.](\d+)/);
  const numberOnly = numberMatch ? `${numberMatch[1]}.${numberMatch[2]}` : '';

  // 1. Direct match in target language
  let meta = dataset.allDocs.find((d) => {
    return (
      d.docSlug === cleanSlug ||
      d.docSlug === normalizedSlug ||
      d.docSlug.replace(/-/g, '') === cleanSlug.replace(/-/g, '') ||
      d.chapterNumber === cleanSlug ||
      d.chapterNumber.replace(/\./g, '-') === cleanSlug ||
      (numberOnly && d.chapterNumber === numberOnly) ||
      d.id === cleanSlug
    );
  });

  // 2. Fallback match across all languages
  if (!meta) {
    const fallbackMeta =
      rawBilingual.en.allDocs.find(
        (d) =>
          d.docSlug === cleanSlug ||
          d.docSlug === normalizedSlug ||
          d.chapterNumber === cleanSlug ||
          (numberOnly && d.chapterNumber === numberOnly)
      ) ||
      rawBilingual.id.allDocs.find(
        (d) =>
          d.docSlug === cleanSlug ||
          d.docSlug === normalizedSlug ||
          d.chapterNumber === cleanSlug ||
          (numberOnly && d.chapterNumber === numberOnly)
      );

    if (fallbackMeta) {
      meta =
        dataset.allDocs.find((d) => d.chapterNumber === fallbackMeta.chapterNumber) ||
        fallbackMeta;
    }
  }

  if (!meta) return null;
  const content = dataset.content[meta.docSlug] || rawBilingual.en.content[meta.docSlug] || '';
  return { meta, content };
}

export function getModuleBySlug(slug: string, lang: Language = 'en'): ModuleItem | null {
  const langKey = lang === 'id' ? 'id' : 'en';
  const data = rawBilingual[langKey] || rawBilingual.en;
  return (
    data.modules.find((m) => m.slug === slug || String(m.id) === slug) || null
  );
}
