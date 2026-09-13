import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Clock,
  FileText,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Lightbulb,
  CornerDownRight,
  Menu,
  Hourglass,
  Flame,
  Heart,
  QrCode,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getDocBySlug, allDocs } from '../data/playbooks';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { TableOfContents } from '../components/TableOfContents';
import { useBookmarks } from '../hooks/useBookmarks';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { useLanguage, useDonation } from '../context/AppContext';
import type { FontSizePreference } from '../types';

interface DocPageProps {
  onToggleSidebar: () => void;
}

export const DocPage: React.FC<DocPageProps> = ({ onToggleSidebar }) => {
  const { docSlug } = useParams<{ docSlug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { openDonationModal } = useDonation();

  const [fontSize, setFontSize] = useState<FontSizePreference>('normal');

  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { isCompleted, toggleCompleted } = useReadingProgress();

  // If no slug is specified, redirect to first chapter
  useEffect(() => {
    if (!docSlug && allDocs.length > 0) {
      navigate(`/docs/${allDocs[0].docSlug}`, { replace: true });
    }
  }, [docSlug, navigate]);

  // Scroll to top when doc changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [docSlug]);

  const currentDoc = docSlug ? getDocBySlug(docSlug, language) : null;

  if (!currentDoc) {
    return (
      <div className="py-24 px-4 text-center max-w-lg mx-auto">
        <div className="p-8 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo">
          <BookOpen className="w-12 h-12 mx-auto text-neo-pink mb-3" />
          <h2 className="font-display font-black text-2xl mb-2 text-neutral-900 dark:text-white">
            {t.docs.chapterNotFound}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">
            {t.docs.chapterNotFoundDesc}
          </p>
          <Link
            to="/docs/1-1-why-product-management-is-not-for-everyone"
            className="neo-btn-primary text-sm py-2 px-4"
          >
            {t.docs.goToFirstChapter}
          </Link>
        </div>
      </div>
    );
  }

  const { meta, content } = currentDoc;
  const bookmarked = isBookmarked(meta.docSlug);
  const completed = isCompleted(meta.docSlug);
  const isComingSoon = !content || content.trim().length < 40;

  const handleToggleComplete = () => {
    if (!completed) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFE600', '#FF5C93', '#38BDF8', '#4ADE80', '#000000'],
      });
    }
    toggleCompleted(meta.docSlug);
  };

  const fontSizeClass =
    fontSize === 'large'
      ? 'text-lg leading-relaxed'
      : fontSize === 'xlarge'
      ? 'text-xl leading-loose'
      : 'text-base leading-relaxed';

  return (
    <div className="flex-1 min-w-0 max-w-full">
      {/* Mobile Top Sub-bar */}
      <div className="lg:hidden flex items-center justify-between p-3 bg-white dark:bg-neo-darkSurface border-b-2 border-black mb-6 sticky top-16 z-20">
        <button
          onClick={onToggleSidebar}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-neo-yellow text-black border-2 border-black text-xs font-bold shadow-neo-sm cursor-pointer"
        >
          <Menu className="w-4 h-4 text-black" />
          <span className="text-black">{t.docs.chaptersMenu}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={openDonationModal}
            className="p-1.5 bg-neo-yellow text-black border border-black text-xs font-bold shadow-neo-sm cursor-pointer"
            title={t.donation.modalTitle}
          >
            <Heart className="w-4 h-4 fill-current" />
          </button>
          <button
            onClick={() => toggleBookmark(meta.docSlug)}
            className={`p-1.5 border border-black cursor-pointer ${
              bookmarked ? 'bg-neo-pink text-black' : 'bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-black' : ''}`} />
          </button>
          {!isComingSoon && (
            <button
              onClick={handleToggleComplete}
              className={`px-2.5 py-1 text-xs font-bold border border-black cursor-pointer ${
                completed ? 'bg-neo-green text-black' : 'bg-neo-yellow text-black'
              }`}
            >
              {completed ? t.docs.readDone : t.docs.markReadShort}
            </button>
          )}
        </div>
      </div>

      <div className="flex items-start justify-between gap-8">
        {/* Main Article Content Container */}
        <article className="flex-1 min-w-0 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-neutral-900 dark:hover:text-white underline">
              {t.docs.home}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link
              to={`/docs/${meta.docSlug}`}
              className="hover:text-neutral-900 dark:hover:text-white"
            >
              {t.docs.module} {meta.moduleId}: {meta.moduleShortTitle}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-neutral-900 dark:text-neutral-100">
              {t.docs.chapter} {meta.chapterNumber}
            </span>
          </nav>

          {/* Article Header Card */}
          <header className="p-6 sm:p-8 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo mb-8">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono font-bold px-2.5 py-1 border-2 border-black ${meta.moduleBadgeColor} text-black shadow-neo-sm`}>
                  {t.docs.chapter} {meta.chapterNumber}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-1 bg-black text-white">
                  {t.docs.module} {meta.moduleId}
                </span>
                {isComingSoon && (
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-neo-pink text-black border border-black shadow-neo-sm animate-pulse">
                    {t.docs.comingSoonTitle.toUpperCase()}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {isComingSoon ? (
                  <span className="flex items-center gap-1 font-mono font-bold text-neo-pink">
                    <Hourglass className="w-3.5 h-3.5" />
                    {t.docs.comingSoonBadge}
                  </span>
                ) : (
                  <>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neo-pink" />
                      {meta.readingTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <FileText className="w-3.5 h-3.5" />
                      {meta.wordCount.toLocaleString()} {t.docs.words}
                    </span>
                  </>
                )}
              </div>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-neutral-900 dark:text-white tracking-tight leading-tight mb-4">
              {meta.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
              {meta.summary}
            </p>

            {/* Key Takeaways Callout */}
            {!isComingSoon && meta.takeaways && meta.takeaways.length > 0 && (
              <div className="mt-6 p-4 bg-neo-yellow/20 dark:bg-neo-yellow/10 border-2 border-black">
                <div className="flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-white mb-2">
                  <Lightbulb className="w-4 h-4 text-neo-yellow fill-neo-yellow" />
                  <span>{t.docs.keyPrinciples}</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
                  {meta.takeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CornerDownRight className="w-3.5 h-3.5 text-neo-pink flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </header>

          {/* Markdown Body OR Coming Soon View */}
          {isComingSoon ? (
            <div className="bg-white dark:bg-neo-darkSurface p-8 sm:p-12 border-3 border-black shadow-neo text-center relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-neo-yellow border-2 border-black rotate-12 opacity-30 pointer-events-none" />

              <div className="max-w-xl mx-auto space-y-6">
                <div className="w-16 h-16 mx-auto bg-neo-yellow border-3 border-black shadow-neo flex items-center justify-center">
                  <Hourglass className="w-8 h-8 text-black animate-spin duration-3000" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neo-pink text-black border-2 border-black shadow-neo-sm font-mono font-bold text-xs uppercase tracking-wider">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>{t.docs.comingSoonBadge}</span>
                  </div>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-900 dark:text-white">
                    {t.docs.comingSoonTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {t.docs.chapter} <strong className="text-neutral-900 dark:text-white">{meta.chapterNumber} — {meta.title}</strong> {t.docs.comingSoonText}{' '}
                    <a
                      href="https://www.linkedin.com/in/rizqis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-neutral-900 dark:text-white underline decoration-2 decoration-neo-yellow hover:bg-neo-yellow hover:!text-black px-1 transition-all cursor-pointer"
                    >
                      Si Rizqi
                    </a>.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-center">
                  <button
                    onClick={() => toggleBookmark(meta.docSlug)}
                    className={`px-5 py-2.5 border-2 border-black font-bold text-xs sm:text-sm shadow-neo transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                      bookmarked
                        ? 'bg-neo-pink !text-black'
                        : 'bg-white dark:bg-neo-darkSurface text-neutral-800 dark:text-neutral-200 hover:bg-neo-yellow hover:!text-black'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-black' : ''}`} />
                    <span>{bookmarked ? t.docs.savedToBookmarks : t.docs.bookmarkThisChapter}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={`markdown-container bg-white dark:bg-neo-darkSurface p-6 sm:p-10 border-3 border-black shadow-neo ${fontSizeClass}`}>
              <MarkdownRenderer content={content} />
            </div>
          )}

          {/* Finish Chapter CTA */}
          {!isComingSoon && (
            <div className="my-8 p-6 bg-neo-yellow text-black border-3 border-black shadow-neo flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-display font-black text-lg sm:text-xl text-black">
                  <Sparkles className="w-5 h-5 text-black fill-black/30" />
                  <span>{t.docs.finishedPlaybookPrompt}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-black/90 mt-1">
                  {t.docs.finishedPlaybookSub}
                </p>
              </div>
              <button
                onClick={handleToggleComplete}
                className={`px-6 py-3 border-2 border-black font-display font-black text-sm transition-all whitespace-nowrap shadow-neo-sm cursor-pointer select-none ${
                  completed
                    ? 'bg-neo-green text-black hover:bg-white hover:text-black'
                    : 'bg-black text-white hover:bg-white hover:text-black hover:shadow-neo dark:hover:bg-white dark:hover:text-black'
                }`}
              >
                {completed ? t.docs.completedBadge : t.docs.markAsRead}
              </button>
            </div>
          )}

          {/* Support Author / Traktir Kopi Card */}
          <div className="my-6 p-5 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-neo-pink border-2 border-black flex items-center justify-center flex-shrink-0 shadow-neo-sm">
                <Heart className="w-6 h-6 text-black fill-black" />
              </div>
              <div>
                <h4 className="font-display font-black text-sm sm:text-base text-neutral-900 dark:text-white">
                  {t.donation.readerBoxTitle}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                  {t.donation.readerBoxDesc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={openDonationModal}
                className="flex-1 sm:flex-initial px-4 py-2 bg-neo-yellow text-black border-2 border-black font-display font-black text-xs shadow-neo-sm hover:shadow-neo hover:bg-black hover:text-neo-yellow dark:hover:border-neo-yellow transition-all cursor-pointer select-none flex items-center justify-center gap-1.5"
              >
                <QrCode className="w-4 h-4" />
                <span>{t.donation.readerBoxButton}</span>
              </button>
              <a
                href="https://kreate.gg/sirizqi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-black bg-white dark:bg-neo-darkSurface text-neutral-800 dark:text-neutral-200 hover:bg-black hover:text-neo-yellow dark:hover:border-neo-yellow transition-all cursor-pointer"
                title={t.donation.profileTitle}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Previous & Next Chapter Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {meta.prev ? (
              <Link
                to={`/docs/${meta.prev.docSlug}`}
                className="p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo-sm hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400 mb-1">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>{t.docs.previousChapter} ({meta.prev.chapterNumber})</span>
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-neutral-900 dark:text-white group-hover:text-neo-blue transition-colors line-clamp-2">
                  {meta.prev.title}
                </div>
              </Link>
            ) : (
              <div className="p-4 bg-neo-muted/20 dark:bg-neo-darkMuted/20 border-2 border-dashed border-black/30 dark:border-white/20 text-xs text-neutral-400 dark:text-neutral-500 flex items-center justify-center font-mono">
                {t.docs.firstChapterNote}
              </div>
            )}

            {meta.next ? (
              <Link
                to={`/docs/${meta.next.docSlug}`}
                className="p-4 bg-white dark:bg-neo-darkSurface border-2 border-black shadow-neo-sm hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between text-right group"
              >
                <div className="flex items-center justify-end gap-1.5 text-xs font-mono font-bold text-neutral-600 dark:text-neutral-400 mb-1">
                  <span>{t.docs.nextChapter} ({meta.next.chapterNumber})</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-neutral-900 dark:text-white group-hover:text-neo-blue transition-colors line-clamp-2">
                  {meta.next.title}
                </div>
              </Link>
            ) : (
              <div className="p-4 bg-neo-muted/20 dark:bg-neo-darkMuted/20 border-2 border-dashed border-black/30 dark:border-white/20 text-xs text-neutral-400 dark:text-neutral-500 flex items-center justify-center font-mono">
                {t.docs.finalChapterNote}
              </div>
            )}
          </div>
        </article>

        {/* Right Sidebar: Table of Contents & Tools */}
        <TableOfContents
          doc={meta}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
      </div>
    </div>
  );
};
