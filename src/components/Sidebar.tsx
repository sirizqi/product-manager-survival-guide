import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Fuse from 'fuse.js';
import {
  ChevronRight,
  Search,
  CheckCircle2,
  BookOpen,
  X,
  Compass,
  Wrench,
  MessageSquareText,
  Brain,
  Building2,
  Zap,
  AlertTriangle,
  CheckSquare,
  Sparkles,
  User,
  ExternalLink,
  Hash,
} from 'lucide-react';
import { getPlaybooksData } from '../data/playbooks';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { useLanguage } from '../context/AppContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
  MessageSquareText: <MessageSquareText className="w-4 h-4" />,
  Brain: <Brain className="w-4 h-4" />,
  Building2: <Building2 className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  AlertTriangle: <AlertTriangle className="w-4 h-4" />,
  CheckSquare: <CheckSquare className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onOpenSearch }) => {
  const { docSlug } = useParams<{ docSlug: string }>();
  const { isCompleted } = useReadingProgress();
  const { language, t } = useLanguage();

  const [filterText, setFilterText] = useState('');
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({});

  const { modules, searchIndex } = useMemo(
    () => getPlaybooksData(language),
    [language]
  );

  // Initialize Fuse.js with the search configuration for the active language
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

  // Auto-expand module of current doc
  useEffect(() => {
    if (docSlug) {
      const activeModule = modules.find((m) =>
        m.docs.some((d) => d.docSlug === docSlug)
      );
      if (activeModule) {
        setOpenModules((prev) => ({
          ...prev,
          [activeModule.id]: true,
        }));
      }
    } else {
      setOpenModules((prev) => ({ ...prev, 1: true }));
    }
  }, [docSlug, modules]);

  const toggleModule = (id: number) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<number, boolean> = {};
    modules.forEach((m) => (allOpen[m.id] = true));
    setOpenModules(allOpen);
  };

  const collapseAll = () => {
    setOpenModules({});
  };

  // Perform Fuse.js search across all 47 chapters and indexed sections in active language
  const { filteredModules, totalMatches } = useMemo(() => {
    const trimmed = filterText.trim();

    if (!trimmed) {
      return {
        filteredModules: modules.map((mod) => ({
          ...mod,
          matchingDocs: mod.docs.map((doc) => ({ doc, matchedSection: null })),
          hasMatch: true,
        })),
        totalMatches: modules.reduce((acc, m) => acc + m.docs.length, 0),
      };
    }

    const searchResults = fuse.search(trimmed);
    const matchedMap = new Map<string, { docSlug: string; sectionTitle: string | null }>();

    searchResults.forEach((res) => {
      const item = res.item;
      if (!matchedMap.has(item.docSlug)) {
        matchedMap.set(item.docSlug, {
          docSlug: item.docSlug,
          sectionTitle: item.type === 'heading' ? item.sectionTitle : null,
        });
      }
    });

    let count = 0;
    const resultModules = modules.map((mod) => {
      const matchingDocs: Array<{ doc: (typeof mod.docs)[0]; matchedSection: string | null }> = [];

      mod.docs.forEach((d) => {
        const fuseMatch = matchedMap.get(d.docSlug);
        const directMatch =
          d.title.toLowerCase().includes(trimmed.toLowerCase()) ||
          d.chapterNumber.includes(trimmed);

        if (fuseMatch || directMatch) {
          count++;
          matchingDocs.push({
            doc: d,
            matchedSection: fuseMatch?.sectionTitle || null,
          });
        }
      });

      return {
        ...mod,
        matchingDocs,
        hasMatch: matchingDocs.length > 0,
      };
    });

    return { filteredModules: resultModules, totalMatches: count };
  }, [filterText, fuse, modules]);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-16 bottom-0 left-0 z-30 w-80 bg-neo-bg dark:bg-neo-darkBg border-r-3 border-black flex flex-col transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Controls in Sidebar */}
        <div className="p-3 border-b-2 border-black bg-white dark:bg-neo-darkSurface space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-display font-black text-xs uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-neo-pink" /> {t.sidebar.tableOfContents}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline cursor-pointer"
              >
                {t.sidebar.expand}
              </button>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-600">•</span>
              <button
                onClick={collapseAll}
                className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white underline cursor-pointer"
              >
                {t.sidebar.collapse}
              </button>
              <button
                onClick={onClose}
                className="lg:hidden p-1 hover:bg-black/10 dark:hover:bg-white/10 ml-1 text-neutral-800 dark:text-neutral-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Filter Input with Search Shortcut */}
          <div className="relative">
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder={t.sidebar.filterPlaceholder}
              className="w-full pl-8 pr-12 py-1.5 text-xs bg-neo-bg dark:bg-neo-darkBg text-neutral-900 dark:text-neutral-100 border-2 border-black font-medium focus:outline-none focus:bg-white dark:focus:bg-neo-darkSurface placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
            />
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-neutral-500 dark:text-neutral-400" />
            {filterText ? (
              <button
                onClick={() => setFilterText('')}
                className="absolute right-2 top-2 p-0.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
                title={t.sidebar.clear}
              >
                <X className="w-3 h-3" />
              </button>
            ) : (
              <button
                onClick={onOpenSearch}
                className="absolute right-1.5 top-1.5 px-1.5 py-0.5 bg-neo-yellow text-black border border-black font-mono font-bold text-[10px] shadow-neo-sm hover:shadow-none hover:bg-black hover:text-neo-yellow transition-all cursor-pointer"
                title="Spotlight Search (⌘K / Ctrl+K)"
              >
                ⌘K
              </button>
            )}
          </div>

          {filterText && (
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-600 dark:text-neutral-400 pt-0.5 px-0.5">
              <span>{totalMatches} {t.sidebar.matchingChapters}</span>
              <button
                onClick={() => setFilterText('')}
                className="text-neo-pink font-bold hover:underline cursor-pointer"
              >
                {t.sidebar.clear}
              </button>
            </div>
          )}
        </div>

        {/* Chapters Accordion List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {totalMatches === 0 && filterText ? (
            <div className="p-6 text-center bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo my-4">
              <Search className="w-8 h-8 mx-auto text-neutral-400 dark:text-neutral-500 mb-2" />
              <p className="font-display font-bold text-sm text-neutral-900 dark:text-white mb-1">
                {t.sidebar.noChaptersFound}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3">
                {t.sidebar.noResultsMatching} "{filterText}".
              </p>
              <button
                onClick={() => setFilterText('')}
                className="px-3 py-1 bg-neo-yellow text-black border-2 border-black font-bold text-xs shadow-neo-sm hover:shadow-none transition-all cursor-pointer"
              >
                {t.sidebar.clearSearch}
              </button>
            </div>
          ) : (
            filteredModules.map((mod) => {
              const isModuleOpen = openModules[mod.id] || Boolean(filterText);
              const docsToShow = mod.matchingDocs;

              if (filterText && !mod.hasMatch) return null;

              return (
                <div
                  key={mod.id}
                  className="border-2 border-black bg-white dark:bg-neo-darkSurface shadow-neo-sm overflow-hidden"
                >
                  {/* Module Header Button */}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full p-2.5 flex items-center justify-between text-left transition-colors cursor-pointer select-none group hover:bg-neo-yellow/30 dark:hover:bg-neutral-800"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-1">
                      <span className={`p-1 border border-black text-black ${mod.badgeColor} flex-shrink-0`}>
                        {ICON_MAP[mod.icon] || <BookOpen className="w-3.5 h-3.5" />}
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono font-bold text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-neo-yellow uppercase transition-colors">
                          {language === 'id' ? 'MODUL' : 'MODULE'} {mod.id}
                        </div>
                        <div className="font-display font-bold text-xs leading-tight text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-neo-yellow truncate transition-colors">
                          {mod.shortTitle}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 group-hover:bg-black/10 dark:group-hover:bg-neutral-700 group-hover:text-black dark:group-hover:text-neo-yellow rounded-none transition-colors">
                        {filterText ? `${docsToShow.length}/${mod.docs.length}` : mod.docs.length}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform duration-300 ease-out text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-neo-yellow ${
                          isModuleOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Smooth Animated Chapters List (CSS Grid Transition) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isModuleOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t-2 border-black bg-neo-bg/50 dark:bg-neo-darkBg/50 divide-y divide-black/10 dark:divide-white/10">
                        {docsToShow.map(({ doc, matchedSection }) => {
                          const isActive = doc.docSlug === docSlug;
                          const done = isCompleted(doc.docSlug);

                          return (
                            <Link
                              key={doc.id}
                              to={`/docs/${doc.docSlug}`}
                              onClick={onClose}
                              className={`sidebar-chapter-link ${isActive ? 'active' : ''}`}
                            >
                              <div className="flex items-start gap-2">
                                <span className="sidebar-chapter-badge">
                                  {doc.chapterNumber}
                                </span>

                                <span className="flex-1 leading-snug break-words">
                                  {doc.title}
                                </span>

                                {done && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-neo-green fill-neo-green/20 flex-shrink-0 mt-0.5" />
                                )}
                              </div>

                              {matchedSection && (
                                <div className="mt-1 pl-6 flex items-center gap-1 text-[10px] text-neutral-600 dark:text-neutral-400 font-mono truncate">
                                  <Hash className="w-2.5 h-2.5 flex-shrink-0 text-neo-pink" />
                                  <span className="truncate">{language === 'id' ? 'Cocok' : 'Matches'}: {matchedSection}</span>
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Sidebar Footer: Author & Copyright Box */}
        <div className="p-3.5 border-t-3 border-black bg-white dark:bg-neo-darkSurface">
          <a
            href="https://www.linkedin.com/in/rizqis/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-2.5 bg-neo-bg dark:bg-neo-darkBg hover:bg-neo-yellow/30 dark:hover:bg-neutral-800 border-2 border-black dark:border-white/30 hover:border-black dark:hover:border-neo-yellow shadow-neo-sm hover:shadow-neo dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
            title="Connect with Si Rizqi on LinkedIn"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-neo-yellow text-black border-2 border-black flex items-center justify-center flex-shrink-0 shadow-neo-sm transition-transform group-hover:scale-105">
                <User className="w-5 h-5 text-black" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-sm text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-neo-yellow leading-tight truncate transition-colors">
                    Si Rizqi
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 bg-neo-pink text-black border border-black uppercase tracking-wider">
                    {t.sidebar.authorBadge}
                  </span>
                </div>
                <p className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 truncate flex items-center gap-1 transition-colors">
                  <span>{t.sidebar.yourBelovedPm}</span>
                  <ExternalLink className="w-3 h-3 text-neutral-600 dark:text-neo-yellow opacity-0 group-hover:opacity-100 transition-opacity inline" />
                </p>
              </div>
            </div>
          </a>
          <div className="mt-2 text-center text-[10px] font-mono font-bold text-neutral-500 dark:text-neutral-400">
            © 2026
          </div>
        </div>
      </aside>
    </>
  );
};
