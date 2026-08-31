import React from 'react';
import { Link } from 'react-router-dom';
import { AlertOctagon, Home, Search } from 'lucide-react';
import { useLanguage } from '../context/AppContext';

interface NotFoundPageProps {
  onOpenSearch: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onOpenSearch }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-neo-bg dark:bg-neo-darkBg">
      <div className="max-w-md w-full p-8 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo-xl text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-neo-pink border-3 border-black shadow-neo flex items-center justify-center">
          <AlertOctagon className="w-8 h-8 text-black" />
        </div>

        <div>
          <span className="font-mono text-xs font-black px-2.5 py-1 bg-neo-yellow text-black border border-black uppercase">
            {t.notFound.badge}
          </span>
          <h1 className="font-display font-black text-3xl text-neutral-900 dark:text-white mt-3">
            {t.notFound.title}
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">
            {t.notFound.description}
          </p>
        </div>

        <div className="space-y-2 pt-2">
          <Link
            to="/"
            className="w-full neo-btn-primary text-sm py-2.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 text-black" />
            <span className="text-black font-bold">{t.notFound.backHome}</span>
          </Link>
          <button
            onClick={onOpenSearch}
            className="w-full neo-btn-secondary text-sm py-2.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4" /> {t.notFound.searchAll}
          </button>
        </div>
      </div>
    </div>
  );
};
