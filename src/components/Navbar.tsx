import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bookmark, Sun, Moon, BookOpen, Menu, X, Flame, Languages } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useBookmarks } from '../hooks/useBookmarks';
import { useLanguage } from '../context/AppContext';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookmarks }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { bookmarks } = useBookmarks();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDocs = location.pathname.startsWith('/docs');

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-neo-bg dark:bg-neo-darkBg border-b-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 bg-neo-yellow border-2 border-black shadow-neo-sm flex items-center justify-center font-display font-extrabold text-xl group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-neo transition-all">
              <Flame className="w-6 h-6 text-black fill-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg md:text-xl tracking-tight leading-none text-neutral-900 dark:text-white">
                PM PLAYBOOK<span className="text-neo-pink">.</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider text-neutral-600 dark:text-neutral-400 uppercase">
                {t.navbar.brandSubtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Order: Home -> Read Docs -> Tracks -> 9 Modules) */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-bold">
            <Link
              to="/"
              onClick={handleHomeClick}
              className={`px-3.5 py-1.5 border-2 transition-all cursor-pointer select-none ${
                location.pathname === '/' && !location.hash
                  ? 'bg-neo-yellow text-black border-black shadow-neo-sm font-black'
                  : 'border-transparent text-neutral-800 dark:text-neutral-200 hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-neo-sm dark:hover:border-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5'
              }`}
            >
              {t.navbar.home}
            </Link>
            <Link
              to="/docs/1-1-why-product-management-is-not-for-everyone"
              className={`px-3.5 py-1.5 border-2 transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                isDocs
                  ? 'bg-neo-yellow text-black border-black shadow-neo-sm font-black'
                  : 'border-transparent text-neutral-800 dark:text-neutral-200 hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-neo-sm dark:hover:border-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.navbar.readDocs}</span>
            </Link>
            <Link
              to="/#learning-tracks"
              onClick={(e) => scrollToSection('learning-tracks', e)}
              className="px-3.5 py-1.5 border-2 border-transparent text-neutral-800 dark:text-neutral-200 hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-neo-sm dark:hover:border-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
            >
              {t.navbar.tracks}
            </Link>
            <Link
              to="/#modules-section"
              onClick={(e) => scrollToSection('modules-section', e)}
              className="px-3.5 py-1.5 border-2 border-transparent text-neutral-800 dark:text-neutral-200 hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-neo-sm dark:hover:border-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
            >
              {t.navbar.nineModules}
            </Link>
          </nav>
        </div>

        {/* Right Tools (Clean, Explicit Light & Dark Hover) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-neo-darkSurface border-2 border-black dark:border-white/30 shadow-neo-sm hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-neo dark:hover:border-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-xs font-mono font-black text-neutral-900 dark:text-white cursor-pointer"
            title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
          >
            <Languages className="w-4 h-4 text-current" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Bookmarks Drawer Trigger */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-2 bg-white dark:bg-neo-darkSurface border-2 border-black dark:border-white/30 shadow-neo-sm hover:border-black hover:bg-neo-pink hover:text-black hover:shadow-neo dark:hover:border-neo-pink dark:hover:bg-black dark:hover:text-neo-pink dark:hover:shadow-[2px_2px_0px_0px_#FF5C93] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-neutral-800 dark:text-neutral-200 cursor-pointer"
            title="View saved bookmarks"
          >
            <Bookmark className="w-5 h-5 text-current" />
            {bookmarks.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 bg-neo-pink text-black border border-black text-[10px] font-black">
                {bookmarks.length}
              </span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-white dark:bg-neo-darkSurface border-2 border-black dark:border-white/30 shadow-neo-sm hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-neo dark:hover:border-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-neutral-800 dark:text-neutral-200 cursor-pointer"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-neo-yellow" /> : <Moon className="w-5 h-5 text-neutral-900" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-white dark:bg-neo-darkSurface border-2 border-black dark:border-white/30 shadow-neo-sm text-neutral-800 dark:text-neutral-200 cursor-pointer hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Order: Home -> Read Docs -> Tracks -> 9 Modules) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-neo-bg dark:bg-neo-darkBg p-4 space-y-2">
          <Link
            to="/"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleHomeClick(e);
            }}
            className="block p-2.5 font-bold border-2 border-black bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white shadow-neo-sm hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow"
          >
            {t.navbar.home}
          </Link>
          <Link
            to="/docs/1-1-why-product-management-is-not-for-everyone"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 font-bold border-2 border-black bg-neo-yellow text-black shadow-neo-sm"
          >
            {t.navbar.readDocs} (47 Chapters)
          </Link>
          <Link
            to="/#learning-tracks"
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToSection('learning-tracks', e);
            }}
            className="block p-2.5 font-bold border-2 border-black bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white shadow-neo-sm hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow"
          >
            {t.navbar.tracks}
          </Link>
          <Link
            to="/#modules-section"
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToSection('modules-section', e);
            }}
            className="block p-2.5 font-bold border-2 border-black bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white shadow-neo-sm hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow"
          >
            {t.navbar.nineModules}
          </Link>
          <button
            onClick={() => {
              toggleLanguage();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left p-2.5 font-bold border-2 border-black bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white shadow-neo-sm hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow flex items-center justify-between"
          >
            <span>Language</span>
            <span className="px-2 py-0.5 bg-neo-yellow text-black border border-black text-xs font-mono font-bold">
              {language.toUpperCase()}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
