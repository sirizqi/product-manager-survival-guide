import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/AppContext';

interface FloatingDonateButtonProps {
  onClick: () => void;
}

export const FloatingDonateButton: React.FC<FloatingDonateButtonProps> = ({ onClick }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-3.5 py-2 bg-neo-yellow text-black border-2 border-black shadow-neo hover:shadow-neo-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-black hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[3px_3px_0px_0px_#FFE600] transition-all font-display font-black text-xs sm:text-sm select-none cursor-pointer group"
        title={t.donation.modalTitle}
      >
        <div className="w-5 h-5 bg-black text-neo-yellow group-hover:bg-neo-yellow group-hover:text-black flex items-center justify-center border border-black transition-colors">
          <Heart className="w-3.5 h-3.5 fill-current" />
        </div>
        <span>{t.donation.navButton}</span>
        <Sparkles className="w-3.5 h-3.5 text-neo-pink fill-neo-pink animate-pulse" />
      </button>
    </div>
  );
};
