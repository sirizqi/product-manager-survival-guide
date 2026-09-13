import React, { useEffect, useState } from 'react';
import { X, ExternalLink, QrCode, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../context/AppContext';
import { KreateQrWidget } from './KreateQrWidget';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSimulate?: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, onSimulate }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'qr' | 'direct'>('qr');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-modal-title"
        className="relative w-full max-w-lg bg-neo-bg dark:bg-neo-darkBg border-3 border-black shadow-neo-xl flex flex-col z-10 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 bg-neo-yellow text-black border-b-3 border-black flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-black text-neo-yellow border-2 border-black flex items-center justify-center shadow-neo-sm">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 id="donation-modal-title" className="font-display font-black text-base sm:text-lg leading-none">
                {t.donation.modalTitle}
              </h2>
              <p className="text-[11px] font-bold text-black/80 mt-0.5">
                Si Rizqi • {t.sidebar.yourBelovedPm}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-white text-black border-2 border-black shadow-neo-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
            aria-label={t.donation.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="p-3 bg-white dark:bg-neo-darkSurface border-b-2 border-black flex items-center gap-2">
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex-1 py-2 px-3 text-xs font-display font-bold border-2 border-black transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${
              activeTab === 'qr'
                ? 'bg-neo-yellow text-black shadow-neo-sm font-black -translate-x-0.5 -translate-y-0.5'
                : 'bg-neo-bg dark:bg-neo-darkBg text-neutral-800 dark:text-neutral-200 hover:bg-neo-yellow/30 hover:text-black'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>{t.donation.tabQr}</span>
          </button>

          <button
            onClick={() => setActiveTab('direct')}
            className={`flex-1 py-2 px-3 text-xs font-display font-bold border-2 border-black transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${
              activeTab === 'direct'
                ? 'bg-neo-pink text-black shadow-neo-sm font-black -translate-x-0.5 -translate-y-0.5'
                : 'bg-neo-bg dark:bg-neo-darkBg text-neutral-800 dark:text-neutral-200 hover:bg-neo-pink/30 hover:text-black'
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>{t.donation.tabDirect}</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
            {t.donation.modalSubtitle}
          </p>

          {activeTab === 'qr' ? (
            <div className="space-y-3">
              {/* Responsive, Uncut & Clean Vector QR Widget */}
              <KreateQrWidget />
            </div>
          ) : (
            <div className="p-5 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo space-y-4 text-center">
              <div className="w-14 h-14 mx-auto bg-neo-pink border-3 border-black shadow-neo-sm flex items-center justify-center">
                <Heart className="w-7 h-7 text-black fill-black" />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-black text-lg text-neutral-900 dark:text-white">
                  {t.donation.directTitle}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
                  {t.donation.directSubtitle}
                </p>
              </div>

              <a
                href="https://kreate.gg/sirizqi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center font-display font-black text-sm py-3 px-6 bg-neo-yellow text-black border-2 border-black shadow-neo hover:bg-black hover:text-neo-yellow dark:hover:bg-black dark:hover:text-neo-yellow dark:hover:border-neo-yellow dark:hover:shadow-[3px_3px_0px_0px_#FFE600] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all select-none gap-2"
              >
                <span>{t.donation.directButton}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="pt-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                {t.donation.directUrlLabel} <span className="font-bold underline">https://kreate.gg/sirizqi</span>
              </div>
            </div>
          )}

          {/* Test / Simulation Option */}
          {onSimulate && (
            <div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between flex-wrap gap-2">
              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                {t.donation.webhookEventLabel} <code className="font-bold">tip_received</code>
              </span>
              <button
                onClick={onSimulate}
                className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-1 bg-white dark:bg-neo-darkSurface border border-black shadow-neo-sm hover:bg-neo-yellow hover:text-black transition-all cursor-pointer"
                title="Trigger a test webhook donation overlay"
              >
                <Sparkles className="w-3 h-3 text-neo-pink fill-neo-pink" />
                <span>{t.donation.simulateAlert}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
