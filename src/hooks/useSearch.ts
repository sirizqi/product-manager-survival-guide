import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { getPlaybooksData } from '../data/playbooks';
import type { SearchIndexItem } from '../data/playbooks';
import { useLanguage } from '../context/AppContext';

export interface SearchFilter {
  moduleSlug?: string;
  type?: 'all' | 'chapter' | 'heading';
}

export function useSearch() {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'chapter' | 'heading'>('all');

  const { searchIndex } = useMemo(() => getPlaybooksData(language), [language]);

  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [
        { name: 'title', weight: 0.35 },
        { name: 'sectionTitle', weight: 0.3 },
        { name: 'chapterNumber', weight: 0.2 },
        { name: 'keywords', weight: 0.15 },
        { name: 'contentSnippet', weight: 0.1 },
        { name: 'moduleTitle', weight: 0.05 },
      ],
      threshold: 0.38,
      ignoreLocation: true,
      includeScore: true,
    });
  }, [searchIndex]);

  const results: SearchIndexItem[] = useMemo(() => {
    let baseItems: SearchIndexItem[] = [];

    if (!query.trim()) {
      if (selectedModule === 'all') {
        const chapters = searchIndex.filter((item) => item.type === 'chapter');
        const headings = searchIndex.filter((item) => item.type === 'heading');
        baseItems = [...chapters, ...headings];
      } else {
        const moduleItems = searchIndex.filter(
          (item) => item.moduleSlug === selectedModule
        );
        const chapters = moduleItems.filter((item) => item.type === 'chapter');
        const headings = moduleItems.filter((item) => item.type === 'heading');
        baseItems = [...chapters, ...headings];
      }
    } else {
      const searchResults = fuse.search(query.trim());
      let matchedItems = searchResults.map((r) => r.item);

      if (selectedModule !== 'all') {
        matchedItems = matchedItems.filter(
          (item) => item.moduleSlug === selectedModule
        );
      }
      baseItems = matchedItems;
    }

    if (selectedType !== 'all') {
      baseItems = baseItems.filter((item) => item.type === selectedType);
    }

    return baseItems.slice(0, 30);
  }, [query, selectedModule, selectedType, fuse, searchIndex]);

  return {
    query,
    setQuery,
    selectedModule,
    setSelectedModule,
    selectedType,
    setSelectedType,
    results,
    totalResults: results.length,
    language,
  };
}
