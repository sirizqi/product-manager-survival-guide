import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, X, ArrowRight, BookOpen, Trash2 } from 'lucide-react';
import { getPlaybooksData } from '../data/playbooks';
import { useBookmarks } from '../hooks/useBookmarks';
import { useLanguage } from '../context/AppContext';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({ isOpen, onClose }) => {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const { language, t } = useLanguage();

  const { allDocs } = useMemo(() => getPlaybooksData(language), [language]);

  if (!isOpen) return null;

  const bookmarkedDocs = allDocs.filter((doc) => bookmarks.includes(doc.docSlug));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-md bg-neo-bg dark:bg-neo-darkBg h-full border-l-4 border-black shadow-neo-xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-5 border-b-3 border-black bg-neo-yellow text-black flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-black text-neo-yellow border-2 border-black">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-xl leading-none text-black">
                {t.bookmarks.title}
              </h2>
              <p className="text-xs font-semibold text-black/80 mt-0.5">
                {bookmarkedDocs.length} {t.bookmarks.savedCount}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white border-2 border-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-black cursor-pointer"
            aria-label="Close bookmarks"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bookmarkedDocs.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo my-6">
              <BookOpen className="w-12 h-12 mx-auto text-neutral-400 dark:text-neutral-500 mb-3" />
              <h3 className="font-display font-bold text-lg mb-1 text-neutral-900 dark:text-white">
                {t.bookmarks.noBookmarksYet}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t.bookmarks.noBookmarksSub}
              </p>
            </div>
          ) : (
            bookmarkedDocs.map((doc) => (
              <div
                key={doc.id}
                className="group relative p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-md transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="inline-block text-xs font-bold px-2 py-0.5 bg-neo-yellow text-black border border-black">
                    Ch {doc.chapterNumber}
                  </span>
                  <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    {doc.readingTime}
                  </span>
                </div>

                <Link
                  to={`/docs/${doc.docSlug}`}
                  onClick={onClose}
                  className="block font-display font-bold text-base leading-snug hover:text-neo-blue transition-colors mb-2 text-neutral-900 dark:text-white"
                >
                  {doc.title}
                </Link>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 mb-3">
                  {doc.summary}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-black/10 dark:border-white/10">
                  <Link
                    to={`/docs/${doc.docSlug}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 text-xs font-bold text-neutral-900 dark:text-white hover:underline"
                  >
                    {t.bookmarks.readChapter} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => toggleBookmark(doc.docSlug)}
                    className="p-1.5 text-neutral-500 hover:text-neo-red dark:hover:text-neo-red transition-colors cursor-pointer"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {bookmarkedDocs.length > 0 && (
          <div className="p-4 border-t-3 border-black bg-white dark:bg-neo-darkSurface flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              {t.bookmarks.storedLocally}
            </span>
            <button
              onClick={() => {
                bookmarkedDocs.forEach((d) => toggleBookmark(d.docSlug));
              }}
              className="text-xs font-bold text-neo-red hover:underline cursor-pointer"
            >
              {t.bookmarks.clearAll}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
