import React, { useEffect, useState, useRef } from 'react';
import { X, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { DonationItem } from '../types';
import { useLanguage } from '../context/AppContext';

interface DonationOverlayProps {
  donation: DonationItem | null;
  onDismiss: () => void;
}

export const DonationOverlay: React.FC<DonationOverlayProps> = ({ donation, onDismiss }) => {
  const { t, language } = useLanguage();
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const duration = 8000; // 8 seconds per WCAG toast guidelines
  const startTimeRef = useRef<number>(Date.now());
  const elapsedBeforePauseRef = useRef<number>(0);

  useEffect(() => {
    if (!donation) return;

    // Trigger celebratory dual-burst confetti!
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { x: 0.2, y: 0.5 },
        colors: ['#FFE600', '#FF5C93', '#38BDF8', '#4ADE80', '#000000'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { x: 0.8, y: 0.5 },
          colors: ['#FFE600', '#FF5C93', '#38BDF8', '#4ADE80', '#000000'],
        });
      }, 250);
    } catch {
      // ignore
    }

    setProgress(100);
    startTimeRef.current = Date.now();
    elapsedBeforePauseRef.current = 0;

    const interval = setInterval(() => {
      if (isPaused) return;

      const elapsed = Date.now() - startTimeRef.current + elapsedBeforePauseRef.current;
      const remainingPct = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remainingPct);

      if (remainingPct <= 0) {
        clearInterval(interval);
        onDismiss();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [donation, onDismiss, isPaused]);

  if (!donation) return null;

  const handleMouseEnter = () => {
    setIsPaused(true);
    elapsedBeforePauseRef.current += Date.now() - startTimeRef.current;
  };

  const handleMouseLeave = () => {
    startTimeRef.current = Date.now();
    setIsPaused(false);
  };

  const formattedAmount =
    donation.currency === 'IDR'
      ? `Rp ${donation.amount.toLocaleString('id-ID')}`
      : `${donation.amount.toLocaleString()} ${donation.currency}`;

  return (
    <div
      role="alert"
      aria-live="polite"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] sm:w-96 bg-white dark:bg-neo-darkSurface border-3 border-black shadow-neo-xl animate-in slide-in-from-bottom-8 duration-300 overflow-hidden select-none"
    >
      {/* Top Banner */}
      <div className="px-4 py-2 bg-neo-yellow text-black border-b-2 border-black flex items-center justify-between">
        <div className="flex items-center gap-2 font-display font-black text-xs uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-neo-pink fill-neo-pink animate-spin duration-3000" />
          <span>{t.donation.alertTitle}</span>
        </div>
        <button
          onClick={onDismiss}
          className="p-1 hover:bg-black hover:text-neo-yellow border border-black transition-colors cursor-pointer"
          aria-label={t.donation.close}
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-none bg-neo-pink border-2 border-black shadow-neo-sm flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-black fill-black" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="font-display font-bold text-sm text-neutral-900 dark:text-white leading-snug">
              <span className="font-black text-black dark:text-neo-yellow underline decoration-2 decoration-neo-pink">
                {donation.sender}
              </span>{' '}
              <span className="text-neutral-700 dark:text-neutral-300 text-xs">
                {t.donation.justTipped}
              </span>
            </div>

            <div className="mt-1 inline-block px-2.5 py-0.5 bg-neo-green text-black border border-black font-mono font-black text-sm shadow-neo-sm">
              {formattedAmount}
            </div>
          </div>
        </div>

        {/* Message Quote */}
        {donation.message && (
          <div className="p-2.5 bg-neo-bg dark:bg-neutral-800 border-2 border-black text-xs text-neutral-800 dark:text-neutral-200 italic leading-relaxed">
            "{donation.message}"
          </div>
        )}

        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 dark:text-neutral-400 pt-1">
          <span className="flex items-center gap-1">
            <Heart className="w-3 h-3 text-neo-pink fill-neo-pink" />
            <span>{t.donation.viaKreate}</span>
          </span>
          <span>{isPaused ? (language === 'id' ? 'Ditahan' : 'Paused') : (language === 'id' ? 'Otomatis tutup' : 'Auto closing')}</span>
        </div>
      </div>

      {/* Dismiss countdown progress bar */}
      <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full bg-neo-pink transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
