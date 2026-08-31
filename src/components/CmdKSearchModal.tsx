import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Hash, BookOpen, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { getPlaybooksData } from '../data/playbooks';
import { useLanguage } from '../context/AppContext';

interface CmdKSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CmdKSearchModal: React.FC<CmdKSearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { language, t } = useLanguage();
  const {
    query,
    setQuery,
    selectedModule,
    setSelectedModule,
    setSelectedType,
    results,
  } = useSearch();

  const { modules } = useMemo(() => getPlaybooksData(language), [language]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setSelectedModule('all');
      setSelectedType('all');
    }
  }, [isOpen, setQuery, setSelectedModule, setSelectedType]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results, selectedModule]);

  const handleSelect = (item: (typeof results)[0]) => {
    onClose();
    if (item.sectionId) {
      navigate(`/docs/${item.docSlug}#${item.sectionId}`);
    } else {
      navigate(`/docs/${item.docSlug}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 p-4 bg-black/60 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className="relative w-full max-w-2xl bg-neo-bg dark:bg-neo-darkBg border-3 border-black shadow-neo-xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Top Search Bar */}
        <div className="flex items-center gap-3 p-4 border-b-3 border-black bg-white dark:bg-neo-darkSurface">
          <Search className="w-6 h-6 text-neutral-800 dark:text-neutral-200 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search.searchPlaceholder}
            className="w-full bg-transparent font-display font-bold text-lg md:text-xl text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-black/10 dark:hover:bg-white/10 border border-black dark:border-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono font-bold bg-neo-muted dark:bg-neo-darkMuted border border-black text-neutral-900 dark:text-white cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Filter Pills */}
        <div className="p-3 bg-neo-bg dark:bg-neo-darkBg border-b-2 border-black flex items-center gap-2 overflow-x-auto text-xs font-bold no-scrollbar">
          <span className="text-neutral-600 dark:text-neutral-400 uppercase tracking-wider text-[10px] pl-1 flex-shrink-0">
            {t.search.filterLabel}
          </span>
          <button
            onClick={() => setSelectedModule('all')}
            className={`px-2.5 py-1 border border-black shadow-neo-sm transition-all whitespace-nowrap cursor-pointer ${
              selectedModule === 'all'
                ? 'bg-neo-yellow !text-black font-extrabold shadow-none translate-x-0.5 translate-y-0.5'
                : 'bg-white dark:bg-neo-darkSurface text-neutral-800 dark:text-neutral-200 hover:bg-neo-yellow/30 hover:text-black'
            }`}
          >
            {t.search.allModules}
          </button>
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod.slug)}
              className={`px-2.5 py-1 border border-black shadow-neo-sm transition-all whitespace-nowrap cursor-pointer ${
                selectedModule === mod.slug
                  ? 'bg-neo-yellow !text-black font-extrabold shadow-none translate-x-0.5 translate-y-0.5'
                  : 'bg-white dark:bg-neo-darkSurface text-neutral-800 dark:text-neutral-200 hover:bg-neo-yellow/30 hover:text-black'
              }`}
            >
              M{mod.id}: {mod.shortTitle}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-neutral-600 dark:text-neutral-400">
              <p className="font-display font-bold text-lg mb-1 text-neutral-900 dark:text-white">
                {t.search.noPlaybooksFound}
              </p>
              <p className="text-sm">{t.search.noPlaybooksSuggestion}</p>
            </div>
          ) : (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`cursor-pointer p-3 border-2 border-black transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-neo-yellow !text-black shadow-neo -translate-x-0.5 -translate-y-0.5'
                      : 'bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white shadow-neo-sm hover:border-black'
                  }`}
                >
                  <div
                    className={`p-2 border-2 border-black flex-shrink-0 mt-0.5 ${
                      isSelected ? 'bg-black text-neo-yellow' : 'bg-neo-yellow text-black'
                    }`}
                  >
                    {item.type === 'chapter' ? (
                      <BookOpen className="w-4 h-4" />
                    ) : (
                      <Hash className="w-4 h-4" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-black text-white">
                        {item.chapterNumber}
                      </span>
                      <span className={`text-[11px] font-bold uppercase ${
                        isSelected ? 'text-black/80' : 'text-neutral-600 dark:text-neutral-400'
                      }`}>
                        {item.moduleTitle}
                      </span>
                      {item.type === 'heading' && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 bg-neo-cyan text-black border border-black">
                          {t.search.sectionTag}
                        </span>
                      )}
                    </div>

                    <h4 className={`font-display font-bold text-base leading-tight mb-1 truncate ${
                      isSelected ? 'text-black font-extrabold' : 'text-neutral-900 dark:text-white'
                    }`}>
                      {item.type === 'heading' ? item.sectionTitle : item.title}
                    </h4>

                    <p className={`text-xs line-clamp-1 ${
                      isSelected ? 'text-black/85 font-medium' : 'text-neutral-600 dark:text-neutral-400'
                    }`}>
                      {item.contentSnippet}
                    </p>
                  </div>

                  <div className={`hidden sm:flex items-center self-center text-xs font-bold gap-1 ${
                    isSelected ? 'text-black font-extrabold' : 'text-neutral-500 dark:text-neutral-400'
                  }`}>
                    <span>{t.search.jump}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 border-t-3 border-black bg-white dark:bg-neo-darkSurface text-xs font-mono flex items-center justify-between text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-neo-muted dark:bg-neo-darkMuted border border-black text-neutral-900 dark:text-white font-bold text-[10px]">
                ↑↓
              </kbd>{' '}
              {t.search.navigateTip}
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-neo-muted dark:bg-neo-darkMuted border border-black text-neutral-900 dark:text-white font-bold text-[10px]">
                <CornerDownLeft className="w-2.5 h-2.5 inline" />
              </kbd>{' '}
              {t.search.selectTip}
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-neo-muted dark:bg-neo-darkMuted border border-black text-neutral-900 dark:text-white font-bold text-[10px]">
                ESC
              </kbd>{' '}
              {t.search.closeTip}
            </span>
          </div>
          <div className="flex items-center gap-1 font-bold text-neutral-900 dark:text-white">
            <Sparkles className="w-3.5 h-3.5 text-neo-pink fill-neo-pink" />
            <span>{t.search.indexedCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
