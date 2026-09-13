import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bookmark, Sun, Moon, BookOpen, Menu, X, Flame, Languages, Heart } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useBookmarks } from '../hooks/useBookmarks';
import { useLanguage, useDonation } from '../context/AppContext';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookmarks }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { openDonationModal } = useDonation();
  const { bookmarks } = useBookmarks();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDocs = location.pathname.startsWith('/docs');
  const [activeSection, setActiveSection] = useState<'home' | 'docs' | 'tracks' | 'modules'>('home');

  // Real-time ScrollSpy for Landing Page Sections
  useEffect(() => {
    if (isDocs) {
      setActiveSection('docs');
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const tracksEl = document.getElementById('learning-tracks');
      const modulesEl = document.getElementById('modules-section');

      const tracksTop = tracksEl ? tracksEl.offsetTop - 140 : 800;
      const modulesTop = modulesEl ? modulesEl.offsetTop - 140 : 1600;

      if (scrollY >= modulesTop) {
        setActiveSection('modules');
      } else if (scrollY >= tracksTop) {
        setActiveSection('tracks');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDocs, location]);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.history.pushState(null, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    }
  };

  const scrollToSection = (id: string, sectionKey: 'tracks' | 'modules', e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.history.pushState(null, '', `/#${id}`);
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(sectionKey);
      }
    }
  };

  const getNavClass = (isActive: boolean) =>
    `px-3.5 py-1.5 border-2 transition-all cursor-pointer select-none ${
      isActive
        ? 'bg-neo-yellow text-black border-black shadow-neo-sm font-black'
        : 'border-transparent text-neutral-800 dark:text-neutral-200 hover:border-black hover:bg-neo-yellow hover:text-black hover:shadow-neo-sm dark:hover:border-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5'
    }`;

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
              className={getNavClass(activeSection === 'home')}
            >
              {t.navbar.home}
            </Link>
            <Link
              to="/docs/1-1-why-product-management-is-not-for-everyone"
              className={`${getNavClass(activeSection === 'docs')} flex items-center gap-1.5`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.navbar.readDocs}</span>
            </Link>
            <Link
              to="/#learning-tracks"
              onClick={(e) => scrollToSection('learning-tracks', 'tracks', e)}
              className={getNavClass(activeSection === 'tracks')}
            >
              {t.navbar.tracks}
            </Link>
            <Link
              to="/#modules-section"
              onClick={(e) => scrollToSection('modules-section', 'modules', e)}
              className={getNavClass(activeSection === 'modules')}
            >
              {t.navbar.nineModules}
            </Link>
          </nav>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Support / Donate Button */}
          <button
            onClick={openDonationModal}
            className="flex items-center gap-1.5 px-3 py-2 bg-neo-yellow text-black border-2 border-black shadow-neo-sm hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-black hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[2px_2px_0px_0px_#FFE600] transition-all text-xs font-display font-black cursor-pointer select-none"
            title={t.donation.modalTitle}
          >
            <Heart className="w-4 h-4 text-current fill-current" />
            <span className="hidden sm:inline">{t.donation.navButton}</span>
          </button>

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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-neo-bg dark:bg-neo-darkBg p-4 space-y-2">
          <Link
            to="/"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleHomeClick(e);
            }}
            className={`block p-2.5 font-bold border-2 border-black shadow-neo-sm transition-all ${
              activeSection === 'home'
                ? 'bg-neo-yellow text-black font-black'
                : 'bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow'
            }`}
          >
            {t.navbar.home}
          </Link>
          <Link
            to="/docs/1-1-why-product-management-is-not-for-everyone"
            onClick={() => setMobileMenuOpen(false)}
            className={`block p-2.5 font-bold border-2 border-black shadow-neo-sm transition-all ${
              activeSection === 'docs'
                ? 'bg-neo-yellow text-black font-black'
                : 'bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow'
            }`}
          >
            {t.navbar.readDocs} {language === 'id' ? '(47 Bab)' : '(47 Chapters)'}
          </Link>
          <Link
            to="/#learning-tracks"
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToSection('learning-tracks', 'tracks', e);
            }}
            className={`block p-2.5 font-bold border-2 border-black shadow-neo-sm transition-all ${
              activeSection === 'tracks'
                ? 'bg-neo-yellow text-black font-black'
                : 'bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow'
            }`}
          >
            {t.navbar.tracks}
          </Link>
          <Link
            to="/#modules-section"
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToSection('modules-section', 'modules', e);
            }}
            className={`block p-2.5 font-bold border-2 border-black shadow-neo-sm transition-all ${
              activeSection === 'modules'
                ? 'bg-neo-yellow text-black font-black'
                : 'bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow'
            }`}
          >
            {t.navbar.nineModules}
          </Link>
          <button
            onClick={() => {
              openDonationModal();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left p-2.5 font-bold border-2 border-black bg-neo-yellow text-black shadow-neo-sm hover:bg-black hover:text-neo-yellow flex items-center justify-between cursor-pointer"
          >
            <span className="flex items-center gap-1.5 font-display font-black">
              <Heart className="w-4 h-4 fill-current" />
              {t.donation.modalTitle}
            </span>
            <span className="text-xs font-mono font-bold">QRIS ↗</span>
          </button>
          <button
            onClick={() => {
              toggleLanguage();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left p-2.5 font-bold border-2 border-black bg-white dark:bg-neo-darkSurface text-neutral-900 dark:text-white shadow-neo-sm hover:bg-neo-yellow hover:text-black dark:hover:bg-black dark:hover:text-neo-yellow flex items-center justify-between"
          >
            <span>{language === 'id' ? 'Bahasa' : 'Language'}</span>
            <span className="px-2 py-0.5 bg-neo-yellow text-black border border-black text-xs font-mono font-bold">
              {language.toUpperCase()}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
