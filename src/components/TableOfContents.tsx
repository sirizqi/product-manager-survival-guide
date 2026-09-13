import React, { useState } from 'react';
import {
  Clock,
  FileText,
  Bookmark,
  CheckCircle2,
  Share2,
  Check,
  Type,
  ListOrdered,
  ArrowUp,
  Sparkles,
  Heart,
  QrCode,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { DocMetadata, FontSizePreference } from '../types';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useBookmarks } from '../hooks/useBookmarks';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { useLanguage, useDonation } from '../context/AppContext';

interface TableOfContentsProps {
  doc: DocMetadata;
  fontSize: FontSizePreference;
  setFontSize: (size: FontSizePreference) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  doc,
  fontSize,
  setFontSize,
}) => {
  const headingIds = doc.headings.map((h) => h.id);
  const activeId = useScrollSpy(headingIds, 120);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { isCompleted, toggleCompleted, completedDocs } = useReadingProgress();
  const { language, t } = useLanguage();
  const { openDonationModal } = useDonation();

  const [copied, setCopied] = useState(false);

  const bookmarked = isBookmarked(doc.docSlug);
  const completed = isCompleted(doc.docSlug);
  const progressPercent = Math.round((completedDocs.length / 47) * 100);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleToggleComplete = () => {
    if (!completed) {
      // trigger celebratory confetti!
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFE600', '#FF5C93', '#38BDF8', '#4ADE80', '#000000'],
      });
    }
    toggleCompleted(doc.docSlug);
  };

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden xl:block w-72 flex-shrink-0 sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto pl-6 space-y-4">
      {/* 1. Standalone Reading Progress Card (Top of Right Menu) */}
      <div className="p-3.5 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white">
          <span className="flex items-center gap-1.5 font-display font-black tracking-tight">
            <CheckCircle2 className="w-4 h-4 text-neo-green" />
            <span>{language === 'id' ? 'Progress Bacaan' : 'Reading Progress'}</span>
          </span>
          <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-neo-yellow text-black border border-black shadow-neo-sm">
            {completedDocs.length}/47
          </span>
        </div>
        <div className="w-full h-2.5 bg-black/10 dark:bg-white/20 border-2 border-black overflow-hidden">
          <div
            className="h-full bg-neo-green transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
          <span>{progressPercent}% {language === 'id' ? 'selesai' : 'completed'}</span>
          <span>{47 - completedDocs.length} {language === 'id' ? 'bab tersisa' : 'remaining'}</span>
        </div>
      </div>

      {/* 2. Support Author Mini Card */}
      <div className="p-3 bg-neo-yellow/20 dark:bg-neutral-800/80 border-2 border-black space-y-2 shadow-neo-sm">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-black dark:text-neo-yellow fill-current flex-shrink-0" />
          <span className="font-display font-black text-xs text-neutral-900 dark:text-white leading-tight">
            {t.donation.readerBoxTitle}
          </span>
        </div>
        <button
          onClick={openDonationModal}
          className="w-full py-1.5 px-2.5 bg-neo-yellow text-black border border-black font-display font-black text-xs shadow-neo-sm hover:bg-black hover:text-neo-yellow dark:hover:border-neo-yellow transition-all cursor-pointer select-none flex items-center justify-center gap-1.5"
        >
          <QrCode className="w-3.5 h-3.5" />
          <span>{t.donation.readerBoxButton}</span>
        </button>
      </div>

      {/* 3. Chapter Actions Controls Box */}
      <div className="p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo space-y-3">
        <div className="flex items-center justify-between text-xs font-bold pb-2 border-b-2 border-black dark:border-white/20">
          <span className="flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200">
            <Clock className="w-3.5 h-3.5 text-neo-pink" />
            {doc.readingTime}
          </span>
          <span className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 font-mono">
            <FileText className="w-3.5 h-3.5" />
            {doc.wordCount.toLocaleString()} {t.docs.words}
          </span>
        </div>

        {/* Action Buttons (High-Contrast Light & Dark Hover) */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => toggleBookmark(doc.docSlug)}
            className={`p-2 text-xs font-bold border-2 border-black flex items-center justify-center gap-1.5 transition-all cursor-pointer select-none ${
              bookmarked
                ? 'bg-neo-pink text-black shadow-neo-sm font-black'
                : 'bg-white text-neutral-900 hover:bg-neo-pink hover:text-black hover:border-black hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 dark:bg-neo-darkSurface dark:text-neutral-200 dark:border-white/30 dark:hover:bg-black dark:hover:text-neo-pink dark:hover:border-neo-pink dark:hover:shadow-[2px_2px_0px_0px_#FF5C93]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-black' : ''}`} />
            <span>{bookmarked ? t.docs.saved : t.docs.bookmark}</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2 text-xs font-bold border-2 border-black bg-white text-neutral-900 hover:bg-neo-cyan hover:text-black hover:border-black hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 dark:bg-neo-darkSurface dark:text-neutral-200 dark:border-white/30 dark:hover:bg-black dark:hover:text-neo-cyan dark:hover:border-neo-cyan dark:hover:shadow-[2px_2px_0px_0px_#38BDF8] flex items-center justify-center gap-1.5 transition-all cursor-pointer select-none"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-neo-green" />
                <span className="text-neo-green font-bold">{t.docs.copied}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{t.docs.shareLink}</span>
              </>
            )}
          </button>
        </div>

        {/* Complete Toggle */}
        <button
          onClick={handleToggleComplete}
          className={`w-full py-2.5 px-3 text-xs font-bold border-2 border-black flex items-center justify-center gap-2 transition-all cursor-pointer select-none ${
            completed
              ? 'bg-neo-green text-black shadow-neo-sm font-black'
              : 'bg-neo-yellow text-black shadow-neo hover:bg-black hover:text-neo-yellow hover:border-black dark:hover:border-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5'
          }`}
        >
          {completed ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-black fill-black/20" />
              <span className="text-black">{t.docs.completedBadge}</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-current" />
              <span>{t.docs.markAsRead}</span>
            </>
          )}
        </button>

        {/* Text Size Control */}
        <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-bold text-neutral-700 dark:text-neutral-300 flex items-center gap-1">
            <Type className="w-3 h-3" /> {t.docs.textSize}
          </span>
          <div className="flex items-center gap-1">
            {(['normal', 'large', 'xlarge'] as FontSizePreference[]).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-2 py-0.5 text-xs font-mono font-bold border border-black cursor-pointer transition-all ${
                  fontSize === size
                    ? 'bg-neo-yellow text-black shadow-neo-sm font-black'
                    : 'bg-white text-neutral-900 hover:bg-neo-yellow hover:text-black hover:border-black dark:bg-neo-darkSurface dark:text-neutral-200 dark:border-white/30 dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow'
                }`}
              >
                {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. On This Page / Headings ScrollSpy */}
      <div className="p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo space-y-3">
        <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-1.5 pb-1 border-b-2 border-black dark:border-white/20">
          <ListOrdered className="w-3.5 h-3.5 text-neo-yellow" /> {t.docs.onThisPage}
        </h4>

        {doc.headings.length === 0 ? (
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.docs.noSubheadings}</p>
        ) : (
          <nav className="space-y-1.5 text-xs">
            {doc.headings.map((heading) => {
              const isActive = activeId === heading.id;
              const isH3 = heading.level === 3;
              const isH4 = heading.level === 4;

              return (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`block w-full text-left py-1.5 px-2.5 rounded-none transition-all duration-150 cursor-pointer truncate select-none ${
                    isH4 ? 'pl-5 text-[11px]' : isH3 ? 'pl-3.5 text-[11px]' : 'font-medium'
                  } ${
                    isActive
                      ? 'bg-neo-yellow text-black font-black border-l-4 border-black shadow-neo-sm translate-x-1'
                      : 'text-neutral-700 border-l-2 border-transparent hover:border-black hover:bg-neo-yellow/30 hover:text-black hover:translate-x-1 hover:font-bold dark:text-neutral-300 dark:hover:border-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow'
                  }`}
                  title={heading.title}
                >
                  {heading.title}
                </button>
              );
            })}
          </nav>
        )}

        <div className="pt-2 border-t border-black/10 dark:border-white/10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full text-center text-[11px] font-bold text-neutral-700 hover:bg-neo-yellow/30 hover:text-black hover:border-black dark:text-neutral-400 dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow flex items-center justify-center gap-1 py-1.5 transition-colors cursor-pointer border border-transparent"
          >
            <ArrowUp className="w-3 h-3" /> {t.docs.backToTop}
          </button>
        </div>
      </div>
    </aside>
  );
};
