import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, BookOpen, Flame, Sparkles } from 'lucide-react';
import { getPlaybooksData } from '../data/playbooks';
import { useLanguage } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const { modules, totalChapters, totalModules, totalReadingTimeHours } = useMemo(
    () => getPlaybooksData(language),
    [language]
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-3 border-black bg-white dark:bg-neo-darkSurface mt-20">
      {/* Top Banner */}
      <div className="bg-neo-yellow text-black border-b-3 border-black py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-display font-extrabold text-sm sm:text-base">
          <div className="flex items-center gap-2 text-black">
            <Flame className="w-5 h-5 fill-current text-black" />
            <span className="text-black">{t.footer.compendiumBanner}</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-black font-bold">
            <span>{totalChapters} {t.footer.playbooksCount}</span>
            <span>•</span>
            <span>{totalModules} {t.footer.modulesCount}</span>
            <span>•</span>
            <span>~{totalReadingTimeHours} {t.footer.hoursTotal}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Manifesto */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-neo-yellow border-2 border-black">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <span className="font-display font-black text-xl text-neutral-900 dark:text-white">
                PM PLAYBOOK<span className="text-neo-pink">.</span>
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t.footer.manifesto}
            </p>
            <div className="p-3 bg-neo-bg dark:bg-neo-darkBg border-2 border-black shadow-neo-sm text-xs font-mono text-neutral-700 dark:text-neutral-300">
              <span className="text-neo-pink font-bold">{t.footer.shortcutTip}</span> Press <kbd className="px-1 py-0.5 bg-neo-yellow text-black border border-black font-bold">⌘K</kbd> {t.footer.shortcutPress}
            </div>
          </div>

          {/* Col 2: Modules 1-5 */}
          <div className="space-y-2">
            <h4 className="font-display font-black text-sm uppercase tracking-wider text-neutral-900 dark:text-white pb-1 border-b-2 border-black dark:border-white/20">
              {t.footer.corePlaybooks}
            </h4>
            <ul className="space-y-1.5 text-xs font-medium">
              {modules.slice(0, 5).map((mod) => (
                <li key={mod.id}>
                  <Link
                    to={`/docs/${mod.docs[0]?.docSlug}`}
                    className="text-neutral-600 dark:text-neutral-300 hover:text-neo-blue dark:hover:text-neo-cyan hover:underline block truncate"
                  >
                    <span className="font-mono font-bold text-neutral-900 dark:text-white">M{mod.id}.</span> {mod.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Modules 6-9 */}
          <div className="space-y-2">
            <h4 className="font-display font-black text-sm uppercase tracking-wider text-neutral-900 dark:text-white pb-1 border-b-2 border-black dark:border-white/20">
              {t.footer.advancedPractice}
            </h4>
            <ul className="space-y-1.5 text-xs font-medium">
              {modules.slice(5).map((mod) => (
                <li key={mod.id}>
                  <Link
                    to={`/docs/${mod.docs[0]?.docSlug}`}
                    className="text-neutral-600 dark:text-neutral-300 hover:text-neo-blue dark:hover:text-neo-cyan hover:underline block truncate"
                  >
                    <span className="font-mono font-bold text-neutral-900 dark:text-white">M{mod.id}.</span> {mod.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Back to Top */}
          <div className="space-y-4">
            <h4 className="font-display font-black text-sm uppercase tracking-wider text-neutral-900 dark:text-white pb-1 border-b-2 border-black dark:border-white/20">
              {t.footer.quickActions}
            </h4>
            <div className="space-y-2">
              <Link
                to="/docs/1-1-why-product-management-is-not-for-everyone"
                className="w-full inline-flex items-center justify-center font-display font-black text-xs py-2.5 px-4 bg-neo-yellow text-black border-2 border-black shadow-neo hover:bg-black hover:text-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[3px_3px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all select-none"
              >
                <span>{t.footer.startFromBeginning}</span>
              </Link>
              <button
                onClick={scrollToTop}
                className="w-full inline-flex items-center justify-center font-display font-bold text-xs py-2.5 px-4 bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white border-2 border-black dark:border-white/30 shadow-neo hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[3px_3px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer select-none gap-1.5"
              >
                <ArrowUp className="w-3.5 h-3.5" /> {t.footer.backToTop}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t-2 border-black dark:border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <span>Built for Product Leaders & Builders with</span>
            <Sparkles className="w-3.5 h-3.5 text-neo-pink inline" />
            <span>Neobrutalism UI</span>
          </div>
          <div>
            <span>{t.footer.authorPrefix}</span>
            <a
              href="https://www.linkedin.com/in/rizqis/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-neutral-900 dark:text-white underline decoration-2 decoration-neo-yellow hover:bg-neo-yellow hover:!text-black px-1 transition-all cursor-pointer"
            >
              Si Rizqi
            </a>
            <span> • Your beloved PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
